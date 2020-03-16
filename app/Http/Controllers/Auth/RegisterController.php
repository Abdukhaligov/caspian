<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Reference;
use App\Models\Membership;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = RouteServiceProvider::HOME;

    public function __construct()
    {
        $this->middleware('guest');
    }

    protected function validator(array $data)
    {

        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'phone' => ['required', 'regex: (^[+]994[\s]{1}[(][0-9]{2}[)][\s]{1}[0-9]{3}[-][0-9]{2}[-][0-9]{2}$)', 'unique:users,phone'],
            'membership_id' => ['required','exists:memberships,id'],
            'reference_id' => ['required','exists:references,id'],
        ]);
    }

    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'phone' => preg_replace('/[^0-9]/', '', $data['phone']),
            'company' => $data['company'],
            'job_title' => $data['job_title'],
            'reference_id' => $data['reference_id'],
            'membership_id' => $data['membership_id'],
        ]);
    }

    public function showRegistrationForm()
    {
        $data['references'] = Reference::all();

        $data['membership'] = (new Membership)->showTree();

        return view('auth.register')->with(compact('data'));
    }
}
