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
            ['name' => 'Guest'],
            ['name' => 'Listener'],
            ['name' => 'Reporter'],
            ['name' => 'Press'],
        ];
        DB::table('memberships')->insert($memberships);

        $memberships = [
            ['name' => 'Speaker', 'parent_id' => 3],
            ['name' => 'Presenter', 'parent_id' => 3],
        ];
        DB::table('memberships')->insert($memberships);
    }
}
