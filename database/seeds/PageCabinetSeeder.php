<?php

use Illuminate\Database\Seeder;

class PageCabinetSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"Personal Cabinet\",\"ru\":\"Личный Кабинет\"}"
    ]];

    DB::table('page_cabinet')->insert($data);
  }

}
