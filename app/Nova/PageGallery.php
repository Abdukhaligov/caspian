<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Ebess\AdvancedNovaMediaLibrary\Fields\Media;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Text;
use Media24si\NovaYoutubeField\Youtube;
use Whitecube\NovaFlexibleContent\Flexible;

class PageGallery extends Resource {

  public static $model = 'App\Models\Pages\Gallery';
  public static $group = 'Pages';
  public static $title = 'id';
  public static $search = ['id'];

  public static function label() { return "Gallery"; }

  public static function singleRecord(): bool { return true; }

  public static function singleRecordId(): bool { return 1; }


  public function fields(Request $request) {
    return [
//        Text::make('Title'),
//        Multilingual::make('Language'),
        Media::make('Media'),

        Flexible::make('Videos')
            ->addLayout('Video', 'videos', [
                Youtube::make('Video Url (YouTube)', 'url')
                    ->required(),
                Image::make('Video Thumbnail', 'thumbnail')
                    ->disableDownload(),
            ])
            ->button('New Video'),
    ];
  }

}
