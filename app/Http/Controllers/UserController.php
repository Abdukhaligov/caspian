<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;


class UserController extends Controller
{
    private function back403(){
        return response(redirect()->back(), 403);
    }
    private function back200(){
        return response(redirect()->back(), 200);
    }

    public function cabinet()
    {
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
        ];
        $data["reports"] = $user->reports;
        $data['topics'] = (new Topic)->showTree();

        return view('personal_cabinet', compact('data'));
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('MyApp')->accessToken;
        $success['name'] = $user->name;

        return response()->json(['success' => $success], 201);
    }
}
