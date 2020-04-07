<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SinglePagePolicy {
  use HandlesAuthorization;

  public function viewAny(User $user) { return true; }

  public function view(User $user) { return true; }

  public function create(User $user) { return false; }

  public function update(User $user) { return true; }

  public function delete() { return false; }

  public function restore() { return true; }

  public function forceDelete(User $user) { return false; }
}
