<?php

use Illuminate\Database\Seeder;

class SingleHomeSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"Home\",\"ru\":\"Главная\"}"
    ]];

    DB::table('single_homes')->insert($data);
  }

}
