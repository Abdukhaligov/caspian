<?php

use Illuminate\Database\Seeder;

class PageCabinetSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "Personal Cabinet"
    ]];

    DB::table('page_cabinet')->insert($data);
  }

}
