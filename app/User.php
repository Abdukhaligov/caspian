<?php

namespace App;

use App\Models\Degree;
use App\Models\Event;
use App\Models\Membership;
use App\Models\Pages\Initial;
use App\Models\Reference;
use App\Models\Report;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;

class User extends Authenticatable implements HasMedia {

  use HasApiTokens, Notifiable;
  use HasMediaTrait;

  public function registerMediaConversions(Media $media = null) {
    $this->addMediaConversion('thumb')
        ->width(130)
        ->height(130);
  }

  public function registerMediaCollections() {
    $this
        ->addMediaCollection('avatar')
        ->useDisk('mediaFiles')
        ->singleFile();

  }


  protected $guarded = [];
  protected $fillable = ['name', 'email', 'password', 'phone', 'company', 'job_title', 'reference_id', 'membership_id', 'topic_id'];
  protected $hidden = ['password', 'remember_token'];
  protected $casts = ['email_verified_at' => 'datetime'];

  public function isAdmin() { return $this->is_admin; }

  public function reference() { return $this->belongsTo(Reference::class); }

  public function membership() { return $this->belongsTo(Membership::class); }

  public function degree() { return $this->belongsTo(Degree::class); }

  public function reports() { return $this->hasMany(Report::class); }

  public function pendingReports() { return $this->reports()->where('status', '=', 'pending'); }


  public function events() {
    return $this->belongsToMany(Event::class);
  }


  public function canAddReports() {
    if ($this->isAdmin() || $this->rank) return true;


//    return $this->checkMembership([2, 3]) && $this->checkAccessCount(Initial::getData()->max_report_count);
    return $this->membership->reporter && $this->checkAccessCount(Initial::getData()->max_report_count);
  }

  public static function speakers() {
    return User::whereHas('membership', function ($q) {
      $q->where('reporter', true);
    })->get();
  }

//  private function checkMembership(array $ids = []) {
//    if (!count($ids)) return false;
//
//    return in_array($this->membership->id, $ids);
//  }

  private function checkAccessCount(int $count = 0) {
    return $this->pendingReports->count() < $count;
  }

}

