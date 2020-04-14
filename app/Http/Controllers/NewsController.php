<?php

namespace App\Http\Controllers;

use App\Models\News;

class NewsController extends Controller {

  public function index($id) {
    $data = News::find($id);

    return view('news_details', compact('data'));
  }

}
