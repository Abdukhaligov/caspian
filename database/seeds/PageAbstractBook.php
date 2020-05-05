<?php

use Illuminate\Database\Seeder;

class PageAbstractBook extends Seeder {

  public function run() {
    $data = [[
        "title" => json_encode(["en" => "Abstract Book", "ru" => "чтото"]),
    ]];

    DB::table('page_abstract_book')->insert($data);
  }

}
