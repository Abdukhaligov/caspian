<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Contacts extends Model {

  protected $table = 'page_contacts';
  use HasTranslations;
  public $translatable = ['title'];

}
