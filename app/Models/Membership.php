<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Membership extends Model {

  use HasTranslations;
  public $translatable = ['name'];

  public function parent() {
    return $this->belongsTo(Membership::class);
  }

  public function children() {
    return $this->hasMany(Membership::class, 'parent_id');
  }

  private static function membershipTree($memberships) {
    foreach ($memberships as $membership) {
      $children = $membership->children;
      if ($children->count() > 0) {
        self::membershipTree($children);
        $membership->hasChildren = true;
      } else {
        $membership->hasChildren = false;
      }
    }
  }

  public static function showTree() {
    $memberships = Membership::where('parent_id', null)->get();
    self::membershipTree($memberships);

    return $memberships;
  }

}
