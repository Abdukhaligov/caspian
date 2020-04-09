<?php

namespace App\Http\Controllers;

use App\Models\SingleTopic;
use Illuminate\Http\Request;

class SingleTopicController extends Controller
{

    public function index()
    {
      $data = SingleTopic::first();

      return view('topics', compact('data'));
    }


}


