<?php

namespace App\Nova;

use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Whitecube\NovaFlexibleContent\Flexible;

class Sponsor extends Resource
{
  public static $model = 'App\Models\Sponsor';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),

        FilemanagerField::make('Photo')
            ->folder('sponsors')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->size('w-1/4'),
        NovaTinyMCE::make('Description')
            ->size('w-3/4'),
        Text::make('Name')
            ->sortable()
            ->size('w-1/2'),
        Text::make('Job Title', 'job_title')
            ->sortable()
            ->size('w-1/2'),



        Flexible::make('Social Networks', 'social_networks')
            ->addLayout('Social Network', 'Data', [
                Select::make('Network', 'network')->options([
                    'fa-facebook-f' => 'Facebook',
                    'fa-twitter' => 'Twitter',
                    'fa-behance' => 'Behance',
                    'fa-linkedin-in' => 'LinkedIn',
                    'fa-youtube' => 'YouTube',])
                    ->required()
                    ->size('w-1/2'),
                Text::make('Link', 'link')
                    ->required()
                    ->size('w-1/2'),
            ])
            ->collapsed(),
    ];
  }
}
