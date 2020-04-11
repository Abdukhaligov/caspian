<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\Text;
use Whitecube\NovaFlexibleContent\Flexible;

class PageHome extends Resource {

  public static $model = 'App\Models\Pages\Home';
  public static $group = 'Pages';
  public static $title = 'id';
  public static $search = ['id'];

  public static function label() { return "Home"; }

  public static function singleRecord(): bool { return true; }

  public static function singleRecordId(): bool { return 1; }


  public function fields(Request $request) {
    return [
        Text::make('Title'),
        Multilingual::make('Language'),
        Flexible::make('Banners', 'banners')
          ->addLayout('Banner','banners', [
              Text::make('Category', 'category'),
              Text::make('Title', 'title'),
              Text::make('Subtitle', 'subtitle'),
              Text::make('Button title', 'btn_title'),
              Text::make('Button Link', 'btn_link'),
              FilemanagerField::make('Img', 'img')
                  ->required()
                  ->folder('banners')
                  ->displayAsImage()
                  ->hideCreateFolderButton()
                  ->hideDeleteFileButton(),
          ])
    ];
  }


}
