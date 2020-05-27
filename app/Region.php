<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Region extends Model {

  public static function scopeOrdered() {
    $data = self::orderBy('name_en', 'asc')->get();
    return $data->unique('name_en');
  }

}
