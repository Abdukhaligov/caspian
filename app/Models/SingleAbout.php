<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class SingleAbout extends Model {
  use HasTranslations;

  public $translatable = ['name'];
}
