<?php

namespace App\Http\Controllers;

use App\Models\SingleContact;
use Illuminate\Http\Request;

class SingleContactController extends Controller {
  public function index() {
    $data = SingleContact::first();
    $data->social_networks = json_decode($data->social_networks);

    return view('contacts', compact('data'));
  }
}
