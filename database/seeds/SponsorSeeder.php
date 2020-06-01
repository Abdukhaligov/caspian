<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class SponsorSeeder extends Seeder {

  public function run(Faker $faker) {
    $degree = rand(0,4);

    $sponsors = array(
        array(
            'name' => $faker->name,
            'description' => $faker->paragraph(25),
            'job_title' => $faker->jobTitle,
            'company' => $faker->company,
            'degree_id' => $degree !=0 ? $degree : NULL,
            'social_networks' => '[{"key": "7df658e9cc631a7d", "layout": "data", "attributes": {"link": "https://www.google.com/", "network": "fa-youtube"}}, {"key": "7979e2f2117581d2", "layout": "data", "attributes": {"link": "https://www.google.com/", "network": "fa-linkedin-in"}}, {"key": "62cdf84c4c1a0772", "layout": "data", "attributes": {"link": "https://www.google.com/", "network": "fa-behance"}}]'),
        array(
            'name' => $faker->name,
            'description' => $faker->paragraph(25),
            'job_title' => $faker->jobTitle,
            'company' => $faker->company,
            'degree_id' => $degree !=0 ? $degree : NULL,
            'social_networks' => '[{"key": "093a2e06bcc48e49", "layout": "data", "attributes": {"link": "https://www.google.com/", "network": "fa-facebook-f"}}, {"key": "7758214f01cdb896", "layout": "data", "attributes": {"link": "https://www.google.com/", "network": "fa-twitter"}}, {"key": "3e71bcc493e2da97", "layout": "data", "attributes": {"link": "https://www.google.com/", "network": "fa-behance"}}]')
    );


    DB::table('sponsors')->insert($sponsors);
  }
}
