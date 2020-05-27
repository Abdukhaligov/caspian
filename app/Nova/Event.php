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
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Whitecube\NovaFlexibleContent\Flexible;
use Laraning\NovaTimeField\TimeField;

class Event extends Resource {

  public static $model = 'App\Models\Event';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    $fields = array(
        ID::make()->sortable(),

        Media::make('Banners', 'banners')
            ->size('w-1/2'),

        NovaTinyMCE::make('Description')
            ->options([
                'plugins' => [
                    'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                ],
                'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                'use_lfm' => true
            ])
            ->size('w-1/2'),


        Text::make('Name')
            ->sortable()
            ->required()
            ->size('w-1/3'),
        DateTime::make('Date', 'date')
            ->sortable()
            ->required()
            ->size('w-1/3'),
        Boolean::make('Active')
            ->sortable()
            ->size('w-1/3'),

//            ->withMeta(['value' => $request->resourceId]),


        Text::make('Address', 'address')
            ->required()
            ->size('w-1/3'),
        DateTime::make('Created At')
            ->hideFromIndex()
            ->size('w-1/3'),




        DateTime::make('Updated At')
            ->hideFromIndex()
            ->size('w-1/3'),


        BelongsToMany::make('Users'),


    );

    if ($request->resourceId) {
      return $fields = array_merge($fields, array(
          Flexible::make('Program')
              ->addLayout('Day', 'day', [
                  DateTime::make('Event Date', 'event_begin')
                      ->resolveUsing(function ($date) {
                        return Carbon::parse($date);
                      })
                      ->format('DD MMM Y hh:mm:ss')
                      ->required(),
                  Flexible::make('Event', 'event')
                      ->addLayout('User', 'user', [
                          Select::make('User', 'user')->options(
                              \App\Models\Event::findOrFail($request->resourceId)->usersForSelection()
                          )
                              ->required(),
                          TimeField::make('Start Time', 'event_start'),
                          TimeField::make('End Time', 'event_end'),

                          Text::make('Title', 'title')
                              ->required(),
                          NovaTinyMCE::make('Description', 'description')
                              ->options([
                                  'plugins' => [
                                      'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                                  ],
                                  'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                                  'use_lfm' => true
                              ])
                              ->required(),
                          Text::make('Address', 'address'),
                      ])
                      ->addLayout('Event', 'event', [
                          Text::make('Title', 'title')
                              ->required(),
                          NovaTinyMCE::make('Description', 'description')
                              ->options([
                                  'plugins' => [
                                      'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                                  ],
                                  'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                                  'use_lfm' => true
                              ])
                              ->required(),
                          Text::make('Address', 'address'),
                          TimeField::make('Start Time', 'event_start'),
                          TimeField::make('End Time', 'event_end'),

                      ])
                      ->button('New Event'),
              ])
              ->button('New Day!')
      ));
    } else {
      return $fields;
    }
  }

}
