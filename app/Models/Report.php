<?php

namespace App\Models;

use App\Mail\ReportChange;
use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Mail;

class Report extends Model {

  protected $fillable = ['user_id', 'event_id', 'name', 'description', 'file', 'topic_id'];

  public function user() { return $this->belongsTo(User::class); }

  public function event() { return $this->belongsTo(Event::class); }

  public function topic() { return $this->belongsTo(Topic::class); }

  protected function performUpdate(Builder $query) {
    $report = $query->getModel();

    if($report->status == 3){
      User::find($report->user_id)
          ->events()
          ->updateExistingPivot($report->event_id, ["status" => 3]);
    }

    Mail::to($report->user->email)->send(new ReportChange($report));

    return parent::performUpdate($query);
  }

  public function canAttachFile(User $user = null) {
    if (is_null($user)) $user = auth()->user();

    return (
        $this->user_id == $user->id
        && $this->file == null
        && $this->status == 3
    );
  }

  public function canDeleteReport(User $user = null) {
    if (is_null($user)) $user = auth()->user();

    return $this->user_id == $user->id && $this->status == 1;
  }

}
