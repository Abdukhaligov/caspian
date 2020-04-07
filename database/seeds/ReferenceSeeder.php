<?php

use Illuminate\Database\Seeder;

class ReferenceSeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $references = [
        ['name' => 'Email Newsletter'],
        ['name' => 'Partners / Acquaintances'],
        ['name' => 'Online advertising'],
        ['name' => 'Social network advertising'],
        ['name' => 'Advertising mail'],
        ['name' => 'Another']

    ];

    DB::table('references')->insert($references);
  }
}
