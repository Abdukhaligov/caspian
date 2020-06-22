<?php

use Illuminate\Database\Seeder;

class PageSpeakersSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "Speakers"
    ]];

    DB::table('page_speakers')->insert($data);
  }

}
