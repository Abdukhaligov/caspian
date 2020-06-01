<?php

namespace App\Nova;

use Carbon\Carbon;
use Ebess\AdvancedNovaMediaLibrary\Fields\Media;
use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Whitecube\NovaFlexibleContent\Flexible;
use Laraning\NovaTimeField\TimeField;

class Event extends Resource {

  public static $model = 'App\Models\Event';
  public static $group = 'Resources';
  public static $title = 'name';
  public static $search = ['id'];


  public function fields(Request $request) {

    $field_action = substr($request->getPathInfo(), strrpos($request->getPathInfo(), '/')+1);

    return [

        ID::make()->sortable(),

        Text::make('Name')
            ->sortable()
            ->required()
//            ->withMeta(['value' => ])
            ->size('w-1/4'),
        Text::make('Address', 'address')
            ->required()
            ->size('w-1/3'),
        DateTime::make('Date', 'date')
            ->sortable()
            ->required()
            ->size('w-1/4'),
        Boolean::make('Status')
            ->sortable()
            ->size('w-1/6'),

        Media::make('Banners', 'banners')
            ->size('w-1/4'),

        NovaTinyMCE::make('Description')
            ->options([
                'plugins' => [
                    'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                ],
                'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                'use_lfm' => true
            ])
            ->size('w-3/4'),




        DateTime::make('Created At')
            ->hideFromIndex()
            ->size('w-1/2'),
        DateTime::make('Updated At')
            ->hideFromIndex()
            ->size('w-1/2'),


        BelongsToMany::make('Users'),

        Flexible::make('Days')
            ->addLayout('Day', 'day', [
                DateTime::make('Event Date', 'event_begin')
                    ->resolveUsing(function ($date) {
                      return Carbon::parse($date);
                    })
                    ->format('DD MMM Y hh:mm:ss')
                    ->required()
                    ->size('w-2/4'),
                Flexible::make('Events')
                    ->addLayout('Speaker', 'speaker', [

                        Text::make('Title', 'title')
                            ->required()
                            ->size('w-1/4'),
                        TimeField::make('Start Time', 'event_start')
                            ->size('w-1/6'),
                        TimeField::make('End Time', 'event_end')
                            ->size('w-1/6'),
                        Text::make('Address', 'address')
                            ->size('w-2/5'),


                        Select::make('User')->options(
                            function () use (&$request,&$field_action){
                              if ($field_action == "update-fields"){
                                return \App\Models\Event::findOrFail($request->resourceId)->usersForSelection();
                              }else{
                                return [];
                              }
                            }
                        )
                            ->required()
                            ->size('w-1/4'),

                        NovaTinyMCE::make('Description', 'description')
                            ->options([
                                'plugins' => [
                                    'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                                ],
                                'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                                'use_lfm' => true
                            ])
                            ->required()
                            ->size('w-3/4'),
                    ])
                    ->addLayout('Event', 'event', [
                        Text::make('Title', 'title')
                            ->required()
                            ->size('w-1/4'),
                        TimeField::make('Start Time', 'event_start')
                            ->size('w-1/6'),
                        TimeField::make('End Time', 'event_end')
                            ->size('w-1/6'),
                        Text::make('Address', 'address')
                            ->size('w-2/5'),

                        Image::make('Picture', 'pic')
                            ->disableDownload()
                            ->required()
                            ->size('w-1/4'),
                        NovaTinyMCE::make('Description', 'description')
                            ->options([
                                'plugins' => [
                                    'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                                ],
                                'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                                'use_lfm' => true
                            ])
                            ->required()
                            ->size('w-3/4')


                    ])
                    ->collapsed()
                    ->button('New Event')
                    ->size('w-full'),
            ])
            ->collapsed()
            ->button('New Day!')
            ->hideFromDetail()
            ->size('w-full')
  ];


  }

}
