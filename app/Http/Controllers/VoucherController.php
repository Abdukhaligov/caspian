<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\Voucher;
use Auth;
use Illuminate\Http\Request;
use PhpOffice\PhpWord\TemplateProcessor;
use Storage;

class VoucherController extends Controller {

  public function index($id) {
    $user = Auth::user();
    $voucher = Voucher::find($id) ?? null;
    $membership = $user->currentMembership();

    if (!$voucher->uniq) {
      return redirect(Storage::disk('public')->url($voucher->template));
    }

    if ($membership->id != $voucher->membership->id ||
        $membership->status != 3) {
      return redirect()->back();
    }

    $document = $user->documents()->where('voucher_id', '=', $voucher->id)->first();

    if ($document) {


      return redirect(Storage::disk('vouchers')->url($document->path));

    } else {

      $file = Storage::disk('public')->url($voucher->template);
      $newFile = uniqid('doc_') . '.docx';

      $document = new Document();
      $document->user_id = $user->id;
      $document->voucher_id = $voucher->id;
      $document->path = $newFile;
      $document->save();

      $phpword = new TemplateProcessor($file);
      $phpword->setValues([
          '{{id}}' => $document->id ?? '',
          '{{membership}}' => $membership->name ?? '',
          '{{voucherDate}}' => $voucher->created_at ?? '',
          '{{documentDate}}' => $document->created_at ?? '',
          '{{userName}}' => $user->name ?? '',
          '{{userEmail}}' => $user->email ?? '',
          '{{userPhone}}' => $user->phone ?? '',
          '{{userDegree}}' => $user->degree->name ?? '',
          '{{userJobTitle}}' => $user->job_title ?? '',
          '{{userCompany}}' => $user->company ?? '',
        'a' => 'AAA'
      ]);


      $phpword->saveAs('storage/vouchers/' . $newFile);


      return redirect(Storage::disk('vouchers')->url($newFile));
    }

  }


  public function show(Voucher $voucher) {
    //
  }

}
