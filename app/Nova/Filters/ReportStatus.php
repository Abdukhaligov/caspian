<?php

namespace App\Nova\Filters;

use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;

class ReportStatus extends Filter {

  public $component = 'select-filter';


  public function apply(Request $request, $query, $value) {
    return $query->where('status', $value);
  }


  public function options(Request $request) {
    return [
        'pending' => 'pending',
        'canceled' => 'canceled',
        'accepted' => 'accepted',
    ];
  }

}
