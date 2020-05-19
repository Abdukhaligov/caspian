<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class SpeakerSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [
      array('user_id' => 17, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker1.jpg'),
      array('user_id' => 18, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker2.jpg'),
      array('user_id' => 19, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker3.jpg'),
      array('user_id' => 20, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker4.jpg'),
      array('user_id' => 21, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker5.jpg'),
      array('user_id' => 22, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker6.jpg'),
      array('user_id' => 23, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker7.jpg'),
      array('user_id' => 24, 'description' => $faker->paragraph(25), 'photo' => 'speakers/speaker2.jpg')
    ];

      DB::table('speakers')->insert($data);
  }

}
