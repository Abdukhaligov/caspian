<?php

use Illuminate\Database\Seeder;

class PageNewsSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"News\",\"ru\":\"Новости\"}"
    ]];

    DB::table('page_news')->insert($data);
  }

}
