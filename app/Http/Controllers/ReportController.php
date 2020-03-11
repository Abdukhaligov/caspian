<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ReportController extends Controller
{
    public function index(){
        //
    }

    public function create(){
        //
    }

    public function store(Request $request){

        $user = Auth::user();
        $request['user_id'] = $user->id;

        $validator = Validator::make($request->all(), [
            'name' => '',
            'description' => '',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $input = $request->all();

        if(!$user->canAddReports()){
            return redirect()->back();
        }

        if(Report::create($input)){
            return redirect()->back();
        } else {
            return response(redirect(url('/')), 404);
        }

    }

    public function show(Report $report){
        //
    }

    public function edit(Report $report){
        //
    }

    public function update(Request $request){
        $user = \Auth::user()->id;
        $report = Report::find($request->report_id);


        if ($report->user_id == $user && $report->file == null && $report->status == "accepted") {

            $fileName = $request->file->store('');
            $request->file->store('public/reports');

            $report->update(['file' => $fileName]);

            return redirect()->back();
        } else {
            return response(redirect(url('/')), 404);
        }



    }

    public function destroy(Request $request){
        $user = Auth::user();
        $report = Report::find($request->id);

        if($user->id == $report->user_id && $report->status == "pending") {
            $report->delete();
            return redirect()->back();
        }else{
            return redirect()->back();
        }
    }
}
