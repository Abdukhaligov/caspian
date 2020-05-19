<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class EventSeeder extends Seeder {

  public function run(Faker $faker) {
    $data = [];

//    $this->checkMembership([2, 3])
//
//    private function checkMembership(array $ids = []) {
//      if (!count($ids)) return false;
//
//      return in_array($this->membership->id, $ids);
//    }

    for($i=0; $i<7; $i++){
      $speakersTemp = [];
      for($j=0;$j<4;$j++){
        $speakersOnEvent [] = [
            "event_id" => $i+1,
            "speaker_id" => $speakersTemp[] = rand(1,8)
        ];
      }

      $data [] = [
          "name" => $faker->sentence(3),
//          "description" => $faker->paragraphs(3, true),
          "description" => implode($speakersTemp),
          "address" => $faker->address,
          "date" => $faker->dateTimeBetween("+2 days", "+ 2 months"),
          "active" => rand(1, 3) == 3 ? true : false,
          "program" => "[
    {
        \"key\": \"dff8f05b0ceaae64\",
        \"layout\": \"Data\",
        \"attributes\": {
            \"speaker\": [
                {
                    \"key\": \"466abbc1719d1267\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"Business Management Techniques\",
                        \"address\": \"Waterfront Hotel, Canada\",
                        \"speaker\": \"$speakersTemp[0]\",
                        \"event_end\": \"11:00:00\",
                        \"description\": \"<p>This presentation will describe seven essential actions that could unleash the power of prevention and substantially reduce the prevalence of behavioral health problems and inequality in health and behavior outcomes in the U.S. population. substantially reduce the prevalence of behavio.</p>\",
                        \"event_start\": \"09:00:00\"
                    }
                },
                {
                    \"key\": \"fa6ddaf97dc5e5a3\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"How to Build a Successful Startui\",
                        \"address\": \"Waterfront Hotel, Canada\",
                        \"speaker\": \"$speakersTemp[1]\",
                        \"event_end\": \"13:00:00\",
                        \"description\": \"<p>We care for more than 200 thousand exhibits spanning billions of years and welcome more than five million way visitors annually. We care for more than 200 thousand exhibits spanning billions of years and welcome more than five million way visitors annually.We care for more than 200 thousand exhibits spanning.</p>\",
                        \"event_start\": \"11:00:00\"
                    }
                },
                {
                    \"key\": \"6737fadbe64a244e\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"Managing International Enterprises\",
                        \"address\": \"Waterfront Hotel, Canada\",
                        \"speaker\": \"$speakersTemp[2]\",
                        \"event_end\": \"15:00:00\",
                        \"description\": \"<p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production.</p>\",
                        \"event_start\": \"13:00:00\"
                    }
                }
            ],
            \"event_begin\": \"2020-05-19T05:00:00.000000Z\"
        }
    },
    {
        \"key\": \"bfc2445c3bea0062\",
        \"layout\": \"Data\",
        \"attributes\": {
            \"speaker\": [
                {
                    \"key\": \"dee4eff8ed804a57\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"Managing International Enterprises\",
                        \"address\": \" Waterfront Hotel, Canada\",
                        \"speaker\": \"$speakersTemp[3]\",
                        \"event_end\": \"11:00:00\",
                        \"description\": \"<p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production.</p>\",
                        \"event_start\": \"09:00:00\"
                    }
                },
                {
                    \"key\": \"f1ee8252b66f7a36\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"Managing Your Successful Grow\",
                        \"address\": \"Waterfront Hotel, Canada\",
                        \"speaker\": \"$speakersTemp[2]\",
                        \"event_end\": \"13:00:00\",
                        \"description\": \"<p>We care for more than 200 thousand exhibits spanning billions of years and welcome more than five million way visitors annually. We care for more than 200 thousand exhibits spanning billions of years and welcome more than five million way visitors annually.We care for more than 200 thousand exhibits spanning.</p>\",
                        \"event_start\": \"11:00:00\"
                    }
                },
                {
                    \"key\": \"115b918b7b895bf7\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"Build a Successful Startup\",
                        \"address\": \"\",
                        \"speaker\": \"$speakersTemp[0]\",
                        \"event_end\": \"15:00:00\",
                        \"description\": \"<p>This presentation will describe seven essential actions that could unleash the power of prevention and substantially reduce the prevalence of behavioral health problems and inequality in health and behavior outcomes in the U.S. population. substantially reduce the prevalence of behavio.</p>\",
                        \"event_start\": \"13:00:00\"
                    }
                }
            ],
            \"event_begin\": \"2020-05-20T05:00:00.000000Z\"
        }
    },
    {
        \"key\": \"dff8f05b0ceaae64\",
        \"layout\": \"Data\",
        \"attributes\": {
            \"speaker\": [
                {
                    \"key\": \"fa6ddaf97dc5e5a4\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"How to Build a Successful Startui\",
                        \"address\": \"Waterfront Hotel, Canada\",
                        \"speaker\": \"$speakersTemp[2]\",
                        \"event_end\": \"13:00:00\",
                        \"description\": \"<p>We care for more than 200 thousand exhibits spanning billions of years and welcome more than five million way visitors annually. We care for more than 200 thousand exhibits spanning billions of years and welcome more than five million way visitors annually.We care for more than 200 thousand exhibits spanning.</p>\",
                        \"event_start\": \"11:00:00\"
                    }
                },
                {
                    \"key\": \"6737fadbe64a242e\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"Managing International Enterprises\",
                        \"address\": \"Waterfront Hotel, Canada\",
                        \"speaker\": \"$speakersTemp[3]\",
                        \"event_end\": \"15:00:00\",
                        \"description\": \"<p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production.</p>\",
                        \"event_start\": \"13:00:00\"
                    }
                }
            ],
            \"event_begin\": \"2020-05-19T05:00:00.000000Z\"
        }
    },
    {
        \"key\": \"bfc2445c3bea0062\",
        \"layout\": \"Data\",
        \"attributes\": {
            \"speaker\": [
                {
                    \"key\": \"f1ee8252b66f7a32\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"Managing Your Successful Grow\",
                        \"address\": \"Waterfront Hotel, Canada\",
                        \"speaker\": \"$speakersTemp[1]\",
                        \"event_end\": \"13:00:00\",
                        \"description\": \"<p>We care for more than 200 thousand exhibits spanning billions of years and welcome more than five million way visitors annually. We care for more than 200 thousand exhibits spanning billions of years and welcome more than five million way visitors annually.We care for more than 200 thousand exhibits spanning.</p>\",
                        \"event_start\": \"11:00:00\"
                    }
                },
                {
                    \"key\": \"115b918b7b895bf6\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"Build a Successful Startup\",
                        \"address\": \"\",
                        \"speaker\": \"$speakersTemp[2]\",
                        \"event_end\": \"15:00:00\",
                        \"description\": \"<p>This presentation will describe seven essential actions that could unleash the power of prevention and substantially reduce the prevalence of behavioral health problems and inequality in health and behavior outcomes in the U.S. population. substantially reduce the prevalence of behavio.</p>\",
                        \"event_start\": \"13:00:00\"
                    }
                }
            ],
            \"event_begin\": \"2020-05-20T05:00:00.000000Z\"
        }
    },
    {
        \"key\": \"dff8f05b0ceaae64\",
        \"layout\": \"Data\",
        \"attributes\": {
            \"speaker\": [
                {
                    \"key\": \"6237fadbe64a342e\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"Managing International Enterprises\",
                        \"address\": \"Waterfront Hotel, Canada\",
                        \"speaker\": \"$speakersTemp[0]\",
                        \"event_end\": \"15:00:00\",
                        \"description\": \"<p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production.</p>\",
                        \"event_start\": \"13:00:00\"
                    }
                }
            ],
            \"event_begin\": \"2020-05-19T05:00:00.000000Z\"
        }
    },
    {
        \"key\": \"bfc2445c3bea0062\",
        \"layout\": \"Data\",
        \"attributes\": {
            \"speaker\": [
                {
                    \"key\": \"155b918b7b885bf6\",
                    \"layout\": \"Data\",
                    \"attributes\": {
                        \"title\": \"Build a Successful Startup\",
                        \"address\": \"\",
                        \"speaker\": \"$speakersTemp[3]\",
                        \"event_end\": \"15:00:00\",
                        \"description\": \"<p>This presentation will describe seven essential actions that could unleash the power of prevention and substantially reduce the prevalence of behavioral health problems and inequality in health and behavior outcomes in the U.S. population. substantially reduce the prevalence of behavio.</p>\",
                        \"event_start\": \"13:00:00\"
                    }
                }
            ],
            \"event_begin\": \"2020-05-20T05:00:00.000000Z\"
        }
    }
]"
      ];

    }

    DB::table('events')->insert($data);
    DB::table('event_speaker')->insert($speakersOnEvent);
  }

}
