<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Spatie\Translatable\HasTranslations;
use Whitecube\NovaFlexibleContent\Concerns\HasFlexible;

class Gallery extends Model implements HasMedia {

  protected $table = 'page_gallery';

  use HasMediaTrait,HasFlexible;


  public function videos() {
    return $this->flexible('videos');
  }

  public function registerMediaConversions(Media $media = null) {
    $this->addMediaConversion('thumb')
        ->width(130)
        ->height(130);
  }

  public function registerMediaCollections() {
    $this->addMediaCollection('media')->useDisk('mediaFiles');
  }

}
