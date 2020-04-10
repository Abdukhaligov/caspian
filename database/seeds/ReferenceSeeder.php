<?php

use Illuminate\Database\Seeder;

class ReferenceSeeder extends Seeder {

  public function run() {
    $references = [
        ["name" => "{\"en\":\"Email Newsletter\",\"ru\":\"e-mail рассылка\"}"],
        ["name" => "{\"en\":\"Partners / Acquaintances\",\"ru\":\"партнеры / знакомые\"}"],
        ["name" => "{\"en\":\"Online advertising\",\"ru\":\"реклама в интернете\"}"],
        ["name" => "{\"en\":\"Social network advertising\",\"ru\":\"реклама в соц.сетях\"}"],
        ["name" => "{\"en\":\"Advertising mail\",\"ru\":\"реклама в почтовых изданиях\"}"],
        ["name" => "{\"en\":\"Another\",\"ru\":\"другое\"}"]
    ];

    DB::table('references')->insert($references);
  }

}
