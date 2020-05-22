<?php

namespace App\Nova;

use BayAreaWebPro\NovaFieldCkEditor\CkEditor;
use Bissolli\NovaPhoneField\PhoneNumber;
use Ebess\AdvancedNovaMediaLibrary\Fields\Media;
use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Inspheric\Fields\Email;
use KABBOUCHI\NovaImpersonate\Impersonate;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\Gravatar;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;


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
        CkEditor::make('Description')
            ->hideFromIndex()
            ->size('w-3/4'),


        Text::make('Name')
            ->sortable()
            ->rules('required', 'max:255')
            ->size('w-1/4'),
        PhoneNumber::make('Phone')->sortable()
            ->withCustomFormats('+994 (##) ###-##-##')
            ->onlyCustomFormats()
            ->size('w-1/4'),
        Email::make('Email')
            ->alwaysClickable()
            ->sortable()
            ->size('w-1/4'),
        BelongsTo::make('Membership')
            ->sortable()
            ->size('w-1/4'),


        Text::make('Job Title', 'job_title')
            ->sortable()
            ->hideFromIndex()
            ->size('w-1/4'),
        Text::make('Degree')
            ->sortable()
            ->hideFromIndex()
            ->sizeOnForms('w-1/6')
            ->sizeOnDetail('w-1/4'),
        Text::make('Company')
            ->sortable()
            ->hideFromIndex()
            ->size('w-1/4'),
        Select::make('Rank in Committee', 'rank')
            ->options(
                [
                    "0" => "Not in committee",
                    "1" => 1,
                    "2" => 2,
                    "3" => 3,
                ]
            )
            ->sizeOnForms('w-1/6')
            ->sizeOnDetail('w-1/4'),
        Boolean::make('Show on site', 'show_on_site')
            ->sortable()
            ->onlyOnForms()
            ->size('w-1/6'),


        BelongsTo::make('Reference')
            ->sortable()
            ->hideFromIndex()
            ->sizeOnForms('w-1/3')
            ->sizeOnDetail('w-1/4'),
        DateTime::make('Updated At')
            ->hideFromIndex()
            ->size('w-1/4'),
        DateTime::make('Created At')
            ->size('w-1/4'),
        Boolean::make('Administrator', 'is_admin')
            ->hideFromIndex()
            ->sizeOnForms('w-1/6')
            ->sizeOnDetail('w-1/4'),


        Password::make('Password')
            ->onlyOnForms()
            ->creationRules('required', 'string', 'min:6')
            ->updateRules('nullable', 'string', 'min:6'),


        HasMany::make('Reports'),
        BelongsToMany::make('Events'),

        Impersonate::make($this)
            ->showOnDetail(),
    ];
  }

}
