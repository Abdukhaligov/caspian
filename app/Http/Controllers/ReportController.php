<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReportRequest;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReportController extends Controller {

  private function back403() { return response(redirect()->back(), 403); }

  private function back200() { return response(redirect()->back(), 200); }

  private function addFile($request, $report) {
    $fileName = $request->file->store('');
    $request->file->store('public/reports');
    $report->update(['file' => $fileName]);

    return redirect()->back();
    //return $this->back200();
  }

  private function deleteReport($report) {
    $report->delete();

    //return $this->back200();
  }

  public function store(ReportRequest $request) {
    $request['user_id'] = Auth::user()->id;

    if(Auth::user()->canAddReports()){
      if(Report::create($request->all())){
        return redirect()->back();
      }else{
        return redirect()->back();
      }
    }else{
      return redirect()->back();
    }

    //return
    //   Auth::user()->canAddReports() && Report::create($request->all())
    //       ? $this->back200()
    //       : $this->back403();
  }

  public function update(Request $request) {
    $report = Report::find($request->report_id);

    if($report->canAttachFile()){
      if($request->file){
        $this->addFile($request, $report);
      }else{
        return redirect()->back();
      }
    }else{
      return redirect()->back();
    }

    //return
    //   $report->canAttachFile() && $request->file
    //      ? $this->addFile($request, $report)
    //      : $this->back403();
  }

  public function destroy(Request $request) {
    $report = Report::find($request->id);

    if($report->canDeleteReport()){

      $report->delete();
      return redirect()->back();

    }else{
      return redirect()->back();
    }

    //return
    //    $report->canDeleteReport()
    //        ? $this->deleteReport($report)
    //        : $this->back403();

  }

}
