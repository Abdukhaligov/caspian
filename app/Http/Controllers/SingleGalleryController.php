<?php

namespace App\Http\Controllers;

use App\Models\SingleGallery;

class SingleGalleryController extends Controller {

  public function index() {
    $data = SingleGallery::first();

    $data["photos"] = $data->getMedia('photos');
    $data["videos"] = json_decode($data->videos);

    return view('gallery', compact('data'));
  }

}
