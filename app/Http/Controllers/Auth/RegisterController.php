<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\Reference;
use App\Models\Membership;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller {
  use RegistersUsers;

  protected $redirectTo = RouteServiceProvider::HOME;

  public function __construct() {
    $this->middleware('guest');
  }

  protected function validator(array $data) {
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
    $user->save();

    return $user;
  }

  public function showRegistrationForm() {
    $data['references'] = Reference::all();
    $data['membership'] = Membership::showTree();

    return view('auth.register', compact('data'));
  }
}
