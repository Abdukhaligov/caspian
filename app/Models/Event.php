<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use Spatie\Translatable\HasTranslations;
use Whitecube\NovaFlexibleContent\Concerns\HasFlexible;

class Event extends Model implements HasMedia {

  protected $casts = ['date' => 'datetime','program' => "array"];

  use HasMediaTrait;

  public function speakers() {
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


//  public function getProgramAttribute($value) {
//
//    return "[
//    {
//        \"key\": \"6149fce4a0ddd3d0\",
//        \"layout\": \"Data\",
//        \"attributes\": {
//            \"speaker\": [
//                {
//                    \"key\": \"ecbd4dd26f579cfd\",
//                    \"layout\": \"Data\",
//                    \"attributes\": {
//                        \"title\": \"hg\",
//                        \"address\": \"fgjh\",
//                        \"speaker\": \"5\",
//                        \"eve\": \"abcdgh\",
//                        \"description\": \"<p>fjhgfj</p>\",
//                        \"eve\": \"kjkj\"
//                    }
//                }
//            ],
//            \"event_begin\": \"abcd\"
//        }
//    }
//]";
////    return ucfirst($value);
//  }

}
