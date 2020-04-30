<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Spatie\Translatable\HasTranslations;
use Whitecube\NovaFlexibleContent\Concerns\HasFlexible;

class Event extends Model implements HasMedia{

  protected $casts = ['date' => 'datetime'];

  use HasMediaTrait;

  public function speakers(){
    return $this->belongsToMany(Speaker::class);
  }

  public function registerMediaConversions(Media $media = null) {
    $this->addMediaConversion('thumb')
        ->width(130)
        ->height(130);
  }

  public function registerMediaCollections() {
    $this->addMediaCollection('banners')->useDisk('mediaFiles');
//        $this->addMediaCollection('main')->singleFile()->useDisk('mediaFiles');
//        $this->addMediaCollection('my_multi_collection')->useDisk('mediaFiles');
  }

}
