<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Josrom\MapAddress\MapAddress;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Whitecube\NovaFlexibleContent\Flexible;

class Initial extends Resource {

  public static $model = 'App\Models\Pages\Initial';
  public static $group = 'Pages';
  public static $title = 'id';
  public static $search = ['id'];

  public static function label() { return "Initial"; }

  public static function singleRecord(): bool { return true; }

  public static function singleRecordId(): bool { return 1; }


  public function fields(Request $request) {
    return [
        Text::make('Title'),
        Multilingual::make('Language'),
        Text::make('Phone'),
        Text::make('Email'),
        FilemanagerField::make('Logo')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->hideDeleteFileButton(),
        Text::make('Copyright'),
        Flexible::make('Social Networks', 'social_networks')
            ->addLayout('Social Network', 'Data', [
                Select::make('Network', 'network')->options([
                    'fa-facebook-f' => 'Facebook',
                    'fa-twitter' => 'Twitter',
                    'fa-behance' => 'Behance',
                    'fa-linkedin-in' => 'LinkedIn',
                    'fa-youtube' => 'YouTube',])
                  ->required(),
                Text::make('Link', 'link')
                    ->required(),
            ]),
    ];
  }

}
