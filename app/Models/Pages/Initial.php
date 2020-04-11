<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Initial extends Model {

  protected $table = 'page_initial';
  use HasTranslations;
  public $translatable = ['title'];

  public static function getData() { return self::first(); }

}
