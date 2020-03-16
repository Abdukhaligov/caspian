<?php

namespace App;

use App\Models\Membership;
use App\Models\Reference;
use App\Models\Report;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Faker\Factory as Faker;

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

        if($this->membership->id != 3 && $this->membership->id != 5 && $this->membership->id != 6){
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

    public function reference(){
        return $this->belongsTo(Reference::class);
    }

    public function reports(){
        return $this->hasMany(Report::class);
    }

    public function pendingReports(){
        return $this->hasMany(Report::class)->where('status', '=', 'pending');
    }

    public function membership(){
        return $this->belongsTo(Membership::class);
    }

    public function generateNumber(){
        $number = rand(0,4);
        switch ($number){
            case(0):$number = '55';break;
            case(1):$number = '50';break;
            case(2):$number = '51';break;
            case(3):$number = '70';break;
            case(4):$number = '77';break;
        }
        return '994'.$number.rand(221,795).rand(21,98).rand(10,85);
    }

    public function generateUser(){
        $faker = Faker::create();
        $data["name"] = $faker->name;
        $data["email"] = $faker->email;
        $data["phone"] = $this->generateNumber();
        $data["company"] = $faker->company;
        $data["job_title"] = $faker->jobTitle;
        $data["reference_id"] = rand(1,6);
        $data["membership_id"] = rand(1,6);
        return new User($data);
    }

    protected $fillable = [
        'name', 'email', 'password', 'phone', 'company', 'job_title' , 'reference_id', 'membership_id', 'topic_id'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}

