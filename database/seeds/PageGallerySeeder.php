<?php

use Illuminate\Database\Seeder;

class PageGallerySeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"Our gallery\",\"ru\":\"Наша Галлерея\"}"
    ]];

    DB::table('page_gallery')->insert($data);
  }

}
