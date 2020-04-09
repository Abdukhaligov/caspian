<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\SingleHome;

class SingleHomeController extends Controller {

  public function index() {
    $data = SingleHome::first();
    $data["event"] =  Event::where('active', true)->first();

    return view('home', compact('data'));
  }

}
