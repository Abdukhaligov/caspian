<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Whitecube\NovaFlexibleContent\Concerns\HasFlexible;

class Sponsor extends Model implements HasMedia {
  use HasFlexible, HasMediaTrait;

  public function socialNetworks() {
    return $this->flexible('social_networks');
  }

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

  public function degree(){
    return $this->belongsTo(Degree::class);
  }

}
