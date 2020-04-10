<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use Whitecube\NovaFlexibleContent\Flexible;

class Presenter extends Resource {

  public static $model = 'App\Models\Presenter';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Name')
            ->sortable(),
        FilemanagerField::make('Photo')
            ->folder('presenters')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->hideDeleteFileButton(),
        Text::make('Job Title', 'job_title')
            ->sortable(),
        Flexible::make('Social Networks', 'social_networks')
            ->addLayout('Social Network', 'Data', [
                Select::make('Network', 'network')->options([
                    'fa-facebook      ' => 'Facebook',
                    'fa-twitter' => 'Twitter',
                    'fa-instagram' => 'Instagram',
                    'fa-linkedin' => 'LinkedIn'])
                    ->required(),
                Text::make('Link', 'link')
                    ->required(),
            ]),
    ];
  }

}
