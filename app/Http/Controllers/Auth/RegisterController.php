<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Mail\WelcomeMail;
use App\Models\Category;
use App\Models\Event;
use App\Models\Pages\Initial;
use App\Models\Reference;
use App\Models\Membership;
use App\Models\Report;
use App\Models\Topic;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Mail;

class RegisterController extends Controller {

  use RegistersUsers;

  protected $redirectTo = RouteServiceProvider::HOME;

  public function __construct() {
    $this->middleware('guest');
  }

  protected function validator(array $data) {
    if (!Membership::find($data["membership_id"])->reporter) {
      unset($data["abstract_topic_id"]);
      unset($data["abstract_name"]);
      unset($data["abstract_description"]);
    }
    return Validator::make($data, UserRequest::rules());
  }

  protected function create(array $data) {
    $user = User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => Hash::make($data['password']),
        'phone' => preg_replace('/[^0-9]/', '', $data['phone']),
        'company' => $data['company'],
        'job_title' => $data['job_title'],
        'reference_id' => $data['reference_id'],
        'region_id' => $data['region_id'],
        'degree_id' => $data['degree_id'] ?? '',
    ]);

    if (isset($data['avatar'])) {
      $user->addMediaFromRequest('avatar')->toMediaCollection('avatars');
    }

    Mail::to($user->email)->send(new WelcomeMail($user));

    if (Event::activeEvent()) {
      $event = Event::activeEvent();
      $user->events()->attach($event->id, ["membership_id" => $data["membership_id"]]);

      if (Membership::find($data["membership_id"])->reporter) {
        Report::create([
            'event_id' => $event->id,
            'user_id' => $user->id,
            'name' => $data['abstract_name'],
            'description' => $data['abstract_description'],
            'topic_id' => $data['abstract_topic_id']
        ]);
      }
    }

    return $user;
  }

  public function showRegistrationForm() {
    $data["references"] = Reference::all();
    $data["membership"] = Membership::all();
    $data["categories"] = Category::all();
    $data["topics"] = Topic::where('parent_id', '=', null)->with('children')->get();
    $data["event"] = Event::activeEvent() ?? "";
    $data["initial"] = Initial::first();

    return view('auth.register', compact('data'));
  }

}
