<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Speaker extends Model {

  public function events() {
    return $this->belongsToMany(Event::class);
  }

}
