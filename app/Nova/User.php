<?php

namespace App\Nova;

use Bissolli\NovaPhoneField\PhoneNumber;
use Illuminate\Http\Request;
use Inspheric\Fields\Email;
use KABBOUCHI\NovaImpersonate\Impersonate;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Text;

class User extends Resource {

  public static $model = 'App\User';
  public static $group = 'Resources';
  public static $title = 'name';
  public static $search = ['id', 'name', 'email',];

  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Name')
            ->sortable()
            ->rules('required', 'max:255'),
        PhoneNumber::make('Phone')
            ->sortable()
            ->withCustomFormats('+994 (##) ###-##-##')
            ->onlyCustomFormats(),
        Email::make('Email')
            ->alwaysClickable()
            ->sortable(),
        Text::make('Company')
            ->sortable()
            ->hideFromIndex(),
        Text::make('Job Title', 'job_title')
            ->sortable()
            ->hideFromIndex(),
        HasMany::make('Reports'),
        BelongsTo::make('Reference')
            ->sortable()
            ->hideFromIndex(),
        BelongsTo::make('Membership')
            ->sortable(),
        Boolean::make('Administrator permission ', 'is_admin')
            ->hideFromIndex(),
        Password::make('Password')
            ->onlyOnForms()
            ->creationRules('required', 'string', 'min:8')
            ->updateRules('nullable', 'string', 'min:8'),
        DateTime::make('Created At'),
        DateTime::make('Updated At')
            ->hideFromIndex(),
        Impersonate::make($this)
            ->showOnDetail(),
    ];
  }

}
