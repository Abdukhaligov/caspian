<?php

use Illuminate\Database\Seeder;

class SingleCommitteeSeeder extends Seeder {

  public function run() {
    $data = [
        ["title" => "{\"en\":\"Committee\",\"ru\":\"Комитет\"}"]
    ];

    DB::table('single_committees')->insert($data);
  }

}
