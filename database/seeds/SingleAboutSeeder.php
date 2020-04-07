<?php

use Illuminate\Database\Seeder;

class SingleAboutSeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $data = [
        ["name" => "{\"en\":\"About us\",\"ru\":\"\u041e \u043d\u0430\u0441\"}"]
    ];

    DB::table('single_abouts')->insert($data);
  }
}
