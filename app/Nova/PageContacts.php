<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Josrom\MapAddress\MapAddress;
use Laravel\Nova\Fields\Text;
use Media24si\NovaYoutubeField\Youtube;
use Whitecube\NovaFlexibleContent\Flexible;

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
        Text::make('Phone'),
      // You can set the initial map location. By default (Spain)
        MapAddress::make('Location')
            ->setLocation($this->latitude, $this->longitude)
            ->zoom(12),
        Text::make('Email'),
        Text::make('Address'),
        Flexible::make('Social Networks', 'social_networks')
            ->addLayout('Social Networks', 'Data', [
                Text::make('title')
                    ->required(),
                Text::make('link')
                    ->required(),
            ]),
        Youtube::make('Video Youtube', 'video_url')
            ->required(),
        FilemanagerField::make('Video Cover', 'video_cover')
            ->required()
            ->folder('videos')
            ->displayAsImage()
            ->hideCreateFolderButton(),
        Multilingual::make('Language'),
    ];
  }

}
