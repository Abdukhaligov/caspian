<?php

namespace App\Http\Controllers;

use App\Models\SingleCommittee;

class SingleCommitteeController extends Controller {

  public function index() {
    $data = SingleCommittee::first();

    return view('committee', compact('data'));
  }

}
