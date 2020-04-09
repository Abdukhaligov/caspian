<?php

namespace App\Http\Controllers;

use App\Models\SinglePresenter;
use Illuminate\Http\Request;

class SinglePresenterController extends Controller
{

    public function index()
    {
      $data = SinglePresenter::first();

      return view('presenters', compact('data'));
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
     * @param  \App\Models\SinglePresenter  $singlePresenter
     * @return \Illuminate\Http\Response
     */
    public function show(SinglePresenter $singlePresenter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SinglePresenter  $singlePresenter
     * @return \Illuminate\Http\Response
     */
    public function edit(SinglePresenter $singlePresenter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SinglePresenter  $singlePresenter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SinglePresenter $singlePresenter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SinglePresenter  $singlePresenter
     * @return \Illuminate\Http\Response
     */
    public function destroy(SinglePresenter $singlePresenter)
    {
        //
    }
}
