<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;

class Event extends Model implements HasMedia {

  protected $casts = ['date' => 'datetime','program' => "array"];

  use HasMediaTrait;

  public function users() {
    return $this->belongsToMany(User::class);
  }

  public function registerMediaConversions(Media $media = null) {
    $this->addMediaConversion('thumb')
        ->width(130)
        ->height(130);
  }

  public static function activeEvent(){
    return Event::where('active', true)->first();
  }

  public function registerMediaCollections() {
    $this->addMediaCollection('banners')->useDisk('mediaFiles');
//        $this->addMediaCollection('main')->singleFile()->useDisk('mediaFiles');
//        $this->addMediaCollection('my_multi_collection')->useDisk('mediaFiles');
  }


}
