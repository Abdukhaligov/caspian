<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Report;
use Faker\Generator as Faker;

$factory->define(Report::class, function (Faker $faker) {

    $status = rand(0,2);
    switch ($status){
        case(0):$status = 'pending'; break;
        case(1):$status = 'canceled'; break;
        case(2):$status = 'accepted'; break;
    }

    return [
        'name' => $faker->sentence(8),
        'user_id' => rand(4,12),
        'topic_id' => rand(1,20),
        'description' => $faker->text(1000),
        'status' => $status,
        'file' => null
    ];
});
