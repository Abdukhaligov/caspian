<?php

use Illuminate\Database\Seeder;

class PageProgramSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "Program"
    ]];

    DB::table('page_program')->insert($data);
  }

}
