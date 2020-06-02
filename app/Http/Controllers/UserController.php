<?php

namespace App\Http\Controllers;

use App\Mail\AccountDetailsChange;
use App\Mail\PasswordChange;
use App\Mail\ReportChange;
use App\Models\Event;
use App\User;
use Auth;
use Hash;
use Mail;
use Redirect;
use Illuminate\Http\Request;
use Validator;


class UserController extends Controller {

  public function index($id) {
    $user = User::find($id);

    if ($user->show_on_site) {
      $data = $user;
      return view('speaker_details', compact('data'));
    } else {
      return Redirect::back();
    }

  }

  public function update(Request $request){
    $user = Auth::user();

    if(!$request->degree_id){
      unset($request["degree_id"]);
    }

    $validator = Validator::make($request->all(), [
        'job_title' => ['required', 'string'],
        'company' => ['required', 'string'],
//        'membership_id' => ['required', 'exists:memberships,id'],
        'degree_id' => ['sometimes','exists:degrees,id'],
    ]);

    if ($validator->fails()) {
      return redirect()
          ->back()
          ->withErrors($validator)
          ->with('pill', 'info')
          ->withInput();
    }

    $user->degree_id = $request->degree_id;
    $user->job_title = $request->job_title;
    $user->company = $request->company;
    $user->save();

    Mail::to($user->email)->send(new AccountDetailsChange($user));


//    if(!$user->membership->reporter){
//      foreach ($user->reports as $report){
//        $report->status = "canceled";
//        $report->save();
//      }
//    }


    return redirect()->back();


  }

  public function updateMembership(Request $request){
    $user = Auth::user();

    $validator = Validator::make($request->all(), [
        'membership_id' => ['required', 'exists:memberships,id'],
    ]);

    if ($validator->fails()) {
      return redirect()
          ->back()
          ->withErrors($validator)
          ->with('pill', 'events')
          ->withInput();
    }

    if($user->currentEvent()){
      $user->events()->updateExistingPivot(Event::activeEvent()->id, ["membership_id" => $request->membership_id, "status" => 1]);
    }else{
      $user->events()->attach(Event::activeEvent()->id, ["membership_id" => $request->membership_id, "status" => 1]);
    }


    //Mail::to($user->email)->send(new AccountDetailsChange($user));

    return redirect()->back();
  }

  public function updatePassword(Request $request){

    $user = Auth::user();


    $validator = Validator::make($request->all(), [
        'current_password' => ['required', function ($attribute, $value, $fail) use ($user) {
          if (!\Hash::check($value, $user->password)) {
            return $fail(__('The current password is incorrect.'));
          }
        }],
        'password' => ['required', 'string', 'min:6', 'confirmed'],
    ]);

    if ($validator->fails()) {
      return redirect()
          ->back()
          ->withErrors($validator)
          ->with('pill', 'password')
          ->withInput();
    }

    $user->password = bcrypt($request->password);
    $user->save();

    Mail::to($user->email)->send(new PasswordChange($user));

    return redirect()->back();


  }


}
