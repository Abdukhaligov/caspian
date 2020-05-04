<?php

use Illuminate\Database\Seeder;

class MembershipSeeder extends Seeder {

  public function run() {
    $memberships = [
        ["name" => "{\"en\":\"Guest\",\"ru\":\"гость\"}"],
        ["name" => "{\"en\":\"Listener\",\"ru\":\"слушатель\"}"],
        ["name" => "{\"en\":\"Reporter\",\"ru\":\"докладчик\"}"],
        ["name" => "{\"en\":\"Press\",\"ru\":\"пресса\"}"],
    ];

    DB::table('memberships')->insert($memberships);

    $memberships = [
        ["name" => "{\"en\":\"Speaker\",\"ru\":\"устное выступление\"}", "parent_id" => 3],
        ["name" => "{\"en\":\"Poster\",\"ru\":\"постерное выступление\"}", "parent_id" => 3],
        ["name" => "{\"en\":\"Accompanying\",\"ru\":\"пресса\"}", "parent_id" => null],
        ["name" => "{\"en\":\"Media\",\"ru\":\"пресса\"}", "parent_id" => null],
    ];

    DB::table('memberships')->insert($memberships);
  }

}
