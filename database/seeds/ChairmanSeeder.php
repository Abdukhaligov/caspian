<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class ChairmanSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [
      array('name' => $faker->name, 'rank'=> 1,'description' => $faker->paragraph(25), 'photo' => 'chairmen/chairman1.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 1, 'description' => $faker->paragraph(25), 'photo' => 'chairmen/chairman2.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 2, 'description' => $faker->paragraph(25), 'photo' => 'chairmen/chairman3.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 2, 'description' => $faker->paragraph(25), 'photo' => 'chairmen/chairman4.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 2, 'description' => $faker->paragraph(25), 'photo' => 'chairmen/chairman5.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 2, 'description' => $faker->paragraph(25), 'photo' => 'chairmen/chairman6.jpg', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 3, 'description' => $faker->paragraph(25), 'photo' => '', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 3, 'description' => $faker->paragraph(25), 'photo' => '', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 3, 'description' => $faker->paragraph(25), 'photo' => '', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 3, 'description' => $faker->paragraph(25), 'photo' => '', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 3, 'description' => $faker->paragraph(25), 'photo' => '', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 3, 'description' => $faker->paragraph(25), 'photo' => '', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 3, 'description' => $faker->paragraph(25), 'photo' => '', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 3, 'description' => $faker->paragraph(25), 'photo' => '', 'job_title' => $faker->jobTitle),
      array('name' => $faker->name, 'rank'=> 3, 'description' => $faker->paragraph(25), 'photo' => '', 'job_title' => $faker->jobTitle),
    ];

      DB::table('chairmen')->insert($data);
  }

}
