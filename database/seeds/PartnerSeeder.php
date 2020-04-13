<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class PartnerSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [];
    for ($i = 1; $i <= 17; $i++) {
      $data[] = [
          "name" => $faker->company,
          "img" => "partners/partner-".$i.".png",
          "url" => "https://google.com"
      ];
    }

    DB::table('partners')->insert($data);
  }

}
