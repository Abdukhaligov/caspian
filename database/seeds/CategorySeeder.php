<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        \App\Models\Category::create(array("name" => "ЭТНОС", "description" => $faker->paragraph(3)));
        \App\Models\Category::create(array("name" => "ЭКОНОМИКА", "description" => $faker->paragraph(3)));
        \App\Models\Category::create(array("name" => "ЭНЕРГЕТИКА", "description" => $faker->paragraph(3)));
        \App\Models\Category::create(array("name" => "ЭКОЛОГИЯ", "description" => $faker->paragraph(3)));
    }
}
