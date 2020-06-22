<?php

use Illuminate\Database\Seeder;

class PageCommitteeSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "Committee"
    ]];

    DB::table('page_committee')->insert($data);
  }

}
