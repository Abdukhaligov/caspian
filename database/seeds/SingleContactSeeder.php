<?php

use Illuminate\Database\Seeder;

class SingleContactSeeder extends Seeder {

  public function run() {
    $data = [[
        "title" => "{\"en\":\"Our contacts\",\"ru\":\"Наши контакты\"}",
        "phone" => '+994 55 122 22 22',
        "email" => 'hikmat.pou@gmail.com', 'address' => '12/A, Baku, Azerbaijan',
        "social_networks" => "[
          {\"layout\":\"Data\",\"key\":\"293bb08cb0bed4ed\",\"attributes\":{\"title\":\"Github\",\"link\":\"https:\\/\\/github.com\\/Abdukhaligov\"}},
          {\"layout\":\"Data\",\"key\":\"1ea8bb64eeed3faf\",\"attributes\":{\"title\":\"Facebook\",\"link\":\"https:\\/\\/www.facebook.com\\/PAUL.Azerbaijan\\/\"}}]",
        "video_url" => "l7TxwBhtTUY",
        "video_cover" => "videos/contact-thumb.jpg",
    ]];

    DB::table('single_contacts')->insert($data);
  }

}