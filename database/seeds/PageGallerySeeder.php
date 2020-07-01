<?php

use Illuminate\Database\Seeder;

class PageGallerySeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "Our gallery"
    ]];

    DB::table('page_gallery')->insert($data);
  }

}
