<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;

class Home extends Model implements HasMedia {

  use HasMediaTrait;

  protected $table = 'page_home';

  public function registerMediaCollections() {
    $this
        ->addMediaCollection('description_img')
        ->useDisk('mediaFiles')
        ->singleFile();
  }
}
