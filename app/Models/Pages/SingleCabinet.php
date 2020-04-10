<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class SingleCabinet extends Model {

  use HasTranslations;
  public $translatable = ['title'];

}
