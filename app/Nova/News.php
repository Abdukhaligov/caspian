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
  public static $search = ['id','created_at'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Title'),
        Images::make('Preview', 'preview'),
        NovaTinyMCE::make('Body')->options([
                'plugins' => [
                    'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                ],
                'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                'use_lfm' => true,
                ]),
        DateTime::make('Created At', 'created_at')->sortable(),
        Multilingual::make('Language'),
    ];
  }

}
