<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class News extends Resource {

  public static $model = 'App\Models\News';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Title'),
        Images::make('Preview', 'preview'),
        NovaTinyMCE::make('Body'),
        DateTime::make('Created At')
            ->hideFromIndex(),
        Multilingual::make('Language'),
    ];
  }

}