<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class NewsSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [];
    for ($i = 0; $i < 55; $i++) {
      $data [] = [
          "title" => "{\"en\":\"".$faker->sentence."\",\"ru\":\"".$faker->sentence."\"}",
          "body" => "{\"en\":\"".$faker->paragraph(45)."\",\"ru\":\"".$faker->paragraph(45)."\"}",
          "created_at" => $faker->dateTimeBetween("-50 days", "now")
      ];
    }

    DB::table('news')->insert($data);
  }

}