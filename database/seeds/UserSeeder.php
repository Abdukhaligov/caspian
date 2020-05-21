<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder {

  public function run() {
    $users = [
        ["name" => "admin", "email" => "admin@site.com", "password" => bcrypt(123456), "is_admin" => true]
    ];
    
    DB::table('users')->insert($users);
  }

}
