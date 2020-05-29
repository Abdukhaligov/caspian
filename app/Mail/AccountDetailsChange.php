<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AccountDetailsChange extends Mailable {
  use Queueable, SerializesModels;
  public $data;

  public function __construct($data) {
    $this->data = $data;

  }

  public function build() {
    $subject = 'Your account details has changed';


    return $this->markdown('emails.account-details-change')
        ->subject($subject)
        ->with(['message' => $this->data['message']]);
  }


}
