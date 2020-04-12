<?php

use Illuminate\Database\Seeder;

class PageHomeSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => json_encode(["en" => "Home", "ru" => "Главная"])
    ]];

    DB::table('page_home')->insert($data);
  }

}
