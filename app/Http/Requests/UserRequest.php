<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public static function rules() {
    return [
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'string', 'min:6', 'confirmed'],
        'phone' => ['required', 'regex: (^[+]994[\s]{1}[(][0-9]{2}[)][\s]{1}[0-9]{3}[-][0-9]{2}[-][0-9]{2}$)', 'unique:users,phone'],
        'membership_id' => ['required', 'exists:memberships,id'],
        'reference_id' => ['required', 'exists:references,id'],
    ];
  }
}
