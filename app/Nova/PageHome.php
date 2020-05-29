<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
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
//        Text::make('Title'),
        FilemanagerField::make('Description IMG', 'description_img')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->folder('main')
            ->size('w-1/2'),

        NovaTinyMCE::make('Description')
            ->size('w-1/2'),


//        Multilingual::make('Language'),
    ];
  }


}
