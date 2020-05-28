<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Mail\WelcomeMail;
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
    if(!Membership::find($data["membership_id"])->reporter){
      unset($data["abstract_topic_id"]);
      unset($data["abstract_name"]);
      unset($data["abstract_description"]);
    }
    if(!$data['degree_id']){
      unset($data["degree_id"]);
    }

    return Validator::make($data, UserRequest::rules());
  }

  protected function create(array $data) {
    $user = new User();
    $user->name = $data['name'];
    $user->email = $data['email'];
    $user->password = Hash::make($data['password']);
    $user->phone = preg_replace('/[^0-9]/', '', $data['phone']);
    $user->company = $data['company'];
    $user->job_title = $data['job_title'];
    $user->reference_id = $data['reference_id'];
    $user->membership_id = $data['membership_id'];
    if($data['degree_id']){
      $user->degree_id = $data['degree_id'];
    }

    Mail::to($user->email)->send(new WelcomeMail($user));


    $user->save();



    if(Membership::find($data["membership_id"])->reporter){
      Report::create([
          'user_id' => $user->id,
          'name' => $data['abstract_name'],
          'description' => $data['abstract_description'],
          'topic_id' => $data['abstract_topic_id']
      ]);
    }




    return $user;
  }

  public function showRegistrationForm() {
    $data['references'] = Reference::all();
    $data['membership'] = Membership::all();
    $data["topics"] = Topic::showTree();

    return view('auth.register', compact('data'));
  }

}
