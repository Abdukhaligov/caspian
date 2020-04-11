<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class News extends Model {

  protected $table = 'page_news';
  use HasTranslations;
  public $translatable = ['title'];

}
