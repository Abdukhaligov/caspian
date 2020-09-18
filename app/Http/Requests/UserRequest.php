<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest {

  public function authorize() { return true; }

  public static function rules() {
    return [
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'string', 'min:6', 'confirmed'],
        //'phone' => ['required', 'regex: (^[+]994[\s]{1}[(][0-9]{2}[)][\s]{1}[0-9]{3}[-][0-9]{2}[-][0-9]{2}$)', 'unique:users,phone'],
        'phone' => ['required', 'unique:users,phone'],
        'membership_id' => ['sometimes', 'exists:memberships,id'],
        'reference_id' => ['required', 'exists:references,id'],
        'degree_id' => ['sometimes','exists:degrees,id'],

        'abstract_name' => 'sometimes|required',
        'abstract_description' => 'sometimes|required',
        'abstract_topic_id' => 'sometimes|exists:topics,id'
    ];
  }

}
