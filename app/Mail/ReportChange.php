<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReportChange extends Mailable {
  use Queueable, SerializesModels;

  public $data;

  public function __construct($data) {
    $this->data = $data;

  }

  public function build() {
    $subject = 'Your report has changed';


    return $this->markdown('emails.report-status')
                ->subject($subject)
                ->with(['message' => $this->data['message']]);
  }
}
