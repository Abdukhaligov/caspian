<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            ['name' => 'admin', 'email' => 'admin@a.a', 'password' => bcrypt(123123), 'referred_by' => 6],
            ['name' => 'manager', 'email' => 'manager@a.a', 'password' => bcrypt(123123), 'referred_by' => 6],
            ['name' => 'operator', 'email' => 'operator@a.a', 'password' => bcrypt(123123), 'referred_by' => 6],
        ];

        DB::table('users')->insert($users);

        DB::table('role_user')->insert([
            ['user_id' => 1, 'role_id' => 1], ['user_id' => 1, 'role_id' => 2], ['user_id' => 1, 'role_id' => 3],
            ['user_id' => 2, 'role_id' => 2], ['user_id' => 2, 'role_id' => 3],
            ['user_id' => 3, 'role_id' => 3,],
        ]);
    }
}
