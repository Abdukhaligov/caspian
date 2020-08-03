<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static where(string $string, string $string1, $null)
 * @method static pluck(string $string, string $string1)
 * @method static create(array $array)
 */
class Topic extends Model {

  public function parent() { return $this->belongsTo(Topic::class); }

  public function category() { return $this->belongsTo(Category::class); }

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
