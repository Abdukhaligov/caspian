<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\Gravatar;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Text;

class User extends Resource
{

    public static $model = 'App\User';

    public static $title = 'name';

    public static $search = [
        'id', 'name', 'email',
    ];

    public function fields(Request $request)
    {
        //if(!\Auth::user()->isAdmin())

        return [
            ID::make()->sortable(),

            Text::make('Name')
                ->sortable()
                ->rules('required', 'max:255'),

            Text::make('Phone', 'phone_number')
                ->sortable(),

            Text::make('Email')
                ->sortable()
                ->rules('required', 'email', 'max:254')
                ->creationRules('unique:users,email')
                ->updateRules('unique:users,email,{{resourceId}}'),

            Text::make('Company')
                ->sortable()
                ->hideFromIndex(),


            Text::make('Job Title','job_title')
                ->sortable()
                ->hideFromIndex(),


            BelongsTo::make('Reference', 'referredBy')
                ->sortable()
                ->hideFromIndex(),

            BelongsTo::make('Membership', 'memberAs')
                ->sortable(),

            BelongsTo::make('Topic')
                ->hideFromIndex()
                ->nullable(),


            Boolean::make('Administrator permission ', 'is_admin')
                ->hideFromIndex(),

            Password::make('Password')
                ->onlyOnForms()
                ->creationRules('required', 'string', 'min:8')
                ->updateRules('nullable', 'string', 'min:8'),

            DateTime::make('Created At'),
            DateTime::make('Updated At')
                ->hideFromIndex(),
        ];
    }

    public function cards(Request $request)
    {
        return [];
    }

    public function filters(Request $request)
    {
        return [];
    }

    public function lenses(Request $request)
    {
        return [];
    }

    public function actions(Request $request)
    {
        return [];
    }
}
