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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SingleGallery  $singleGallery
     * @return \Illuminate\Http\Response
     */
    public function show(SingleGallery $singleGallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SingleGallery  $singleGallery
     * @return \Illuminate\Http\Response
     */
    public function edit(SingleGallery $singleGallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SingleGallery  $singleGallery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SingleGallery $singleGallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SingleGallery  $singleGallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(SingleGallery $singleGallery)
    {
        //
    }
}
