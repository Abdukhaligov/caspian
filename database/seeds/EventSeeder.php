<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class EventSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [];

    for ($i = 0; $i < 7; $i++) {
      $speakersTemp = [];
      for ($j = 0; $j < 4; $j++) {

        $speakersOnEvent [] = [
            "event_id" => $i + 1,
            "user_id" => $speakersTemp[] = rand(3, 32),
            "membership_id" => rand(1, 6),
            "status" => rand(1,3),
        ];
      }


      $days = array();
      for ($j = 0; $j < 8; $j++) {

        $speakers = array();

        for ($k = 0; $k < rand(1, 3); $k++) {
          $speakers [] = array(
              "key" => uniqid(),
              "layout" => "speaker",
              "attributes" => array(
                  "key" => uniqid(),
                  "title" => "$faker->sentence",
                  "address" => "$faker->address",
                  "user" => $speakersTemp[rand(0, 3)],
                  "event_end" => "12:00:00",
                  "description" => "<p>$faker->paragraph</p>",
                  "event_start" => "12:00:00"
              )
          );
        }

        $day = array(
            "event_begin" => Carbon::now()->addDays($j + 2),
            "events" => $speakers,
        );

        $days[] = array(
            "key" => uniqid(),
            "layout" => "day",
            "attributes" => $day
        );
      }


      $data [] = [
          "name" => $faker->sentence(3),
          "description" => $faker->paragraphs(3, true),
          "address" => $faker->address,
          "date" => $faker->dateTimeBetween("+2 days", "+ 2 months"),
          "active" => $i == 3,
          "days" => json_encode($days)
      ];

    }

    DB::table('events')->insert($data);
    DB::table('event_user')->insert($speakersOnEvent);
  }

}
