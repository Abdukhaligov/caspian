<?php

use Illuminate\Database\Seeder;

class SingleHomeSeeder extends Seeder {

  public function run() {

    $banners = [
        [
            "key" => "815963c423a05bed",
            "layout" => "banners",
            "attributes" => [
                "img" => "banners/banner-bg-1.1.jpg",
                "title" => "Best IT Soluations <br>Provider Agency",
                "category" => "IT Business Consulting",
                "subtitle" => "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis",
                "btn_title" => "Google <i class=\"fal fa-long-arrow-right\"></i>",
                "btn_link" => "https://google.com",
            ]
        ],
        [
            "key" => "78731e9e2e534626",
            "layout" => "banners",
            "attributes" => [
                "img" => "banners/banner-bg-1.2.jpg",
                "title" => "Best IT Soluations <br>Provider Agency",
                "category" => "IT Business Consulting",
                "subtitle" => "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis",
                "btn_title" => "Google <i class=\"fal fa-long-arrow-right\"></i>",
                "btn_link" => "https://google.com",
            ]
        ],
        [
            "key" => "9872053206c8274a",
            "layout" => "banners",
            "attributes" => [
                "img" => "banners/banner-bg-1.3.jpg",
                "title" => "Best IT Soluations <br>Provider Agenc",
                "category" => "IT Business Consulting",
                "subtitle" => "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis",
                "btn_title" => "Google <i class=\"fal fa-long-arrow-right\"></i>",
                "btn_link" => "https://google.com",
            ]
        ]
    ];

    $data = [[
        "title" => json_encode(["en" => "Home","ru" => "Главная"]),
        "banners" => json_encode($banners)
    ]];

    DB::table('single_homes')->insert($data);
  }

}
