<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReportRequest;
use App\Models\Event;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReportController extends Controller {
  private function addFile($request, $report) {
    $fileName = $request->file->store('');
    $request->file->store('public/reports');
    $report->update(['file' => $fileName]);

    return \Redirect::to(\URL::previous() . "#abstracts")
        ->withInput();
  }

  private function deleteReport($report) {
    $report->delete();
  }

  public function store(Request $request) {
    $validator = \Validator::make($request->all(), [
        'name' => 'required',
        'description' => 'required',
        'topic_id' => 'exists:topics,id'
    ]);

    if ($validator->fails()) {
      return \Redirect::to(\URL::previous() . "#new-abstract")
          ->withErrors($validator)
          ->withInput();
    }

    $request['user_id'] = Auth::user()->id;
    $request["event_id"] = Event::activeEvent()->id;
    if (Auth::user()->canAddReports()) {
      if (Report::create($request->all())) {
        return \Redirect::to(\URL::previous() . "#abstracts");
      } else {
        return \Redirect::to(\URL::previous() . "#abstracts");
      }
    } else {
      return \Redirect::to(\URL::previous() . "#abstracts");
    }
  }

  public function update(Request $request) {
    $report = Report::find($request->report_id);

    if ($report->canAttachFile()) {
      if ($request->file) {
        $this->addFile($request, $report);
        return \Redirect::to(\URL::previous() . "#abstracts");
      } else {
        return \Redirect::to(\URL::previous() . "#abstracts");
      }
    } else {
      return \Redirect::to(\URL::previous() . "#abstracts");
    }
  }

  public function destroy(Request $request) {
    $report = Report::find($request->id);

    if ($report->canDeleteReport()) {
      $report->delete();
      return \Redirect::to(\URL::previous() . "#abstracts")
          ->withInput();
    } else {
      return \Redirect::to(\URL::previous() . "#abstracts")
          ->withInput();
    }
  }
}
