<?php

use Illuminate\Database\Seeder;

class SingleCommitteeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $data = [
          ["name" => "{\"en\":\"Committee\",\"ru\":\"Комитет\"}"]
      ];

      DB::table('single_committees')->insert($data);
    }
}
