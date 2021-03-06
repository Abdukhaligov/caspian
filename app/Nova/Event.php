<?php

namespace App\Nova;

use Carbon\Carbon;
use Ebess\AdvancedNovaMediaLibrary\Fields\Media;
use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Status;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Whitecube\NovaFlexibleContent\Flexible;
use Laraning\NovaTimeField\TimeField;

class Event extends Resource {

  public static $model = 'App\Models\Event';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function title() {
    $event = \App\Models\Event::find(parent::title());
    $activeEvent = \App\Models\Event::activeEvent();

    if($activeEvent){
      if($activeEvent->id == $event->id){
        return ($event->name." (ACTIVE)");
      }
    }
    return $event->name;
  }


  public function fields(Request $request) {

    $field_action = substr($request->getPathInfo(), strrpos($request->getPathInfo(), '/') + 1);

    return [

        ID::make()->sortable(),

        Text::make('Name')
            ->sortable()
            ->rules('required')
//            ->withMeta(['value' => ])
            ->size('w-1/4'),
        Text::make('Address', 'address')
            ->rules('required')
            ->size('w-1/3'),
        DateTime::make('Date', 'date')
            ->sortable()
            ->rules('required')
            ->size('w-1/4'),
        Boolean::make('Active')
            ->sortable()
            ->size('w-1/6'),

        Media::make('Banners', 'banners')
            ->hideFromIndex()
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


        Flexible::make('Days')
            ->addLayout('Day', 'day', [
                DateTime::make('Event Date', 'event_begin')
                    ->resolveUsing(function ($date) {
                      return Carbon::parse($date);
                    })
                    ->format('DD MMM Y hh:mm:ss')
                    ->rules('required')
                    ->size('w-2/4'),
                Flexible::make('Events')
                    ->addLayout('Speaker', 'speaker', [

                        Text::make('Title', 'title')
                            ->rules('required')
                            ->size('w-1/4'),
                        TimeField::make('Start Time', 'event_start')
                            ->rules('required')
                            ->size('w-1/6'),
                        TimeField::make('End Time', 'event_end')
                            ->rules('required')
                            ->size('w-1/6'),
                        Text::make('Address', 'address')
                            ->size('w-2/5'),


                        Select::make('User')->options(
                            function () use (&$request, &$field_action) {
                              if ($field_action == "update-fields") {
                                if(\App\Models\Event::find($request->resourceId)){
                                  return \App\Models\Event::find($request->resourceId)->usersForSelection();
                                }else{
                                  return [];
                                }
                              } else {
                                return [];
                              }
                            }
                        )
                            ->rules('required')
                            ->size('w-1/4'),

                        NovaTinyMCE::make('Description', 'description')
                            ->options([
                                'plugins' => [
                                    'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                                ],
                                'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                                'use_lfm' => true
                            ])
                            ->rules('required')
                            ->size('w-3/4'),
                    ])
                    ->addLayout('Event', 'event', [
                        Text::make('Title', 'title')
                            ->rules('required')
                            ->size('w-1/4'),
                        TimeField::make('Start Time', 'event_start')
                            ->rules('required')
                            ->size('w-1/6'),
                        TimeField::make('End Time', 'event_end')
                            ->rules('required')
                            ->size('w-1/6'),
                        Text::make('Address', 'address')
                            ->size('w-2/5'),

                        Image::make('Picture', 'pic')
                            ->disableDownload()
                            ->size('w-1/4'),
                        NovaTinyMCE::make('Description', 'description')
                            ->options([
                                'plugins' => [
                                    'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                                ],
                                'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                                'use_lfm' => true
                            ])
                            ->rules('required')
                            ->size('w-3/4')


                    ])
                    ->collapsed()
                    ->button('New Event')
                    ->size('w-full'),
            ])
            ->collapsed()
            ->button('New Day!')
            ->hideFromDetail()
            ->size('w-full'),


        BelongsToMany::make('Users')
            ->fields(function () {
              return [
                  Select::make('Membership', 'membership_id')
                      ->options(function () {
                        $memberships = array();
                        foreach (\App\Models\Membership::all() as $membership) {
                          $memberships [$membership->id] = $membership->name;
                        }
                        return $memberships;
                      })
                      ->displayUsing(function ($q) {
                        return \App\Models\Membership::find($q)->name;
                      })
                      ->sortable(),
                  Select::make('Status')
                      ->options([
                          '1' => 'Pending',
                          '2' => 'Deny',
                          '3' => 'Approve',
                      ])
                      ->displayUsing(function ($q) {
                        switch ($q) {
                          case 3:
                            return "Approved";
                            break;
                          case 2:
                            return "Denied";
                            break;
                          default :
                            return "Pending";
                            break;
                        }
                      })
                      ->sortable(),
              ];
            }),


        HasMany::make('Reports'),


    ];


  }

}
