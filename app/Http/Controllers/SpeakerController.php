<?php

namespace App\Http\Controllers;

use App\Models\Speaker;
use Illuminate\Http\Request;

class SpeakerController extends Controller {

  public function index($id) {
    $data = Speaker::find($id);

    return view('speaker_details', compact('data'));
  }

}
