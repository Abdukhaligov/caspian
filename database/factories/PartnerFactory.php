<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Partner;
use Faker\Generator as Faker;

$factory->define(Partner::class, function (Faker $faker) {

    static $IMG = 1;

    return [
        'name' => $faker->company,
        'img' => $IMG++.".jpeg",
        'url' => "https://google.com"
    ];
});
