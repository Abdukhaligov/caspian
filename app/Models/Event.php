<?php

namespace App\Models;

use App\MyPivot;
use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Whitecube\NovaFlexibleContent\Concerns\HasFlexible;

class Event extends Model implements HasMedia {

  protected $casts = ['date' => 'datetime'];
  protected $fillable = ["active"];

  use HasMediaTrait, HasFlexible;

  public function memberships() { return $this->belongsToMany(Membership::class, 'event_user'); }

  public function vouchers() { return $this->hasMany(Voucher::class); }

  public function reports() { return $this->hasMany(Report::class); }

  public function userReports($id) {
    return $this->reports()
        ->where('user_id', '=', $id)
        ->with('topic')
        ->get();
  }

  public function speakers() {
    return $this
            ->users()
            ->wherePivot('status', 3)
            ->whereHas('memberships', function ($q) {
              return $q->where('reporter', '=', 1);
            })
        ?? null;
  }

  public function users() {
    return $this
        ->belongsToMany(User::class)
        ->using(MyPivot::class)
        ->withPivot('membership_id', 'status');
  }

  public function usersForSelection() {
    $array = array();
    foreach ($this->users as $user) {
      $array[$user->id] = $user->name;
    }
    return $array;
  }

  public static function activeEvent() { return Event::where('active', true)->first() ?? null; }

  protected function performUpdate(Builder $query) {
    $events = self::all('id');
    foreach ($events as $event) {
      Event::where('id', $event->id)->update(['active' => 0]);
    }

    return parent::performUpdate($query);
  }

  protected function performInsert(Builder $query) {
    if (json_decode($query->getModel())->active) {
      $events = self::all('id');
      foreach ($events as $event) {
        Event::where('id', $event->id)->update(['active' => 0]);
      }
    }
    return parent::performInsert($query);
  }

  public function days() { return $this->flexible('days'); }

  public function registerMediaConversions(Media $media = null) {
    $this->addMediaConversion('thumb')
        ->width(130)
        ->height(130);
  }

  public function registerMediaCollections() {
    $this->addMediaCollection('banners')->useDisk('mediaFiles');
  }


}
