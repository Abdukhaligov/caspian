<?php

use Illuminate\Database\Seeder;

class PageAbstractBook extends Seeder {

  public function run() {
    $data = [[
        "title" =>"Abstract Book",
    ]];

    DB::table('page_abstract_book')->insert($data);
  }

}
