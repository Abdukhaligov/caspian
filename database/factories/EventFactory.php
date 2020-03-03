<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Event;
use Faker\Generator as Faker;

$factory->define(Event::class, function (Faker $faker) {
    static $IMG = 1;

    return [
        'name' => $faker->sentence(12),
        'logo' => $IMG++.".jpeg",
        'description' => $faker->paragraphs(3, true),
        'date' => $faker->dateTimeBetween('+2 days', '+ 2 months'),
    ];
});
