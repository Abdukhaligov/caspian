<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    public function parent(){
        return $this->belongsTo(Topic::class);
    }

    public function children(){
        return $this->hasMany(Topic::class, 'parent_id');
    }

}
