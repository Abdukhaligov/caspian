<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
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
        Text::make('Title'),
        Multilingual::make('Language'),
        Images::make('Photos', 'photos'),

        Flexible::make('Videos')
            ->addLayout('Adding video', 'Videos', [
                Youtube::make('Url', 'url')
                    ->required(),
                FilemanagerField::make('Cover', 'cover')
                    ->required()
                    ->folder('videos')
                    ->displayAsImage()
                    ->hideCreateFolderButton()
                    ->hideDeleteFileButton(),
            ])
    ];
  }

}
