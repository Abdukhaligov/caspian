<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class EventSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [];
    $speakersOnEvent = [];
    for($i=0; $i<7; $i++){
      $data [] = [
          "name" => $faker->sentence(3),
          "banner" => "events/banner" . rand(1, 4) . ".jpg",
          "description" => $faker->paragraphs(3, true),
          "address" => $faker->address,
          "date" => $faker->dateTimeBetween("+2 days", "+ 2 months"),
          "active" => rand(1, 3) == 3 ? true : false
      ];

      for($j=0;$j<4;$j++){
        $speakersOnEvent [] = [
            "event_id" => $i+1,
            "speaker_id" => rand(1,8)
        ];
      }
    }

    DB::table('events')->insert($data);
    DB::table('event_speaker')->insert($speakersOnEvent);
  }

}
