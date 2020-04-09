<?php

use Illuminate\Database\Seeder;

class SingleAboutSeeder extends Seeder {

  public function run() {
    $data = [
        ["title" => "{\"en\":\"About us\",\"ru\":\"О нас\"}"]
    ];

    DB::table('single_abouts')->insert($data);
  }

}
