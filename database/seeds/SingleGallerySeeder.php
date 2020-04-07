<?php

use Illuminate\Database\Seeder;

class SingleGallerySeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $data = [
        ["name" => "{\"en\":\"Our gallery\",\"ru\":\"\u041d\u0430\u0448\u0430 \u0413\u0430\u043b\u043b\u0435\u0440\u0435\u044f\"}"]
    ];

    DB::table('single_galleries')->insert($data);
  }
}
