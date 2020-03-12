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

    public function canAddReports(){

        if($this->id === 1){
            return true;
        }

        if($this->memberAs->id != 3 && $this->memberAs->id != 5 && $this->memberAs->id != 6){
            return false;
        }

        $reports = $this->hasMany(Report::class)->where('status', '=', 'pending');

        if($reports->count() >= 3){
            return false;
        }else{
            return true;
        }
    }

    protected $guarded = [];

    public function referredBy(){
        return $this->belongsTo(Reference::class, 'referred_by');
    }

    public function reports(){
        return $this->hasMany(Report::class);
    }

    public function pendingReports(){
        return $this->hasMany(Report::class)->where('status', '=', 'pending');
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

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}

