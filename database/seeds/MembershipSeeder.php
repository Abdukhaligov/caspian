<?php

use Illuminate\Database\Seeder;

class MembershipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $memberships = [
            ['name' => 'Reporter'],
            ['name' => 'Listener'],
            ['name' => 'Press'],
            ['name' => 'Guest'],
        ];
        DB::table('memberships')->insert($memberships);

        $memberships = [
            ['name' => 'Speaker', 'parent_id' => 1],
            ['name' => 'Presenter', 'parent_id' =>1],
        ];
        DB::table('memberships')->insert($memberships);
    }
}
