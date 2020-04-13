<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Spatie\Translatable\HasTranslations;

class News extends Model implements HasMedia {

  use HasTranslations;
  use HasMediaTrait;
  public $translatable = ['title', 'body'];



  public function preview(){
    if($this->getMedia('preview')->first() == null) return false;

    return json_decode($this->getMedia('preview')->first());
  }

  public function minimumDescription(){
    return substr($this->body,0,80)."...</p>";
  }

  public function registerMediaConversions(Media $media = null) {
    $this->addMediaConversion('thumb')
        ->width(130)
        ->height(130);
  }

  public function registerMediaCollections() {
    $this->addMediaCollection('preview')->singleFile()->useDisk('mediaFiles');
  }

}
