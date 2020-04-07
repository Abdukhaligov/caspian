<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Event;
use Faker\Generator as Faker;


$factory->define(Event::class, function (Faker $faker) {
  return [
      'name' => $faker->sentence(12),
      'logo' => 'events/' . rand(1, 4) . ".jpg",
      'description' => $faker->paragraphs(3, true),
      'date' => $faker->dateTimeBetween('+2 days', '+ 2 months'),
      'active' => rand(1, 3) == 3
          ? true
          : false
  ];
});
