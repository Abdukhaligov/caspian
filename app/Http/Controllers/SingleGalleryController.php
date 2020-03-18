<?php

namespace App\Http\Controllers;

use App\Models\Reference;
use App\Models\SingleGallery;
use Illuminate\Http\Request;

class SingleGalleryController extends Controller
{
    public function index()
    {
        $gallery = SingleGallery::first();
        $data["photos"] =  $gallery->getMedia('photos');
        $data["videos"] =  json_decode($gallery->videos);
        return view('gallery', compact('data'));
    }
}
