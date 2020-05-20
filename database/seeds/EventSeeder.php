<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class EventSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [];

//    $this->checkMembership([2, 3])
//
//    private function checkMembership(array $ids = []) {
//      if (!count($ids)) return false;
//
//      return in_array($this->membership->id, $ids);
//    }

    for ($i = 0; $i < 7; $i++) {
      $speakersTemp = [];
      for ($j = 0; $j < 4; $j++) {
        $speakersOnEvent [] = [
            "event_id" => $i + 1,
            "speaker_id" => $speakersTemp[] = rand(1, 8)
        ];
      }


      $program = array();
      for ($j = 0; $j < 6; $j++) {

        $speakers = array();

        for ($k=0 ; $k<rand(1,3); $k++){
          $speakers [] = array(
              "key" => uniqid(),
              "layout" => "speaker",
              "attributes" => array(
                  "key" => uniqid(),
                  "title" => "$faker->sentence",
                  "address" => "$faker->address",
                  "speaker" => $speakersTemp[rand(0,3)],
                  "event_end" => "12:00:00",
                  "description" => "<p>$faker->paragraph</p>",
                  "event_start" => "12:00:00"
              )
          );
        }

        $days = array(
            "speaker" => $speakers,
            "event_begin" => Carbon::now()->addDays($j+2),
        );

        $program[] = array(
            "key" => uniqid(),
            "layout" => "day",
            "attributes" => $days
        );
      }


      $data [] = [
          "name" => $faker->sentence(3),
          "description" => $faker->paragraphs(3, true),
          "address" => $faker->address,
          "date" => $faker->dateTimeBetween("+2 days", "+ 2 months"),
          "active" => rand(1, 3) == 3 ? true : false,
          "program" => json_encode($program)
      ];

    }

    DB::table('events')->insert($data);
    DB::table('event_speaker')->insert($speakersOnEvent);
  }

}
