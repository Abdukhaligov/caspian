<?php

use Illuminate\Database\Seeder;

class PageInitialSeeder extends Seeder {

  public function run() {
    $data = [[
        "phone" => "+994 70 226 26 26",
        "email" => "test@mail.ru",
        "copyright" => "Copyright test@mail.ru Caspian - 2020",
        "social_networks" => "[
            {\"key\": \"126a213bb01780d4\",
                \"layout\": \"Data\",
                \"attributes\": {\"link\": \"https://google.com\", \"network\": \"facebook\"}},
            {\"key\": \"40f651074a4fc54f\",
                \"layout\": \"Data\",
                \"attributes\": {\"link\": \"https://google.com\", \"network\": \"twitter\"}},
            {\"key\": \"fe73e175f79c781e\",
                \"layout\": \"Data\",
                \"attributes\": {\"link\": \"https://google.com\", \"network\": \"linkedin\"}},
            {\"key\": \"e9f4bdc8c5bc27a2\",
                \"layout\": \"Data\",
                \"attributes\": {\"link\": \"https://google.com\", \"network\": \"youtube\"}}
        ]",
        "max_report_count" => 3
    ]];


    DB::table('page_initial')->insert($data);
  }

}
