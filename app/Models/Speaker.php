<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Speaker extends Model {

  public function events() {
    return $this->belongsToMany(Event::class);
  }

  public function user() {
    return $this->belongsTo(User::class);
  }


  public static function forSelection() {
    $array = array();

//    App\Models\Event::where('active', true)->first()->speakers)
//    foreach (Speaker::all('id', 'user_id') as $speaker) {

    foreach (Event::where('active', true)->first()->speakers as $speaker) {

      $name = User::find($speaker->user_id)->name;
      $array[$speaker->id] = $name;
    }

    return $array;
  }

}
