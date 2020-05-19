<?php

use Illuminate\Database\Seeder;

class PageProgramSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"Program\",\"ru\":\"Program\"}"
    ]];

    DB::table('page_program')->insert($data);
  }

}
