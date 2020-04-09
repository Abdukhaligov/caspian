<?php

namespace App\Http\Controllers;

use App\Models\Membership;
use App\Models\Reference;
use App\Models\SingleCabinet;
use App\Models\Topic;
use Auth;

class SingleCabinetController extends Controller {

  public function index() {
    $data = SingleCabinet::first();
    $user = Auth::user();

    $data["user"] = (object)[
        "name" => $user->name,
        "email" => $user->email,
        "phone" => $user->phone ?? '',
        "company" => $user->company ?? '',
        "job_title" => $user->job_title ?? '',
        "membership_id" => $user->membership->name ?? '',
        "topic" => $user->topic->name ?? '',
        "joined" => $user->created_at ?? '',
        "canAddReport" => $user->canAddReports() ?? '',
        "reference" => $user->reference->name ?? '',
    ];
    $data["reports"] = $user->reports;
    $data["topics"] = Topic::showTree();
    $data['references'] = Reference::all();
    $data['membership'] = Membership::showTree();

    return view('cabinet', compact('data'));
  }


}
