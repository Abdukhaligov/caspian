<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Http\Requests\NovaRequest;

class Region extends Resource {

  public static $model = 'App\Region';
  public static $group = 'Resources';
  public static $title = 'name_en';
  public static $search = ['id'];
  public static $displayInNavigation = false;


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
    ];
  }

}
