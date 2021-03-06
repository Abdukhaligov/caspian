<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class Membership extends Resource {

  public static $model = 'App\Models\Membership';
  public static $group = 'Resources';
  public static $title = 'name';
  public static $search = ['id'];
  public static $displayInNavigation = false;


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Name')
            ->sortable(),
        Boolean::make('Reporter'),
//        BelongsTo::make('Membership', 'parent')
//            ->sortable()
//            ->nullable(true),
        Multilingual::make('Language'),
    ];
  }

}
