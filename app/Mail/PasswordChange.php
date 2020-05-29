<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PasswordChange extends Mailable {
  use Queueable, SerializesModels;

  public $data;

  public function __construct($data) {
    $this->data = $data;
  }

  public function build() {
    $subject = 'Your password has changed';


    return $this->markdown('emails.password-change')
        ->subject($subject)
        ->with(['message' => $this->data['message']]);
  }


}
