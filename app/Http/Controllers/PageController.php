<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactUs;
use App\Models\Category;
use App\Models\Event;
use App\Models\Membership;
use App\Models\Pages\AbstractBook;
use App\Models\Pages\Initial;
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
use App\Models\Voucher;
use App\User;
use Auth;
use DB;
use Mail;
use PhpOffice\PhpWord\TemplateProcessor;
use Request;
use Storage;


class PageController extends Controller {

  public function contacts() {
    $data = Contacts::first();
    $data->social_networks = json_decode($data->social_networks);

    $data->map = explode(',', $data->map);

    $data["lat"] = $data->map[0];
    $data["lng"] = $data->map[1];

    return view('contacts', compact('data'));
  }

  public function contactsForm(ContactRequest $request) {

    Mail::to(request('email'))
        ->send(new ContactUs('shirts'));

    return redirect()->back()->with('message', 'Email sent!');

  }

  public function committee() {
    $data = Committee::first();

    $committee = User::where([['rank', '!=' ,null], ['show_on_site', true]])
        ->with('media')
        ->with('degree')->get();

    $data["users_1"] = $committee->where('rank', '1');
    $data["users_2"] = $committee->where('rank', '2');
    $data["users_3"] = $committee->where('rank', '3');

    return view('committee', compact('data'));
  }

  public function program() {
    $data = Program::first();
    $data->event = Event::activeEvent();
    $users = $data->event ? User::with('events')
        ->whereHas('events',function ($q) use ($data){
          return $q->where('event_id', $data->event->id);
        })
        ->with('media')
        ->with('degree')
        ->get() : [];

    $data->days = $data->event ? json_decode($data->event->days) : [];

    foreach ($data->days as $day){
      foreach ($day->attributes->events as $event){
        $event->user = "test";
        $event->key = $event->attributes->key ?? '';
        if(isset($event->attributes->user)){
          $event->user = $users->where('id','=', $event->attributes->user)->first() ?? '';
        }elseif(isset($event->attributes->pic)){
          $event->pic = $event->attributes->pic;
        }else{
          $event->pic = Initial::getData()->logo;
        }
        $event->title = $event->attributes->title ?? '';
        $event->address = $event->attributes->address ?? '';
        $event->event_end = $event->attributes->event_end ?? '';
        $event->description = $event->attributes->description ?? '';
        $event->event_start = $event->attributes->event_start ?? '';
      }
    }

    return view('program', compact('data'));
  }

  public function cabinet() {

    $data = Cabinet::first();
    $user = Auth::user();

    $data["user"] = (object)[
        "name" => $user->name,
        "email" => $user->email,
        "avatar" => $user->getMedia('avatars')->first(),
        "phone" => $user->phone ?? '',
        "degree_id" => $user->degree_id ?? '',
        "company" => $user->company ?? '',
        "job_title" => $user->job_title ?? '',
        "region_id" => $user->region_id ?? '',
        "currentMembership" => $user->currentMembership() ?? '',
        "topic" => $user->topic->name ?? '',
        "joined" => $user->created_at ?? '',
        "canAddReport" => $user->canAddReports() ?? '',
        "reference" => $user->reference->name ?? '',
    ];
    $data["event"] = Event::activeEvent();

    $data["reports"] = $user->currentReports() ?
        $user->currentReports()
            ->orderBy('created_at', 'DESC')
            ->get()
        : [];

    $data["topics"] = Topic::where('parent_id', '=', null)->with('children')->get();

    $data["events"] = $user->events()->where('active', '!=', 1)->get() ?? [];
    $data["memberships"] = Membership::all();

    $data["vouchers"] = $data["event"] ? $user->eventVouchers($data["event"]->id) : [];
    $data["broadcastVouchers"] = $data["event"] ? Voucher
        ::where('event_id', '=', $data["event"]->id)
        ->where('membership_id', '=', null)
        ->get() : [];

    $data["categories"] = Category::all();

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
    $data["videos"] = $data->videos();


    return view('gallery', compact('data'));
  }

  public function home() {
    $data = Home::first();
    $data["event"] = Event::activeEvent() ?? "";

    if ($data["event"]) {
      $data["speakers"] = $data["event"]->speakers()->where('show_on_site', 1)->with('degree')->with('media')->get();
      if ($data["event"]) {
        $data["eventBanners"] = $data["event"]->getMedia('banners');
      }
    }


    $data["sponsors"] = Sponsor::query()->with('degree')->with('media')->get();
    $partners = Partner::with('media')->get();
    $data["partnersGold"] = $partners->where('gold', '=', 1);
    $data["partners"] = $partners->where('gold', '=', 0);

    return view('home', compact('data'));
  }

  public function news() {
    $data = News::first();
    $data["news"] = \App\Models\News::orderBy('created_at', 'desc')->with('media')->paginate(9);

    return view('news', compact('data'));
  }

  public function speakers() {

    $data = Speakers::first();
    $event = Event::activeEvent();
    $data["speakers"] = User::speakers()->where('show_on_site', 1)->with('degree')->with('media')->get();

    return view('speakers', compact('data'));
  }

  public function topics($id = null) {
    $data = Topics::first();
    $data["categories"] = Category::all();
    if ($id) $data["topics"] = Category::find($id)->topics()->with('children')->get();

    return view('topics', compact('data'));
  }




}
