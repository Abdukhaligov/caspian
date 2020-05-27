<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;

class Event extends Model implements HasMedia {

  protected $casts = ['date' => 'datetime', 'program' => "array"];
  protected $fillable = ["status"];

  use HasMediaTrait;


  public function usersForSelection() {
    $array = array();

      foreach ($this->users as $user) {
        $array[$user->id] = $user->name;
      }


    return $array;
  }

  public function users() {
    return $this->belongsToMany(User::class);
  }

  protected function performUpdate(Builder $query) {
      $events = self::all('id');
      foreach ($events as $event) {
        Event::where('id',$event->id)->update(['active'=>0]);
      }

      return parent::performUpdate($query); // TODO: Change the autogenerated stub
  }

  protected function performInsert(Builder $query) {
    if(json_decode($query->getModel())->active){
      $events = self::all('id');
      foreach ($events as $event) {
        Event::where('id',$event->id)->update(['active'=>0]);
      }
    }
    return parent::performInsert($query); // TODO: Change the autogenerated stub
  }


  public function registerMediaConversions(Media $media = null) {
    $this->addMediaConversion('thumb')
        ->width(130)
        ->height(130);
  }

  public static function activeEvent() {
    if(Event::where('active', true)){
      return Event::where('active', true)->first();
    }else{
      return false;
    }

  }

  public function registerMediaCollections() {
    $this->addMediaCollection('banners')->useDisk('mediaFiles');
  }


}
