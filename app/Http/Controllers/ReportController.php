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
        $request['topic_id'] = (int) $request['topic_id'];

        $validator = Validator::make($request->all(), [
            'name' => '',
            'description' => '',
            'topic_id' => 'exists:topics,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        }
        $input = $request->all();

        if(!$user->canAddReports()){
            return response(redirect()->back(),403);
        }

        if(Report::create($input)){
            return redirect()->back();
        } else {
            return response(redirect(url('/')), 403);
        }

    }

    public function show(Report $report){
        //
    }

    public function edit(Report $report){
        //
    }

    public function update(Request $request){

        $user = Auth::user()->id;
        $report = Report::find($request->report_id);

        if(!$request->file){
            return response(redirect()->back(), 403);
        }

        if ($report->user_id == $user && $report->file == null && $report->status == "accepted") {

            $fileName = $request->file->store('');
            $request->file->store('public/reports');
            $report->update(['file' => $fileName]);

            return response(redirect()->back(), 200);
        } else {
            return response(redirect(url('/')), 403);
        }



    }

    public function destroy(Request $request){
        $user = Auth::user();
        $report = Report::find($request->id);

        if($user->id == $report->user_id && $report->status == "pending") {
            $report->delete();
            return redirect()->back();
        }else{
            return response(redirect()->back(),403);
        }
    }
}
