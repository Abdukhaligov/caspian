<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Program extends Model {

  protected $table = 'page_program';
  use HasTranslations;
  public $translatable = ['title'];

}
