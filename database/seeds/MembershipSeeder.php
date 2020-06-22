<?php

use Illuminate\Database\Seeder;

class MembershipSeeder extends Seeder {

  public function run() {

    $memberships = [
        ["name" => "Speaker", "reporter" => true],
        ["name" => "Poster", "reporter" => true],
        ["name" => "Listener", "reporter" => false],
        ["name" => "Media", "reporter" => false],
        ["name" => "Accompanying", "reporter" => false],
        ["name" => "Guest", "reporter" => false],
    ];

    DB::table('memberships')->insert($memberships);
  }

}
