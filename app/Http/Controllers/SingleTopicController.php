<?php

namespace App\Http\Controllers;

use App\Models\SingleTopic;

class SingleTopicController extends Controller {

  public function index() {
    $data = SingleTopic::first();

    return view('topics', compact('data'));
  }

}


