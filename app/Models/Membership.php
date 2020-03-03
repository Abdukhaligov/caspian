<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    public function parent(){
        return $this->belongsTo(Membership::class);
    }

    public function children(){
        return $this->hasMany(Membership::class, 'parent_id');
    }

    public function membership(){
        return $this->belongsTo(Membership::class);

    }
}
