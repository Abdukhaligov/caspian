<?php

use Illuminate\Database\Seeder;

class SingleHomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $data = [
          ["name" => "{\"en\":\"Home\",\"ru\":\"Главная\"}"]
      ];

      DB::table('single_homes')->insert($data);
    }
}
