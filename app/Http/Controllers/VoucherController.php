<?php

namespace App\Http\Controllers;

use App\Models\Voucher;
use Auth;
use Illuminate\Http\Request;
use PhpOffice\PhpWord\TemplateProcessor;
use Storage;

class VoucherController extends Controller {

  public function index($id) {
    $user = Auth::user();
    $voucher = Voucher::findOrFail($id);

//    if($user->membership->id != $voucher->membership->id){
//      return redirect()->back();
//    }


    $file = Storage::disk('public')->url($voucher->template);
    $newFile = uniqid('doc_').'.docx';

    $phpword = new TemplateProcessor($file);
    $phpword->setValue('{name}', $user->name);
    $phpword->setValue('{email}', $user->email);
    $phpword->setValue('{phone}', $user->phone);
    $phpword->setValue('{company}', $user->company);
    $phpword->setValue('{job_title}', $user->job_title);
    $phpword->setValue('{date}', date("d M Y H:m:s"));


    $phpword->saveAs('storage/vouchers/'.$newFile);
    return redirect(Storage::disk('vouchers')->url($newFile));

  }

  public function create() {
    //
  }


  public function store(Request $request) {
    //
  }

  public function show(Voucher $voucher) {
    //
  }

  public function edit(Voucher $voucher) {
    //
  }

  public function update(Request $request, Voucher $voucher) {
    //
  }

  public function destroy(Voucher $voucher) {
    //
  }
}
