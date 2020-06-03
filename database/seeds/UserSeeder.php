<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder {

  public function run() {
    $users = [
        ["name" => "admin", "email" => "admin@site.com", "password" => bcrypt(123456), "is_admin" => true, "show_on_site" => false],
        ["name" => "admin", "email" => "admin@a.a", "password" => bcrypt(123123), "is_admin" => true, "show_on_site" => false]
    ];
    
    DB::table('users')->insert($users);
  }

}
