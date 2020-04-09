<?php

namespace App\Http\Controllers;

use App\models\SingleAbout;

class SingleAboutController extends Controller {

  public function index() {
    $data = SingleAbout::first();

    return view('about', compact('data'));
  }

}
