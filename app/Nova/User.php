<?php

namespace App\Nova;

use Bissolli\NovaPhoneField\PhoneNumber;
use Ebess\AdvancedNovaMediaLibrary\Fields\Media;
use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Inspheric\Fields\Email;
use KABBOUCHI\NovaImpersonate\Impersonate;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Whitecube\NovaFlexibleContent\Flexible;


class User extends Resource {

  public static $model = 'App\User';
  public static $group = 'Resources';
  public static $title = 'name';
  public static $search = ['id', 'name', 'email',];


  public function fields(Request $request) {
    return [


        ID::make()->sortable(),

        Media::make('Avatar')
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


//        BelongsTo::make('Membership')
//            ->sortable()
//            ->nullable()
//            ->sizeOnForms('w-1/3')
//            ->sizeOnDetail('w-1/4'),
        Text::make('Name')
            ->sortable()
            ->rules('required', 'max:255')
            ->sizeOnForms('w-1/6')
            ->sizeOnDetail('w-1/4'),
        PhoneNumber::make('Phone')->sortable()
            ->sizeOnForms('w-1/6')
            ->sizeOnDetail('w-1/4'),
        Email::make('Email')
            ->alwaysClickable()
            ->sortable()
            ->sizeOnForms('w-1/4')
            ->sizeOnDetail('w-1/4'),


        BelongsTo::make('Degree')
            ->hideFromIndex()
            ->sortable()
            ->nullable()
            ->sizeOnForms('w-1/3')
            ->sizeOnDetail('w-1/4'),
        Text::make('Job Title', 'job_title')
            ->sortable()
            ->hideFromIndex()
            ->sizeOnForms('w-1/6')
            ->sizeOnDetail('w-1/4'),
        Text::make('Company')
            ->sortable()
            ->hideFromIndex()
            ->sizeOnForms('w-1/6')
            ->sizeOnDetail('w-1/4'),
        Select::make('Rank in Committee', 'rank')
            ->options(
                [
                    "1" => 1,
                    "2" => 2,
                    "3" => 3,
                ]
            )
            ->nullable()
            ->sortable()
            ->hideFromIndex()
            ->sizeOnForms('w-1/6')
            ->sizeOnDetail('w-1/4'),


        Boolean::make('Administrator', 'is_admin')
            ->hideFromIndex()
            ->hideFromDetail()
            ->sizeOnForms('w-1/6'),


        BelongsTo::make('Reference')
            ->sortable()
            ->nullable()
            ->hideFromIndex()
            ->sizeOnForms('w-1/3')
            ->sizeOnDetail('w-1/4'),
        DateTime::make('Updated At')
            ->hideFromIndex()
            ->size('w-1/4'),
        DateTime::make('Created At')
            ->sortable()
            ->size('w-1/4'),

        Boolean::make('Show on site', 'show_on_site')
            ->sortable()
            ->size('w-1/6'),

        Flexible::make('Social Networks', 'social_networks')
            ->addLayout('Social Network', 'data', [
                Select::make('Network', 'network')->options([
                    'fa-facebook-f' => 'Facebook',
                    'fa-twitter' => 'Twitter',
                    'fa-behance' => 'Behance',
                    'fa-linkedin-in' => 'LinkedIn',
                    'fa-youtube' => 'YouTube',])
                    ->required()
                    ->size('w-1/2'),
                Text::make('Link', 'link')
                    ->required()
                    ->size('w-1/2'),
            ])
            ->button('Add social network')
            ->hideFromDetail()
            ->collapsed(),

        Password::make('Password')
            ->onlyOnForms()
            ->creationRules('required', 'string', 'min:6')
            ->updateRules('nullable', 'string', 'min:6'),


        BelongsToMany::make('Events')
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
                        switch ($q){
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


        Impersonate::make($this)
            ->hideFromIndex()
            ->showOnDetail(),
    ];
  }

}
