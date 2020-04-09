<?php

namespace App\Http\Controllers;

use App\Models\SingleCommittee;
use Illuminate\Http\Request;

class SingleCommitteeController extends Controller
{

    public function index()
    {
      $data = SingleCommittee::first();

      return view('committee', compact('data'));
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
     * @param  \App\Models\SingleCommittee  $singleCommittee
     * @return \Illuminate\Http\Response
     */
    public function show(SingleCommittee $singleCommittee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SingleCommittee  $singleCommittee
     * @return \Illuminate\Http\Response
     */
    public function edit(SingleCommittee $singleCommittee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SingleCommittee  $singleCommittee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SingleCommittee $singleCommittee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SingleCommittee  $singleCommittee
     * @return \Illuminate\Http\Response
     */
    public function destroy(SingleCommittee $singleCommittee)
    {
        //
    }
}
