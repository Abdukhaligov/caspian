<?php

use Illuminate\Database\Seeder;

class SingleTopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $data = [
          ["name" => "{\"en\":\"Topics\",\"ru\":\"Темы\"}"]
      ];

      DB::table('single_topics')->insert($data);
    }
}
