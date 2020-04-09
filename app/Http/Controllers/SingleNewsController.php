<?php

namespace App\Http\Controllers;

use App\Models\SingleNews;

class SingleNewsController extends Controller {

  public function index() {
    $data = SingleNews::first();

    return view('news', compact('data'));
  }

}
