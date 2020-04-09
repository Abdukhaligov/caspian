<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class SingleCommittee extends Model {

  use HasTranslations;
  public $translatable = ['title'];

}
