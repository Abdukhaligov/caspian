<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Spatie\Translatable\HasTranslations;
use Whitecube\NovaFlexibleContent\Concerns\HasFlexible;

class SingleGallery extends Model implements HasMedia {
  use HasMediaTrait;
  use HasTranslations;
  use HasFlexible;

  public function getFlexibleContentAttribute() {
    return $this->flexible('flexible-content');
  }

  public $translatable = ['name'];

  public function registerMediaConversions(Media $media = null) {
    $this->addMediaConversion('thumb')
        ->width(130)
        ->height(130);
  }

  public function registerMediaCollections() {
    $this->addMediaCollection('photos')->useDisk('mediaFiles');

//        $this->addMediaCollection('main')->singleFile()->useDisk('mediaFiles');
//        $this->addMediaCollection('my_multi_collection')->useDisk('mediaFiles');
  }

}
