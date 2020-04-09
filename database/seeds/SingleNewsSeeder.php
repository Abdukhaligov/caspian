<?php

use Illuminate\Database\Seeder;

class SingleNewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $data = [
          ["name" => "{\"en\":\"News\",\"ru\":\"Новости\"}"]
      ];

      DB::table('single_news')->insert($data);
    }
}
