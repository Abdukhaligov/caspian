<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;

class Topic extends Resource {

  public static $model = 'App\Models\Topic';
  public static $title = 'name';
  public static $search = ['id'];

  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('name')
            ->sortable(),
        Select::make('parent_id')
            ->options(Topic::pluck('name', 'id'))
            ->nullable(true),
        HasMany::make('Topics', 'children'),
        HasMany::make('Reports'),
    ];
  }

}
