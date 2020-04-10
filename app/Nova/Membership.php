<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class Membership extends Resource {

  public static $model = 'App\Models\Membership';
  public static $title = 'name';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Name')
            ->sortable(),
        BelongsTo::make('Membership', 'parent')
            ->sortable()
            ->nullable(true),
        Multilingual::make('Language'),
    ];
  }

}
