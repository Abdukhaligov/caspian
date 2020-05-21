<?php

namespace App\Nova;

use Ebess\AdvancedNovaMediaLibrary\Fields\Media;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class Partner extends Resource {

  public static $model = 'App\Models\Partner';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),

        Text::make('Name')
            ->sortable(),
        Media::make('Img', 'partners')
            ->sortable(),

        Boolean::make('Gold'),
        Text::make('Url'),
    ];
  }

}
