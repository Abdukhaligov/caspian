<?php

namespace App;

use App\Models\Membership;
use App\Models\Reference;
use App\Models\Report;
use App\Models\Topic;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    public function isAdmin(){
        return $this->is_admin;
    }

    protected $guarded = [];

    public function referredBy(){
        return $this->belongsTo(Reference::class, 'referred_by');
    }

    public function topic(){
        return $this->belongsTo(Topic::class);
    }

    public function reports(){
        return $this->hasMany(Report::class);
    }

    public function memberAs(){
        return $this->belongsTo(Membership::class, 'member_as');
    }

    protected $fillable = [
        'name', 'email', 'password', 'phone_number', 'company', 'job_title' , 'referred_by', 'member_as', 'topic_id'
    ];


    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
