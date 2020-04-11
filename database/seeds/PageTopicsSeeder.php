<?php

use Illuminate\Database\Seeder;

class PageTopicsSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"Topics\",\"ru\":\"Темы\"}"
    ]];

    DB::table('page_topics')->insert($data);
  }

}
