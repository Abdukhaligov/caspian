<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Reference;
use App\Models\Membership;
use App\Models\Topic;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $membership = $data['member_as'];

        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'phone_number' => ['required', 'regex: (^[+]994[\s]{1}[(][0-9]{2}[)][\s]{1}[0-9]{3}[-][0-9]{2}[-][0-9]{2}$)','unique:users,phone_number'],
            'topic_id' => $membership == 5 || $membership == 6 || $membership == 3 ? ['required']: ''
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        //dd($data);
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'phone_number' => $data['phone_number'],
            'company' => $data['company'],
            'job_title' => $data['job_title'],
            'referred_by' => $data['referred_by'],
            'member_as' => $data['member_as'],
            'topic_id' => $data['topic_id'],
        ]);
    }

    public function showRegistrationForm()
    {
        $data['references'] = Reference::all();

        $memberships = Membership::where('parent_id', null)->get();

        function membershipTree ($memberships) {
            foreach ($memberships as $membership) {
                $children = $membership->children;
                if($children->count() > 0){
                    membershipTree($children);
                    $membership->hasChildren = true;
                }else{
                    $membership->hasChildren = false;
                }
            }
        }

        membershipTree($memberships);

        //return $memberships;
        //dd($memberships);

        $data['membership'] = $memberships;

        $topics = Topic::where('parent_id', null)->get();

        function topicTree ($topics) {
            foreach ($topics as $topic) {
                $children = $topic->children;
                if($children->count() > 0){
                    topicTree($children);
                    $topic->hasChildren = true;
                }else{
                    $topic->hasChildren = false;
                }
            }
        }

        topicTree($topics);

        //return $topics;
        //dd($topics);

        $data['topics'] = $topics;


        return view('auth.register')->with(compact('data'));
    }
}
