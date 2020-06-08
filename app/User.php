<?php

namespace App;

use App\Models\Degree;
use App\Models\Document;
use App\Models\Event;
use App\Models\Membership;
use App\Models\Pages\Initial;
use App\Models\Reference;
use App\Models\Report;
use App\Nova\Voucher;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Whitecube\NovaFlexibleContent\Concerns\HasFlexible;

class User extends Authenticatable implements HasMedia {

  protected $guarded = [];
  protected $fillable = ['name', 'email', 'password', 'phone', 'company', 'job_title', 'reference_id'];
  protected $hidden = ['password', 'remember_token'];
  protected $casts = ['email_verified_at' => 'datetime'];

  use HasApiTokens, Notifiable, HasFlexible, HasMediaTrait;

  public function isAdmin() { return $this->is_admin; }

  public function degree() { return $this->belongsTo(Degree::class); }

  public function reference() { return $this->belongsTo(Reference::class); }

  public function reports() { return $this->hasMany(Report::class); }

  public function documents() { return $this->hasMany(Document::class); }

  public function eventReports($id) {
    $event = Event::find($id);
    return $event ? $this->reports()->where('event_id', $event->id) : null;
  }

  public function currentReports() {
    $event = Event::activeEvent();
    return $event ? $this->eventReports($event->id) : null;
  }

  public function pendingReports() {
    return $this
        ->currentReports()
        ->where('status', '=', '1');
  }

  public function memberships() {
    return $this
        ->belongsToMany(Membership::class, 'event_user')
        ->withPivot('event_id', 'status');
  }

  public function currentMembership() {
    if (!$this->currentEvent()) return null;

    $pivot = $this->currentEvent()->pivot;

    $membership = Membership::find($pivot->membership_id);
    $membership["status"] = $pivot->status;

    return $membership;
  }

  public function eventVouchers($id) {

    $membership = $this
        ->memberships()
        ->where('event_user.event_id', '=', $id)
        ->where('event_user.status', '=', 3)
        ->first();

    return $membership ? $membership
        ->vouchers()
        ->where('event_id', '=', $id)
        ->get()
        : null;
  }

  public function canAddReports() {
    if ($this->isAdmin() || $this->rank) return true;

    if (!$this->checkAccessCount(Initial::getData()->max_report_count)) return false;

    $membership = $this->currentMembership();
    //if ($membership->status != 3) return false;

    return $membership ? $membership->reporter : false;
  }

  public function events() {
    return $this
        ->belongsToMany(Event::class)
        ->using(MyPivot::class)
        ->withPivot('membership_id', 'status');
  }

  public function currentEvent() {
    $event = Event::activeEvent();
    return $event ? $this
        ->events()
        ->where('event_id', '=', $event->id)
        ->get()->first() : null;
  }

  public static function speakers() {
    return self::with('memberships')
            ->whereHas('memberships', function ($q) {
              return $q->where('reporter', '=', 1);
            }) ?? null;
  }

//    return $this->checkMembership([2, 3]) && $this->checkAccessCount(Initial::getData()->max_report_count);
//    return $this->membership->reporter && $this->checkAccessCount(Initial::getData()->max_report_count);


//  private function checkMembership(array $ids = []) {
//    if (!count($ids)) return false;
//    return in_array($this->membership->id, $ids);
//  }

  private function checkAccessCount(int $count = 0) {
    return $this->pendingReports->count() < $count;
  }

  public function socialNetworks() { return $this->flexible('social_networks'); }

  public function registerMediaConversions(Media $media = null) {
    $this->addMediaConversion('thumb')
        ->width(130)
        ->height(130);
  }

  public function registerMediaCollections() {
    $this
        ->addMediaCollection('avatars')
        ->useDisk('mediaFiles')
        ->singleFile();
  }

}

