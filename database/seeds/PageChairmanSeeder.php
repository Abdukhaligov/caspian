<?php

use Illuminate\Database\Seeder;

class PageChairmanSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"Chairmen\",\"ru\":\"Докладчики\"}"
    ]];

    DB::table('page_chairmen')->insert($data);
  }

}
