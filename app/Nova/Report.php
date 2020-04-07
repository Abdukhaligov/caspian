<?php

namespace App\Nova;

use Illuminate\Http\Request;

use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\HasOne;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Status;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;
use Illuminate\Support\Facades\Storage;

class Report extends Resource {
  /**
   * The model the resource corresponds to.
   *
   * @var string
   */
  public static $model = 'App\Models\Report';

  /**
   * The single value that should be used to represent the resource when being displayed.
   *
   * @var string
   */
  public static $title = 'id';

  /**
   * The columns that should be searched.
   *
   * @var array
   */
  public static $search = [
      'id',
  ];

  /**
   * Get the fields displayed by the resource.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Name')
            ->sortable(),

        BelongsTo::make('User')
            ->sortable(),

        BelongsTo::make('Topic')
            ->sortable(),

        Textarea::make('Description')
            ->hideFromIndex(),

        Status::make('Status')
            ->loadingWhen(['pending'])
            ->failedWhen(['canceled'])
            ->hideFromDetail()
            ->sortable(),

        File::make('File')
            ->hideFromIndex()
            ->disk('reports'),


        Select::make('Status')->options([
            'pending' => 'pending',
            'canceled' => 'canceled',
            'accepted' => 'accepted',
        ])
            ->hideFromIndex(),

        DateTime::make('Created At')
            ->sortable(),

        DateTime::make('Updated At')
            ->sortable()
            ->hideFromIndex(),
    ];
  }

  /**
   * Get the cards available for the request.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function cards(Request $request) {
    return [];
  }

  /**
   * Get the filters available for the resource.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function filters(Request $request) {
    return [];
  }

  /**
   * Get the lenses available for the resource.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function lenses(Request $request) {
    return [];
  }

  /**
   * Get the actions available for the resource.
   *
   * @param \Illuminate\Http\Request $request
   * @return array
   */
  public function actions(Request $request) {
    return [];
  }
}
