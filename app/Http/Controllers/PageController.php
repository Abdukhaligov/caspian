<?php

namespace App\Http\Controllers;

use App\Models\Chairman;
use App\Models\Event;
use App\Models\Membership;
use App\Models\Pages\Chairmen;
use App\Models\Speaker;
use App\Models\Reference;
use App\Models\Pages\AboutUs;
use App\Models\Pages\Cabinet;
use App\Models\Pages\Committee;
use App\Models\Pages\Contacts;
use App\Models\Pages\Gallery;
use App\Models\Pages\Home;
use App\Models\Pages\News;
use App\Models\Pages\Speakers;
use App\Models\Pages\Topics;
use App\Models\Sponsor;
use App\Models\Topic;
use App\Models\Partner;
use Auth;

class PageController extends Controller {

  public function contacts() {
    $data = Contacts::first();
    $data->social_networks = json_decode($data->social_networks);

    return view('contacts', compact('data'));
  }

  public function committee() {
    $data = Committee::first();

    return view('committee', compact('data'));
  }

  public function cabinet() {
    $data = Cabinet::first();
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
    $data = AboutUs::first();

    return view('about', compact('data'));
  }

  public function gallery() {
    $data = Gallery::first();

    $data["photos"] = $data->getMedia('photos');
    $data["videos"] = json_decode($data->videos);

    return view('gallery', compact('data'));
  }

  public function home() {
    $data = Home::first();
    $data["event"] =  Event::where('active', true)->first();
    $data["eventBanners"] = $data["event"]->getMedia('banners');
    $data["sponsors"] =  Sponsor::all();
    $data["partnersGold"] =  Partner::where('gold', 1)->get();
    $data["partners"] =  Partner::where('gold', 0)->get();

    return view('home', compact('data'));
  }

  public function news() {
    $data = News::first();
    $data["news"] = \App\Models\News::orderBy('created_at', 'desc')->paginate(9);

    return view('news', compact('data'));
  }

  public function speakers() {
    $data = Speakers::first();
    $data["speakers"] = Speaker::all();

    return view('speakers', compact('data'));
  }

  public function chairmen() {
    $data = Chairmen::first();
    $data["chairmen_1"] = Chairman::where('rank',1)->get();
    $data["chairmen_2"] = Chairman::where('rank',2)->get();
    $data["chairmen_3"] = Chairman::where('rank',3)->get();

    return view('chairmen', compact('data'));
  }

  public function register() {
    $data = Chairmen::first();
    $data["chairmen_1"] = Chairman::where('rank',1)->get();
    $data["chairmen_2"] = Chairman::where('rank',2)->get();
    $data["chairmen_3"] = Chairman::where('rank',3)->get();

    return view('auth.register', compact('data'));
  }

  public function topics() {
    $data = Topics::first();

    return view('topics', compact('data'));
  }

}
