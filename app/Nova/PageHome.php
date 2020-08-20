<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Ebess\AdvancedNovaMediaLibrary\Fields\Media;
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
        Images::make('Description IMG', 'description_img')
            ->size('w-1/4')
            ->rules('required')
            ->singleImageRules('dimensions:min_width=600,min_height=400'),

        NovaTinyMCE::make('Description')
            ->size('w-3/4'),


//        Multilingual::make('Language'),
    ];
  }


}
