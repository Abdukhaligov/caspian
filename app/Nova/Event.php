<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;

class Event extends Resource {

  public static $model = 'App\Models\Event';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        FilemanagerField::make('Logo', 'logo')
            ->folder('events')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->hideDeleteFileButton(),
        Text::make('Name')
            ->sortable(),
        Textarea::make('Description'),
        Boolean::make('Active')
            ->sortable(),
        DateTime::make('Date')
            ->sortable(),
        DateTime::make('Created At')
            ->hideFromIndex(),
        DateTime::make('Updated At')
            ->hideFromIndex(),
    ];
  }

}
