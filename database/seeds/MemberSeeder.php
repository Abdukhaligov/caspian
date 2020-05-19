<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class MemberSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [
        array('user_id' => 2, 'rank' => 1, 'description' => $faker->paragraph(25), 'photo' => 'members/member1.jpg'),
        array('user_id' => 3, 'rank' => 1, 'description' => $faker->paragraph(25), 'photo' => 'members/member2.jpg'),
        array('user_id' => 4, 'rank' => 2, 'description' => $faker->paragraph(25), 'photo' => 'members/member3.jpg'),
        array('user_id' => 5, 'rank' => 2, 'description' => $faker->paragraph(25), 'photo' => 'members/member4.jpg'),
        array('user_id' => 6, 'rank' => 2, 'description' => $faker->paragraph(25), 'photo' => 'members/member5.jpg'),
        array('user_id' => 7, 'rank' => 2, 'description' => $faker->paragraph(25), 'photo' => 'members/member6.jpg'),
        array('user_id' => 8, 'rank' => 3, 'description' => $faker->paragraph(25), 'photo' => ''),
        array('user_id' => 9, 'rank' => 3, 'description' => $faker->paragraph(25), 'photo' => ''),
        array('user_id' => 10, 'rank' => 3, 'description' => $faker->paragraph(25), 'photo' => ''),
        array('user_id' => 11, 'rank' => 3, 'description' => $faker->paragraph(25), 'photo' => ''),
        array('user_id' => 12, 'rank' => 3, 'description' => $faker->paragraph(25), 'photo' => ''),
        array('user_id' => 13, 'rank' => 3, 'description' => $faker->paragraph(25), 'photo' => ''),
        array('user_id' => 14, 'rank' => 3, 'description' => $faker->paragraph(25), 'photo' => ''),
        array('user_id' => 15, 'rank' => 3, 'description' => $faker->paragraph(25), 'photo' => ''),
        array('user_id' => 16, 'rank' => 3, 'description' => $faker->paragraph(25), 'photo' => ''),
    ];

    DB::table('members')->insert($data);
  }
}
