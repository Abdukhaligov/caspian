<?php


namespace App;


use Illuminate\Database\Eloquent\Relations\Pivot;

class MyPivot extends Pivot {

  public static function boot() {
    parent::boot();

    //TODO::sending message to User about changing Membership status
    static::updating(function ($pivot) {

    });
  }

}