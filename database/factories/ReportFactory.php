<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Report;
use Faker\Generator as Faker;

$factory->define(Report::class, function (Faker $faker) {

  return [
      'name' => $faker->sentence(8),
      'user_id' => rand(1, 12),
      'event_id' => rand(1, 7),
      'topic_id' => rand(1, 20),
      'description' => $faker->text(1000),
      'status' => rand(1, 3),
      'file' => null
  ];
});
