<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class SpeakerSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [
      array('name' => $faker->name, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker1.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker2.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker3.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker4.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker5.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker6.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker7.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker2.jpg', 'job_title' => $faker->jobTitle)
    ];

      DB::table('speakers')->insert($data);
  }

}
