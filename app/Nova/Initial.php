<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Josrom\MapAddress\MapAddress;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Whitecube\NovaFlexibleContent\Flexible;

class Initial extends Resource {

  public static $model = 'App\Models\Pages\Initial';
  public static $group = 'Config';
  public static $title = 'id';
  public static $search = ['id'];

  public static function label() { return "Initial"; }

  public static function singleRecord(): bool { return true; }

  public static function singleRecordId(): bool { return 1; }


  public function fields(Request $request) {
    return [
        Text::make('Title'),
//        Multilingual::make('Language'),
        FilemanagerField::make('Favicon')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->folder('main')
            ->size('w-full'),
        Text::make('Phone'),
        Text::make('Email'),
        Number::make('Max Report Count','max_report_count'),
        FilemanagerField::make('Logo')
            ->folder('main')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->size('w-full'),
        Text::make('Copyright'),
        Flexible::make('Social Networks', 'social_networks')
            ->addLayout('Social Network', 'Data', [
                Select::make('Network', 'network')->options([
                    'fa-facebook-f' => 'Facebook',
                    'fa-twitter' => 'Twitter',
                    'fa-behance' => 'Behance',
                    'fa-linkedin-in' => 'LinkedIn',
                    'fa-youtube' => 'YouTube',])
                  ->rules('required'),
                Text::make('Link', 'link')
                    ->rules('required'),
            ]),
    ];
  }

}
