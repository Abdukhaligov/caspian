<?php

use Illuminate\Database\Seeder;

class PageNewsSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "News"
    ]];

    DB::table('page_news')->insert($data);
  }

}
