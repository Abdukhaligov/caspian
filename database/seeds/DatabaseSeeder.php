<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ReferenceSeeder::class);
        $this->call(MembershipSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(TopicSeeder::class);

        factory(\App\User::class,12)->create();
        factory(\App\Models\Topic::class,12)->create();

        factory(\App\Models\Report::class,12)->create();
    }
}
