<?php

namespace App\Http\Controllers;

use App\User;
use Redirect;

class UserController extends Controller {

  public function index($id) {
    $user = User::find($id);

    if ($user->show_on_site) {
      $data = $user;
      return view('speaker_details', compact('data'));
    } else {
      return Redirect::back();
    }


  }


}
