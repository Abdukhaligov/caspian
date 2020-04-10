<?php

use Illuminate\Database\Seeder;

class SingleTopicSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"Topics\",\"ru\":\"Темы\"}"
    ]];

    DB::table('single_topics')->insert($data);
  }

}
