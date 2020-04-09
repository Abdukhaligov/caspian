<?php

use Illuminate\Database\Seeder;

class SingleContactSeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $data = [[
        "name" => "{\"en\":\"Our contacts\",\"ru\":\"\u041d\u0430\u0448\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b\"}",
        "phone" => '+994 55 122 22 22',
        "email" => 'hikmat.pou@gmail.com','address' => '12/A, Baku, Azerbaijan',
        "social_networks" => "[
          {\"layout\":\"Data\",\"key\":\"293bb08cb0bed4ed\",\"attributes\":{\"title\":\"Github\",\"link\":\"https:\\/\\/github.com\\/Abdukhaligov\"}},
          {\"layout\":\"Data\",\"key\":\"1ea8bb64eeed3faf\",\"attributes\":{\"title\":\"Facebook\",\"link\":\"https:\\/\\/www.facebook.com\\/PAUL.Azerbaijan\\/\"}}]",
        "video_url" => "l7TxwBhtTUY",
        "video_cover" => "videos/contact-thumb.jpg",
    ]];

    DB::table('single_contacts')->insert($data);
  }
}