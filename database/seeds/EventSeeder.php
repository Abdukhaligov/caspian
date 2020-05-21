<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class EventSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [];

    for ($i = 0; $i < 7; $i++) {
      $usersTemp = [];
      for ($j = 0; $j < 4; $j++) {
        $usersOnEvent [] = [
            "event_id" => $i + 1,
            "user_id" => $usersTemp[] = rand(1, 24)
        ];
      }


      $program = array();
      for ($j = 0; $j < 6; $j++) {

        $users = array();

        for ($k=0 ; $k<rand(1,3); $k++){
          $users [] = array(
              "key" => uniqid(),
              "layout" => "user",
              "attributes" => array(
                  "key" => uniqid(),
                  "title" => "$faker->sentence",
                  "address" => "$faker->address",
                  "user" => $usersTemp[rand(0,3)],
                  "event_end" => "12:00:00",
                  "description" => "<p>$faker->paragraph</p>",
                  "event_start" => "12:00:00"
              )
          );
        }

        $days = array(
            "user" => $users,
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
          "active" => rand(1, 3) == 3,
          "program" => json_encode($program)
      ];

    }

    DB::table('events')->insert($data);
    DB::table('event_user')->insert($usersOnEvent);
  }

}
