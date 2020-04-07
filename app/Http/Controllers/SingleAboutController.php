<?php

namespace App\Http\Controllers;

use App\models\SingleAbout;
use Illuminate\Http\Request;

class SingleAboutController extends Controller {
  public function index() {
    $data = SingleAbout::first();

    return view('about', compact('data'));
  }
}
