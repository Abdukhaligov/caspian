<?php

namespace App\Nova;

use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Whitecube\NovaFlexibleContent\Flexible;

class Chairman extends Resource {

  public static $model = 'App\Models\Chairman';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Name')
            ->sortable(),
        FilemanagerField::make('Photo')
            ->folder('chairmen')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->hideDeleteFileButton(),
        Text::make('Job Title', 'job_title')
            ->sortable(),
        NovaTinyMCE::make('Description'),
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
        BelongsToMany::make('Events'),
    ];
  }

}
