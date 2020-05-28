<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReportRequest;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReportController extends Controller {

  private function addFile($request, $report) {
    $fileName = $request->file->store('');
    $request->file->store('public/reports');
    $report->update(['file' => $fileName]);

    return redirect()->back();
  }

  private function deleteReport($report) {
    $report->delete();

  }

  public function store(ReportRequest $request) {
    $request['user_id'] = Auth::user()->id;

    if (Auth::user()->canAddReports()) {
      if (Report::create($request->all())) {
        return redirect()->back();
      } else {
        return redirect()->back();
      }
    } else {
      return redirect()->back();
    }

  }

  public function update(Request $request) {
    $report = Report::find($request->report_id);

    if ($report->canAttachFile()) {
      if ($request->file) {
        $this->addFile($request, $report);
        return redirect()->back();
      } else {
        return redirect()->back();
      }
    } else {
      return redirect()->back();
    }

  }

  public function destroy(Request $request) {
    $report = Report::find($request->id);

    if ($report->canDeleteReport()) {
      $report->delete();
      return redirect()->back();
    } else {
      return redirect()->back();
    }

  }

}
