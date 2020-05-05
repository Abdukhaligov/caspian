<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Josrom\MapAddress\MapAddress;
use Laravel\Nova\Fields\Text;
use Media24si\NovaYoutubeField\Youtube;
use Whitecube\NovaFlexibleContent\Flexible;

class PageAbstractBook extends Resource {

  public static $model = 'App\Models\Pages\AbstractBook';
  public static $group = 'Pages';
  public static $title = 'id';
  public static $search = ['id'];

  public static function label() { return "Abstract Book"; }

  public static function singleRecord(): bool { return true; }

  public static function singleRecordId(): bool { return 1; }


  public function fields(Request $request) {
    return [
        Text::make('Title'),
        Flexible::make('Books')
            ->addLayout('Abstract book', 'Data', [
                Text::make('Name', 'name')
                    ->required(),
                FilemanagerField::make('File','file',)
                    ->required()
                    ->folder('books')
                    ->displayAsImage()
                    ->hideCreateFolderButton()
                    ->hideDeleteFileButton(),
            ]),
        Multilingual::make('Language'),
    ];
  }

}
