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
//        'job_title' => ['required', 'string'],
//        'company' => ['required', 'string'],
//        'membership_id' => ['required', 'exists:memberships,id'],
        'degree_id' => ['sometimes','exists:degrees,id'],
    ]);

    if ($validator->fails()) {
      return Redirect::to(\URL::previous() . "#user-profile")
          ->withErrors($validator)
          ->withInput();
    }

    $user->degree_id = $request->degree_id;
    $user->job_title = $request->job_title;
    $user->company = $request->company;

    if(!$request->file('avatar')){
      if($user->hasMedia('avatars')){
        $user->getFirstMedia('avatars')->forceDelete();
      }
    }else{
      $user->addMediaFromRequest('avatar')->toMediaCollection('avatars');
    }

    $user->save();

    if (isset($request["membership_id"])){
      $event = Event::activeEvent();
      if(!$event) return redirect()->back();


      $reports = $user->reports()->where('event_id', $event->id)->get();

      foreach ($reports as $report) {
        if($report->status != 2){
          $report->status = 2;
          $report->save();
        }
      }

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

      if($user->currentEvent()) {
        $user->events()->updateExistingPivot($event->id, ["membership_id" => $request->membership_id, "status" => 1]);
      }else{
        $user->events()->attach($event->id, ["membership_id" => $request->membership_id]);
      }

    }

    if($user->email){
      Mail::to($user->email)->send(new AccountDetailsChange($user));
    }


//    if(!$user->membership->reporter){
//      foreach ($user->reports as $report){
//        $report->status = "canceled";
//        $report->save();
//      }
//    }


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
      return Redirect::to(\URL::previous() . "#change-password")
          ->withErrors($validator)
          ->withInput();
    }

    $user->password = bcrypt($request->password);
    $user->save();

    Mail::to($user->email)->send(new PasswordChange($user));

    return redirect()->back();


  }


}
