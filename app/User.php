<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use Notifiable;

    public function roles(){
        return $this->belongsToMany(Role::class);
    }

    public function isAdmin(){
        foreach($this->roles as $struct) {
            if ("Admin" == $struct->name) {
                return true;
            }
        }
        return false;
    }

    public function isManager(){
        foreach($this->roles as $struct) {
            if ("Manager" == $struct->name) {
                return true;
            }
        }
        return false;
    }

    public function isOperator(){
        foreach($this->roles as $struct) {
            if ("Operator" == $struct->name) {
                return true;
            }
        }
        return false;
    }

    protected $guarded = [];

    protected $fillable = [
        'name', 'email', 'password',
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
