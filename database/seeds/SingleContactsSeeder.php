<?php

use Illuminate\Database\Seeder;

class SingleContactsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ["name" => "Some kind of name"]
        ];

        DB::table('single_contacts')->insert($data);
    }
}
