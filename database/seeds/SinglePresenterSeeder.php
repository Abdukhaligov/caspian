<?php

use Illuminate\Database\Seeder;

class SinglePresenterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $data = [
          ["name" => "{\"en\":\"Presenters\",\"ru\":\"Репортеры\"}"]
      ];

      DB::table('single_presenters')->insert($data);
    }
}
