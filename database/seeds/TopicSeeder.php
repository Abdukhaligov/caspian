<?php

use Illuminate\Database\Seeder;

class TopicSeeder extends Seeder {

  public function run() {
    $topics = [
        ['name' => 'Культурно-историческое наследие: история и современность'],
        ['name' => 'Интеграционные процессы и право'],
        ['name' => 'Экономическая безопасность'],
        ['name' => 'Агропромышленный комплекс'],
        ['name' => 'Эколого-биологические вопросы использования природных ресурсов'],
        ['name' => 'Современная медицина: новые подходы и актуальные исследования'],
        ['name' => 'Вопросы технических и физико-математических наук в свете современных интеграционных процессов'],
        ['name' => 'Наука и образование'],

    ];

    DB::table('topics')->insert($topics);

  }

}
