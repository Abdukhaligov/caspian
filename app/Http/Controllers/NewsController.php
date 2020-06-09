<?php

namespace App\Http\Controllers;

use App\Models\News;

class NewsController extends Controller {

  public function index($id) {
    $data["news"] = News::find($id);
    $data["recentNews"] = News::orderBy('created_at', 'desc')->limit(5)->with('media')->get();

    return view('news_details', compact('data'));
  }

}
