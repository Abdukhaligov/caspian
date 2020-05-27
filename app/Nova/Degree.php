<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class Degree extends Resource {

  public static $model = 'App\Models\Degree';
  public static $group = 'Resources';
  public static $title = 'name';
  public static $search = ['id'];

  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Name')->sortable(),
    ];
  }

}
