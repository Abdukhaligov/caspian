<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class Category extends Resource {

  public static $model = 'App\Models\Category';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];

  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('title'),
        Text::make('slug'),
        Select::make('Parent Topic','parent_id')
            ->options(Category::pluck('title', 'id'))
            ->nullable(true),
        Boolean::make('is_active'),
        Number::make('order'),

    ];
  }

}
