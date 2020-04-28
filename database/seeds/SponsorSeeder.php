<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class SponsorSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [
        array('name' => $faker->name, 'description' => $faker->paragraph(25), 'photo' => 'sponsors/sponsor1.jpg', 'job_title' => $faker->jobTitle),
        array('name' => $faker->name, 'description' => $faker->paragraph(25), 'photo' => 'sponsors/sponsor2.jpg', 'job_title' => $faker->jobTitle),
    ];

    DB::table('sponsors')->insert($data);
  }
}
