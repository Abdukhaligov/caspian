<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {

    $member = rand(1,6);

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'phone' => (new User())->generateNumber(),
        'company' => $faker->company,
        'job_title' => $faker->jobTitle,
        'reference_id' => rand(1,6),
        'membership_id' => $member,
        'password' => bcrypt(123123), // password
        'remember_token' => Str::random(10),
    ];
});
