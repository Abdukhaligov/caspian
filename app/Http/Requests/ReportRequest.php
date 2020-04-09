<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReportRequest extends FormRequest {

  public function authorize() { return true; }

  public function rules() {
    return [
        'name' => 'required',
        'description' => 'required',
        'topic_id' => 'exists:topics,id'
    ];
  }

}
