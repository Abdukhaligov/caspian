<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\Text;
use Media24si\NovaYoutubeField\Youtube;
use Naif\MapAddress\MapAddress;
use Whitecube\NovaFlexibleContent\Flexible;
use Whitecube\NovaGoogleMaps\GoogleMaps;

class PageContacts extends Resource {

  public static $model = 'App\Models\Pages\Contacts';
  public static $group = 'Pages';
  public static $title = 'id';
  public static $search = ['id'];

  public static function label() { return "Contacts"; }

  public static function singleRecord(): bool { return true; }

  public static function singleRecordId(): bool { return 1; }


  public function fields(Request $request) {
    return [
        Text::make('Title'),
        Text::make('Phone')
            ->size('w-1/3'),
      // You can set the initial map location. By default (Spain)
        Text::make('Email')
            ->size('w-1/3'),
        Text::make('Address')
            ->size('w-1/3'),
//        GoogleMaps::make('Map')
//            ->zoom(15), // Optionally set the zoom level
        MapAddress::make('Map')
            ->initLocation(40.730610,-98.935242)
            ->zoom(15),
        Flexible::make('Social Networks', 'social_networks')
            ->addLayout('Social Networks', 'Data', [
                Text::make('title')
                    ->required(),
                Text::make('link')
                    ->required(),
            ]),
        Youtube::make('Video Youtube', 'video_url')
            ->required()
            ->size('w-1/2'),
        FilemanagerField::make('Video Cover', 'video_cover')
            ->required()
            ->folder('video_covers')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->size('w-1/2'),
//        Multilingual::make('Language'),
    ];
  }

}
