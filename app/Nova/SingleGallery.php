<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Ebess\AdvancedNovaMediaLibrary\Fields\Files;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use Spatie\Image\Image;
use Media24si\NovaYoutubeField\Youtube;
use Whitecube\NovaFlexibleContent\Flexible;


class SingleGallery extends Resource
{
    public static $group = 'Pages';

    public static function singleRecord(): bool{
        return true;
    }

    public static function singleRecordId(): bool{
        return 1;
    }

    public static function label(){
        return "Gallery";
    }

    public static $model = 'App\Models\SingleGallery';

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
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            Text::make('name'),
            Multilingual::make('Language'),
            Images::make('Photos', 'photos'),

            Flexible::make('Videos')
                ->addLayout('Adding video', 'Videos', [
                    Youtube::make('Url', 'url')
                        ->required(),
                    FilemanagerField::make('Cover', 'cover')
                        ->required()
                        ->folder('videos')
                        ->displayAsImage()
                        ->hideCreateFolderButton()
                        ->hideDeleteFileButton(),
                ])



        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.-
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
