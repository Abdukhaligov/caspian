<?php

use Illuminate\Database\Seeder;

class PageTopicsSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "Topics"
    ]];

    DB::table('page_topics')->insert($data);
  }

}
