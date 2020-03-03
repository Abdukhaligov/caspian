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
            ['name' => 'admin', 'email' => 'admin@a.a', 'password' => bcrypt(123123), 'is_admin' => true],
        ];
        DB::table('users')->insert($users);
    }
}
