<?php

namespace App;

use App\Models\Event;
use App\Models\Membership;
use App\Models\Pages\Initial;
use App\Models\Reference;
use App\Models\Report;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable {

  use HasApiTokens, Notifiable;

  protected $guarded = [];
  protected $fillable = ['name', 'email', 'password', 'phone', 'company', 'job_title', 'reference_id', 'membership_id', 'topic_id'];
  protected $hidden = ['password', 'remember_token'];
  protected $casts = ['email_verified_at' => 'datetime'];

  public function isAdmin() { return $this->is_admin; }

  public function reference() { return $this->belongsTo(Reference::class); }

  public function membership() { return $this->belongsTo(Membership::class); }

  public function reports() { return $this->hasMany(Report::class); }

  public function pendingReports() { return $this->reports()->where('status', '=', 'pending'); }

  public static function forSelection() {
    $array = array();

//    App\Models\Event::where('active', true)->first()->speakers)
//    foreach (Speaker::all('id', 'user_id') as $speaker) {

    foreach (Event::activeEvent()->users as $user) {

      $array[$user->id] = $user->name;
    }

    return $array;
  }

  public function events() {
    return $this->belongsToMany(Event::class);
  }


  public function canAddReports() {
    if ($this->isAdmin() || $this->rank) return true;



//    return $this->checkMembership([2, 3]) && $this->checkAccessCount(Initial::getData()->max_report_count);
    return $this->membership->reporter && $this->checkAccessCount(Initial::getData()->max_report_count);
  }

  public static function speakers(){
    return User::whereHas('membership', function($q) {
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

