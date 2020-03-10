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
        $this->call(TopicSeeder::class);
        factory(\App\Models\Topic::class,12)->create();

        $this->call(UserSeeder::class);
        factory(\App\User::class,12)->create();

        factory(\App\Models\Report::class,12)->create();
        factory(\App\Models\Partner::class,10)->create();
        factory(\App\Models\Event::class,10)->create();

        /*  SINGLE PAGES */
        $this->call(SingleAboutSeeder::class);
        $this->call(SingleContactSeeder::class);

    }
}
