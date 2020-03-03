<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Http\Requests\NovaRequest;

class Topic extends Resource
{
    public static $model = 'App\Models\Topic';

    public static $title = 'id';

    public static $search = [
        'id',
    ];

    public function fields(Request $request)
    {


        return [
            ID::make()->sortable(),

            Text::make('name')
                ->sortable(),

            Select::make('parent_id')->options(Topic::pluck('name', 'id'))
                ->nullable(true)
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
