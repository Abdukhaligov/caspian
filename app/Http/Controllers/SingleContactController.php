<?php

namespace App\Http\Controllers;

use App\Models\SingleContact;
use Illuminate\Http\Request;

class SingleContactController extends Controller
{

    public function index()
    {
        $data = SingleContact::first();

        return view('contacts', compact('data'));
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
     * @param  \App\Models\SingleContact  $singleContact
     * @return \Illuminate\Http\Response
     */
    public function show(SingleContact $singleContact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SingleContact  $singleContact
     * @return \Illuminate\Http\Response
     */
    public function edit(SingleContact $singleContact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SingleContact  $singleContact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SingleContact $singleContact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SingleContact  $singleContact
     * @return \Illuminate\Http\Response
     */
    public function destroy(SingleContact $singleContact)
    {
        //
    }
}
