<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\Passport;
use Validator;


class UserController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        return response()->json(['success'=>$success], 201);
    }

    public function details(){
        $user = Auth::user();
        return response()->json($user, 201);
    }

    public function login(){
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){
            $user = Auth::user();
            $success =  $user->createToken('API')->accessToken;

            return response()->json(['status' => 'ok', 'token' => $success], 201);
        }
        else{
            return response()->json(['status'=>'credential error']);
        }
    }

    public function logout(){

        $user = Auth::user();

        if($user->token()->delete()){
            return response()->json(['status'=>'successfully logout']);
        }else{
            return response()->json(['status'=>'somethings get wrong']);
        }
    }
}
