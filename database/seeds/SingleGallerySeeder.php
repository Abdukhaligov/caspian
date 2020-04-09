<?php

use Illuminate\Database\Seeder;

class SingleGallerySeeder extends Seeder {

  public function run() {
    $data = [
        ["title" => "{\"en\":\"Our gallery\",\"ru\":\"Наша Галлерея\"}"]
    ];

    DB::table('single_galleries')->insert($data);
  }

}
