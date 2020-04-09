<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model {

  public function parent() { return $this->belongsTo(Topic::class); }

  public function children() { return $this->hasMany(Topic::class, 'parent_id'); }

  public function reports() { return $this->hasMany(Report::class); }

  private static function topicTree($topics) {
    foreach ($topics as $topic) {
      $children = $topic->children;
      if ($children->count() > 0) {
        self::topicTree($children);
        $topic->hasChildren = true;
      } else {
        $topic->hasChildren = false;
      }
    }
  }

  public static function showTree() {
    $topics = Topic::where('parent_id', null)->get();
    self::topicTree($topics);

    return $topics;
  }

}
