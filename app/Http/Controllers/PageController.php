<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Http\Requests\UserRequest;
use App\Mail\Contact;
use App\Mail\ContactUs;
use App\Models\Event;
use App\Models\Membership;
use App\Models\Pages\AbstractBook;
use App\Models\Pages\Program;
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
use App\User;
use Auth;
use Mail;
use Request;
use Validator;

class PageController extends Controller {

  public function contacts() {
    $data = Contacts::first();
    $data->social_networks = json_decode($data->social_networks);

    return view('contacts', compact('data'));
  }

  public function contactsForm(ContactRequest $request) {

    Mail::to(request('email'))
        ->send(new ContactUs('shirts'));

    return redirect()->back()->with('message', 'Email sent!');

  }

  public function committee() {
    $data = Committee::first();

    $data["users_1"] = User::where([['rank', '1'], ['show_on_site', true]])->get();
    $data["users_2"] = User::where([['rank', '2'], ['show_on_site', true]])->get();
    $data["users_3"] = User::where([['rank', '3'], ['show_on_site', true]])->get();

    return view('committee', compact('data'));
  }

  public function program() {
    $data = Program::first();
    $data->event = Event::activeEvent();
    $data->program = $data->event->program;


    return view('program', compact('data'));
  }

  public function cabinet() {
    $data = Cabinet::first();
    $user = Auth::user();

    $data["user"] = (object)[
        "name" => $user->name,
        "email" => $user->email,
        "phone" => $user->phone ?? '',
        "degree_id" => $user->degree_id ?? '',
        "company" => $user->company ?? '',
        "job_title" => $user->job_title ?? '',
        "membership_id" => $user->membership_id ?? '',
        "region_id" => $user->region_id ?? '',
        "topic" => $user->topic->name ?? '',
        "joined" => $user->created_at ?? '',
        "canAddReport" => $user->canAddReports() ?? '',
        "reference" => $user->reference->name ?? '',
    ];
    $data["reports"] = $user->reports()->orderBy('created_at', 'DESC')->get();
    $data["topics"] = Topic::showTree();
    $data["references"] = Reference::all();
    $data["membership"] = Membership::all();



    return view('cabinet', compact('data'));
  }

  public function aboutUs() {
    $data = AboutUs::first();

    return view('about', compact('data'));
  }

  public function abstractBook() {
    $data = AbstractBook::first();
    $data->books = json_decode($data->books);

    return view('abstractBook', compact('data'));
  }

  public function gallery() {
    $data = Gallery::first();

    $data["media"] = $data->getMedia('media');
    $data["videos"] = json_decode($data->videos);

    return view('gallery', compact('data'));
  }

  public function home() {
    $data = Home::first();
    $data["event"] = Event::activeEvent();

    if ($data["event"]) {
      $data["eventBanners"] = $data["event"]->getMedia('banners');
    }

    $data["sponsors"] = Sponsor::all();
    $data["partnersGold"] = Partner::where('gold', 1)->get();
    $data["partners"] = Partner::where('gold', 0)->get();

    return view('home', compact('data'));
  }

  public function news() {
    $data = News::first();
    $data["news"] = \App\Models\News::orderBy('created_at', 'desc')->paginate(9);

    return view('news', compact('data'));
  }

  public function speakers() {
    $data = Speakers::first();
    $data["speakers"] = User::speakers()->where('show_on_site', true);

    return view('speakers', compact('data'));
  }

  public function topics() {
    $data = Topics::first();

    return view('topics', compact('data'));
  }

}
