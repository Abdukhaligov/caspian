<?php

use Illuminate\Database\Seeder;

class SingleContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ["name" => "{\"en\":\"Our contacts\",\"ru\":\"\u041d\u0430\u0448\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b\"}"]
        ];

        DB::table('single_contacts')->insert($data);
    }
}
