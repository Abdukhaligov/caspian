<?php

use Illuminate\Database\Seeder;

class SingleNewsSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"News\",\"ru\":\"Новости\"}"
    ]];

    DB::table('single_news')->insert($data);
  }

}
