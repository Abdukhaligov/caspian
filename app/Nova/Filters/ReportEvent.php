<?php

namespace App\Nova\Filters;

use App\Models\Event;
use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;

class ReportEvent extends Filter {

  public $component = 'select-filter';


  public function apply(Request $request, $query, $value) {
    return $query->where('event_id', $value);

  }

  public function options(Request $request) {
    $events = array();
    foreach (Event::all() as $event){
      $events[$event->name] = $event->id;
    }
    return $events;
  }
}
