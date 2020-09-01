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
        ID::make()
            ->sortable(),

        Media::make('Img', 'partners')
            ->rules('required')
            ->sortable()
            ->size('w-1/4'),
        Text::make('Name')
            ->rules('required')
            ->sortable()
            ->size('w-1/4'),

        Text::make('Url')
            ->size('w-1/4'),

        Boolean::make('Gold')
            ->sortable()
            ->size('w-1/4'),

    ];
  }

}
