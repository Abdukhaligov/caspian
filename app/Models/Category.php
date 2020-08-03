<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;

/**
 * @method static create(array $array)
 * @method static find($id)
 */
class Category extends Model implements HasMedia
{
  use HasMediaTrait;
  public function registerMediaConversions(Media $media = null) {
    $this->addMediaConversion('image')
        ->width(130)
        ->height(130);
  }

    public function topics(){
        return $this->hasMany(Topic::class);
    }
}
