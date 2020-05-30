<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Voucher extends Model {

  public function event(){
    return $this->belongsTo(Event::class);
  }

  public function membership(){
    return $this->belongsTo(Membership::class);
  }
}
