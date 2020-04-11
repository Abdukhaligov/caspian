<?php

use Illuminate\Database\Seeder;

class PageCommitteeSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"Committee\",\"ru\":\"Комитет\"}"
    ]];

    DB::table('page_committee')->insert($data);
  }

}
