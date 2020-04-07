<?php

namespace App\Http\Controllers;

use App\Models\Membership;
use App\Models\Reference;
use App\Models\Topic;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller {
  private function back403() {
    return response(redirect()->back(), 403);
  }

  private function back200() {
    return response(redirect()->back(), 200);
  }

  public function cabinet() {
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

    return(Topic::showTree());
    die();

    return view('personal_cabinet', compact('data'));
  }
}
