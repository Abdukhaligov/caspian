<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;


class Report extends Model {
  protected $fillable = ['user_id', 'name', 'description', 'file', 'topic_id'];

  public function user() {
    return $this->belongsTo(User::class);
  }

  public function topic() {
    return $this->belongsTo(Topic::class);
  }

  public function canAttachFile(User $user = null) {
    if (is_null($user)) $user = auth()->user();

    return (
        $this->user_id == $user->id
        && $this->file == null
        && $this->status == "accepted"
    );
  }

  public function canDeleteReport(User $user = null) {
    if (is_null($user)) $user = auth()->user();

    return $this->user_id == $user->id && $this->status == "pending";
  }
}
