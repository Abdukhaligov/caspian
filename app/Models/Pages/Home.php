<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Home extends Model {

  protected $table = 'page_home';
  use HasTranslations;
  public $translatable = ['title'];

}
