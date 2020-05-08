<?php

use Illuminate\Database\Seeder;

class MembershipSeeder extends Seeder {

  public function run() {
    $memberships = [
        ["name" => "{\"en\":\"Reporter\",\"ru\":\"докладчик\"}"],
    ];

    DB::table('memberships')->insert($memberships);

    $memberships = [
        ["name" => "{\"en\":\"Speaker\",\"ru\":\"устное выступление\"}", "parent_id" => 1],
        ["name" => "{\"en\":\"Poster\",\"ru\":\"постерное выступление\"}", "parent_id" => 1],

        ["name" => "{\"en\":\"Listener\",\"ru\":\"слушатель\"}", "parent_id" => null],
        ["name" => "{\"en\":\"Media\",\"ru\":\"пресса\"}", "parent_id" => null],
        ["name" => "{\"en\":\"Accompanying\",\"ru\":\"пресса\"}", "parent_id" => null],
        ["name" => "{\"en\":\"Guest\",\"ru\":\"гость\"}", "parent_id" => null],
    ];

    DB::table('memberships')->insert($memberships);
  }

}
