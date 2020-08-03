<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Category::create(array("name" => "ЭТНОС"));
        \App\Models\Category::create(array("name" => "ЭКОНОМИКА"));
        \App\Models\Category::create(array("name" => "ЭНЕРГЕТИКА"));
        \App\Models\Category::create(array("name" => "ЭКОЛОГИЯ"));
    }
}
