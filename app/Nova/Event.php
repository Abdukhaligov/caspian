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
    return [
        ID::make()->sortable(),

        Media::make('Banners', 'banners'),

        Text::make('Name')
            ->sortable(),
        Textarea::make('Description'),
        Text::make('Address', 'address'),

        Boolean::make('Active')
            ->sortable(),

        Flexible::make('Program')
            ->addLayout('Day', 'day', [
                DateTime::make('Event Date', 'event_begin')
                    ->resolveUsing(function ($date){
                      return Carbon::parse($date);
                    })
                    ->format('DD MMM Y hh:mm:ss')
                    ->required(),
                Flexible::make('User', 'user')
                    ->addLayout('User', 'user', [
                        Select::make('User', 'user')->options(
                            \App\User::forSelection()
                        )
                            ->required(),
                        Text::make('Title', 'title')
                            ->required(),
                        NovaTinyMCE::make('Description', 'description')
                            ->required(),
                        Text::make('Address', 'address'),
                        TimeField::make('Start Time', 'event_start'),
                        TimeField::make('End Time', 'event_end'),

                    ]),
            ]),

        DateTime::make('Date', 'date')
            ->sortable(),

        BelongsToMany::make('Users'),

        DateTime::make('Created At')
            ->hideFromIndex(),
        DateTime::make('Updated At')
            ->hideFromIndex(),
    ];
  }

}
