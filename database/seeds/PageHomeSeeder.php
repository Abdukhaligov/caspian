<?php

use Illuminate\Database\Seeder;

class PageHomeSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => json_encode(["en" => "Home", "ru" => "Главная"]),
        "description" => "<h1>Welcome to the World Digital Conference</h1><p>welcome to eventmat, start with a greeting to your audience that's appropriate to the situation. Dolor<br />sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim<br />veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.</p>",
        "description_img" => "main/blog-3.jpg"
    ]];

    DB::table('page_home')->insert($data);
  }

}
