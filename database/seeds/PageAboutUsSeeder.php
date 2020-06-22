<?php

use Illuminate\Database\Seeder;

class PageAboutUsSeeder extends Seeder {

  public function run() {
    $data = [
        array(
            'id' => '1', 'title' => 'About us',
            'body' => '<h1>Welcome to the World Digital Conference</h1>\\n<p style=\\"text-align: justify;\\">welcome to eventmat, start with a greeting to your audience that\'s appropriate to the situation. Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.welcome to eventmat, start with a greeting to your audience that\'s appropriate to the situation. Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.welcome to eventmat, start with a greeting to your audience that\'s appropriate to the situation. Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.</p>\\n<p style=\\"text-align: justify;\\">incd idunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.welcome to eventmat, start with a greeting to your audience that\'s appropriate to the situation. Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.welcome to eventmat, start with a greeting to your audience that\'s appropriate to the situation. Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.</p>',
        )
    ];

    DB::table('page_about_us')->insert($data);
  }

}
