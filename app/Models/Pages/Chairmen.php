<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Chairmen extends Model {

  protected $table = 'page_chairmen';
  use HasTranslations;
  public $translatable = ['title'];

}
