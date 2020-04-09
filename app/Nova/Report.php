<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Status;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;

class Report extends Resource {

  public static $model = 'App\Models\Report';
  public static $title = 'id';
  public static $search = ['id'];


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

}
