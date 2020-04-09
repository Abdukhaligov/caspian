<?php

namespace App\Http\Controllers;

use App\Models\SingleNews;
use Illuminate\Http\Request;

class SingleNewsController extends Controller
{

    public function index()
    {
      $data = SingleNews::first();

      return view('news', compact('data'));
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
     * @param  \App\Models\SingleNews  $singleNews
     * @return \Illuminate\Http\Response
     */
    public function show(SingleNews $singleNews)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SingleNews  $singleNews
     * @return \Illuminate\Http\Response
     */
    public function edit(SingleNews $singleNews)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SingleNews  $singleNews
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SingleNews $singleNews)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SingleNews  $singleNews
     * @return \Illuminate\Http\Response
     */
    public function destroy(SingleNews $singleNews)
    {
        //
    }
}
