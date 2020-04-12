<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class TopicSeeder extends Seeder {

  public function run(Faker $faker) {
    $topics = [
        ["name" => "Культурно-историческое наследие: история и современность", "description" => $faker->paragraph(15),],
        ["name" => "Интеграционные процессы и право", "description" => $faker->paragraph(15),],
        ["name" => "Экономическая безопасность", "description" => $faker->paragraph(15),],
        ["name" => "Агропромышленный комплекс", "description" => $faker->paragraph(15),],
        ["name" => "Эколого-биологические вопросы использования природных ресурсов", "description" => $faker->paragraph(15),],
        ["name" => "Современная медицина: новые подходы и актуальные исследования", "description" => $faker->paragraph(15),],
        ["name" => "Вопросы технических и физико-математических наук в свете современных интеграционных процессов", "description" => $faker->paragraph(15),],
        ["name" => "Наука и образование", "description" => $faker->paragraph(15),],
    ];

    DB::table('topics')->insert($topics);
  }

}
