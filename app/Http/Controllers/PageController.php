<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Membership;
use App\Models\Presenter;
use App\Models\Reference;
use App\Models\Pages\SingleAbout;
use App\Models\Pages\SingleCabinet;
use App\Models\Pages\SingleCommittee;
use App\Models\Pages\SingleContact;
use App\Models\Pages\SingleGallery;
use App\Models\Pages\SingleHome;
use App\Models\Pages\SingleNews;
use App\Models\Pages\SinglePresenter;
use App\Models\Pages\SingleTopic;
use App\Models\Topic;
use Auth;

class PageController extends Controller {

  public function contacts() {
    $data = SingleContact::first();
    $data->social_networks = json_decode($data->social_networks);

    return view('contacts', compact('data'));
  }

  public function committee() {
    $data = SingleCommittee::first();

    return view('committee', compact('data'));
  }

  public function cabinet() {
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

  public function aboutUs() {
    $data = SingleAbout::first();

    return view('about', compact('data'));
  }

  public function gallery() {
    $data = SingleGallery::first();

    $data["photos"] = $data->getMedia('photos');
    $data["videos"] = json_decode($data->videos);

    return view('gallery', compact('data'));
  }

  public function home() {
    $data = SingleHome::first();
    $data["event"] =  Event::where('active', true)->first();
    $data["banners"] = json_decode($data["banners"]);

    return view('home', compact('data'));
  }

  public function news() {
    $data = SingleNews::first();

    return view('news', compact('data'));
  }

  public function presenters() {
    $data = SinglePresenter::first();
    $data["presenters"] = Presenter::all();

    return view('presenters', compact('data'));
  }

  public function topics() {
    $data = SingleTopic::first();

    return view('topics', compact('data'));
  }

}
