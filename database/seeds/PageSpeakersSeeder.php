<?php

use Illuminate\Database\Seeder;

class PageSpeakersSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"Speakers\",\"ru\":\"Докладчики\"}"
    ]];

    DB::table('page_speakers')->insert($data);
  }

}
