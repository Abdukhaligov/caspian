<?php

namespace App\Nova;


use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class Category extends Resource
{
    public static $model = \App\Models\Category::class;
    public static $group = 'Resources';
    public static $title = 'name';
    public static $search = [
        'id',
    ];

    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Text::make("Name"),
            HasMany::make("Topics")
        ];
    }
}
