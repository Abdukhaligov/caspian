<?php

namespace App\Http\Controllers;

use App\Models\SingleGallery;

class SingleGalleryController extends Controller {

  public function index() {
    $gallery = SingleGallery::first();

    $data["photos"] = $gallery->getMedia('photos');
    $data["videos"] = json_decode($gallery->videos);

    return view('gallery', compact('data'));
  }

}
