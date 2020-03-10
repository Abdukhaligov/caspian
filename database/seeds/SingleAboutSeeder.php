<?php

use Illuminate\Database\Seeder;

class SingleAboutSeeder extends Seeder
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

        DB::table('single_abouts')->insert($data);
    }
}
