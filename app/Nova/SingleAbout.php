<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use MrMonat\Translatable\Translatable;


class SingleAbout extends Resource
{

    public static $group = 'Pages';

    public static function singleRecord(): bool{
        return true;
    }

    public static function singleRecordId(): bool{
        return 1;
    }

    public static function label(){
        return "About";
    }

    public static $model = 'App\Models\SingleAbout';

    public static $title = 'id';

    public static $search = [
        'id',
    ];

    public function fields(Request $request){
        return [
            //Text::make('Name'),
            //NovaTinyMCE::make('name'),
            Text::make('name'),
            Multilingual::make('Language'),

        ];
    }

    public function cards(Request $request){
        return [];
    }

    public function filters(Request $request){
        return [];
    }

    public function lenses(Request $request){
        return [];
    }

    public function actions(Request $request){
        return [];
    }
}
