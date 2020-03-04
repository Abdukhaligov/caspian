<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;


class Report extends Model
{
    public function user(){
        return $this->belongsTo(User::class);
    }

    protected $fillable = ['file'];
}
