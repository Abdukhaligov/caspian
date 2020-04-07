<?php

namespace App;

use App\Models\Membership;
use App\Models\Reference;
use App\Models\Report;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Faker\Factory as Faker;

class User extends Authenticatable {
  use HasApiTokens, Notifiable;

  protected $guarded = [];
  protected $fillable = ['name', 'email', 'password', 'phone', 'company', 'job_title', 'reference_id', 'membership_id', 'topic_id'];
  protected $hidden = ['password', 'remember_token'];
  protected $casts = ['email_verified_at' => 'datetime'];

  public function isAdmin() { return $this->is_admin; }

  public function canAddReports() {
    if ($this->isAdmin()) return true;

    return $this->checkMembership([5, 6]) && $this->checkAccessCount(3);
  }

  private function checkMembership(array $ids = []) {
    if (!count($ids)) return false;

    return in_array($this->membership->id, $ids);
  }

  private function checkAccessCount(int $count = 0) {
    return $this->pendingReports->count() < $count;
  }

  public function reference() {
    return $this->belongsTo(Reference::class);
  }

  public function reports() {
    return $this->hasMany(Report::class);
  }

  public function pendingReports() {
    return $this->reports()->where('status', '=', 'pending');
  }

  public function membership() {
    return $this->belongsTo(Membership::class);
  }
}

