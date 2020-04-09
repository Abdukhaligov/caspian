<?php

use Illuminate\Database\Seeder;

class SinglePresenterSeeder extends Seeder {

  public function run() {
    $data = [
        ["title" => "{\"en\":\"Presenters\",\"ru\":\"Репортеры\"}"]
    ];

    DB::table('single_presenters')->insert($data);
  }

}
