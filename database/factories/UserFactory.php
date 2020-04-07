<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(User::class, function (Faker $faker) {

  $number = rand(0, 4);
  switch ($number){
    case(0): $number = '55';break;
    case(1): $number = '50';break;
    case(2): $number = '51';break;
    case(3): $number = '70';break;
    case(4): $number = '77';break;
  }

  $number = '994' . $number . rand(221, 795) . rand(21, 98) . rand(10, 85);

  return [
      'name' => $faker->name,
      'email' => $faker->unique()->safeEmail,
      'email_verified_at' => now(),
      'phone' => $number,
      'company' => $faker->company,
      'job_title' => $faker->jobTitle,
      'reference_id' => rand(1, 6),
      'membership_id' => rand(1, 6),
      'password' => bcrypt(123123), // password
      'remember_token' => Str::random(10),
  ];
});
