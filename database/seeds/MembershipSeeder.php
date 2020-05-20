<?php

use Illuminate\Database\Seeder;

class MembershipSeeder extends Seeder {

  public function run() {

    $memberships = [
        ["name" => "{\"en\":\"Speaker\",\"ru\":\"устное выступление\"}", "reporter" => true],
        ["name" => "{\"en\":\"Poster\",\"ru\":\"постерное выступление\"}", "reporter" => true],
        ["name" => "{\"en\":\"Listener\",\"ru\":\"слушатель\"}", "reporter" => false],
        ["name" => "{\"en\":\"Media\",\"ru\":\"пресса\"}", "reporter" => false],
        ["name" => "{\"en\":\"Accompanying\",\"ru\":\"пресса\"}", "reporter" => false],
        ["name" => "{\"en\":\"Guest\",\"ru\":\"гость\"}", "reporter" => false],
    ];

    DB::table('memberships')->insert($memberships);
  }

}
