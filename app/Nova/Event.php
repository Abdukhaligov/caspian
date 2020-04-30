<?php

namespace App\Nova;

use Ebess\AdvancedNovaMediaLibrary\Fields\Media;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;

class Event extends Resource {

  public static $model = 'App\Models\Event';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
//        FilemanagerField::make('Banner')
//            ->folder('events')
//            ->displayAsImage()
//            ->hideCreateFolderButton()
//            ->hideDeleteFileButton(),
        Media::make('Banners', 'banners'),

        Text::make('Name')
            ->sortable(),
        Textarea::make('Description'),
        Boolean::make('Active')
            ->sortable(),
        DateTime::make('Date')
            ->sortable(),
        BelongsToMany::make('Speakers'),
        DateTime::make('Created At')
            ->hideFromIndex(),
        DateTime::make('Updated At')
            ->hideFromIndex(),
    ];
  }

}
