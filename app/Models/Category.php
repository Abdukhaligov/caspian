<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $array)
 */
class Category extends Model
{
    public function topics(){
        return $this->hasMany(Topic::class);
    }
}
