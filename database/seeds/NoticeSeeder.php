<?php

use Illuminate\Database\Seeder;

class NoticeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $notices = [
            ['name' => 'Email Newsletter'],
            ['name' => 'Partners / Acquaintances'],
            ['name' => 'Online advertising'],
            ['name' => 'Social network advertising'],
            ['name' => 'Advertising mail'],
            ['name' => 'Another']

        ];

        DB::table('notices')->insert($notices);

    }
}
