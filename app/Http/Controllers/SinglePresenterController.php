<?php

namespace App\Http\Controllers;

use App\Models\SinglePresenter;

class SinglePresenterController extends Controller {

  public function index() {
    $data = SinglePresenter::first();

    return view('presenters', compact('data'));
  }

}
