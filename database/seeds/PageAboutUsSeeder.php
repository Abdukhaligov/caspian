<?php

use Illuminate\Database\Seeder;

class PageAboutUsSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"About us\",\"ru\":\"О нас\"}"
    ]];

    DB::table('page_about_us')->insert($data);
  }

}
