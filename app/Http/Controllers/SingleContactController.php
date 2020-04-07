<?php

namespace App\Http\Controllers;

use App\Models\SingleContact;
use Illuminate\Http\Request;

class SingleContactController extends Controller {
  public function index() {
    $data = SingleContact::first();

    return view('contacts', compact('data'));
  }
}
