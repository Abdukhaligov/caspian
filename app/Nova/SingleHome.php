<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Text;

class SingleHome extends Resource {

  public static $model = 'App\Models\SingleHome';
  public static $group = 'Pages';
  public static $title = 'id';
  public static $search = ['id'];

  public static function label() { return "Home"; }

  public static function singleRecord(): bool { return true; }

  public static function singleRecordId(): bool { return 1; }


  public function fields(Request $request) {
    return [
        Text::make('name'),
        Multilingual::make('Language'),
    ];
  }


}
