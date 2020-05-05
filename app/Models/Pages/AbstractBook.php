<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class AbstractBook extends Model {
  protected $table = 'page_abstract_book';
  use HasTranslations;
  public $translatable = ['title'];
}
