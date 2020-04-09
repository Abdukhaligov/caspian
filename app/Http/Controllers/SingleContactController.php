<?php

namespace App\Http\Controllers;

use App\Models\SingleContact;

class SingleContactController extends Controller {

  public function index() {
    $data = SingleContact::first();
    $data->social_networks = json_decode($data->social_networks);

    return view('contacts', compact('data'));
  }

}
