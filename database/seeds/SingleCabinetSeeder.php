<?php

use Illuminate\Database\Seeder;

class SingleCabinetSeeder extends Seeder {

  public function run() {
    $data = [
        ["title" => "{\"en\":\"Personal Cabinet\",\"ru\":\"Личный Кабинет\"}"]
    ];

    DB::table('single_cabinets')->insert($data);
  }

}
