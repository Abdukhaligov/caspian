<?php

use Illuminate\Database\Seeder;

class DegreeSeeder extends Seeder {
  public function run() {

    $data= array();
    $data[] = ["Name" => "PhD"];
    $data[] = ["Name" => "Doctor"];
    $data[] = ["Name" => "Corresponding member"];
    $data[] = ["Name" => "Academician"];

    DB::table('degrees')->insert($data);
  }
}

