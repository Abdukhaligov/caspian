<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Topic;
use Faker\Generator as Faker;

$factory->define(Topic::class, function (Faker $faker) {
  return [
      'name' => $faker->sentence(6),
//      'description' => $faker->paragraph(15),
      'parent_id' => rand(2, 6),
  ];
});
