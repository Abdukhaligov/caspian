<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use GeneaLabs\NovaMapMarkerField\MapMarker;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use Media24si\NovaYoutubeField\Youtube;
use Whitecube\NovaFlexibleContent\Flexible;
use Josrom\MapAddress\MapAddress;

class SingleContact extends Resource {
  public static $group = 'Pages';

  public static function singleRecord(): bool {
    return true;
  }

  public static function singleRecordId(): bool {
    return 1;
  }

  public static function label() {
    return "Contacts";
  }

  public static $model = 'App\Models\SingleContact';

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
        Text::make('Name'),
        Text::make('Phone'),

      // You can set the initial map location. By default (Spain)
        MapAddress::make('Location')
            ->setLocation($this->latitude, $this->longitude)
            ->zoom(12),


        Text::make('Email'),
        Text::make('Address'),

        Flexible::make('Social Networks', 'social_networks')
            ->addLayout('Social Networks', 'Data', [
                Text::make('title')
                    ->required(),
                Text::make('link')
                    ->required(),
            ]),

        Youtube::make('Video Youtube', 'video_url')
            ->required(),
        FilemanagerField::make( 'Video Cover', 'video_cover')
            ->required()
            ->folder('videos')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->hideDeleteFileButton(),

        Multilingual::make('Language'),
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
