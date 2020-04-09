<?php

namespace App\Nova;

use Digitalcloud\MultilingualNova\Multilingual;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Text;

class SingleTopic extends Resource {

  public static $model = 'App\Models\SingleTopic';
  public static $group = 'Pages';
  public static $title = 'id';
  public static $search = ['id'];

  public static function label() { return "Topics"; }

  public static function singleRecord(): bool { return true; }

  public static function singleRecordId(): bool { return 1; }


  public function fields(Request $request) {
    return [
        Text::make('name'),
        Multilingual::make('Language'),
    ];
  }

}
