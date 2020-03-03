<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{

    public function index(){
        return Topic::all()->whereNull('parent_id');
    }

    public function create(){
        //
    }

    public function store(Request $request){
        //
    }

    public function show(Topic $topic){
        //
    }

    public function edit(Topic $topic){
        //
    }

    public function update(Request $request, Topic $topic){
        //
    }

    public function destroy(Topic $topic){
        //
    }
}
