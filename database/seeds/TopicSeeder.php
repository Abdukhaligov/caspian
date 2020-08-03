<?php

use App\Models\Topic;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class TopicSeeder extends Seeder {

  public function run(Faker $faker) {
      /*1*/Topic::create(array("name" => "Культурно-историческое наследие Каспийского региона: исторсовременностьия и", "category_id" => "1", "description" => $faker->paragraph(15)));
      /*2*/Topic::create(array("name" => "Современная медицина в странах Каспийского региона:новые подходы и актуальные исследования", "category_id" => "1", "description" => $faker->paragraph(15)));
      /*3*/Topic::create(array("name" => "Агропромышленный комплекс стран Каспийского региона", "category_id" => "2", "description" => $faker->paragraph(15)));
      /*4*/Topic::create(array("name" => "Экономическая безопасность стран Каспийского региона", "category_id" => "2", "description" => $faker->paragraph(15)));
      /*5*/Topic::create(array("name" => "Глобальная энергетика – новые альянсы", "category_id" => "3", "description" => $faker->paragraph(15)));
      /*6*/Topic::create(array("name" => "Энергетическое пространство для устойчивого развития региона", "category_id" => "3", "description" => $faker->paragraph(15)));
      /*7*/Topic::create(array("name" => "Экология и природные ресурсы Каспийского региона", "category_id" => "4", "description" => $faker->paragraph(15)));
      /*8*/Topic::create(array("name" => "Экологические проблемы современности", "category_id" => "4", "description" => $faker->paragraph(15)));

      Topic::create(array("name" => "Языковое и литературное богатство Каспийского региона", "parent_id" =>"1", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Этническая картина прикаспийского региона", "parent_id" =>"1", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Археологические исследования на Каспии.", "parent_id" =>"1", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "История искусства", "parent_id" =>"1", "description" => $faker->paragraph(15)));

      Topic::create(array("name" => "Демографические процессы в регионе (охрана здоровья рождаемость)", "parent_id" =>"2", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Сотрудничество в сфере физической культуры и спорта", "parent_id" =>"2", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Инновации в медицине", "parent_id" =>"2", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Фармацевтика и биотехнологии (инфекционные и неинфекционные заболевания", "parent_id" =>"2", "description" => $faker->paragraph(15)));

      Topic::create(array("name" => "Продовольственная безопасность: перспективные направления", "parent_id" =>"3", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Цифровые и интеллектуальные системы землепользования", "parent_id" =>"3", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Биотехнологии и АПК", "parent_id" =>"3", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Химическая и биологическая защита сельскохозяйственных растений и животных", "parent_id" =>"3", "description" => $faker->paragraph(15)));

      Topic::create(array("name" => "Интеграционные процессы и право в Каспийском регионе", "parent_id" =>"4", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Торгово-экономическое и таможенное сотрудничество Прикаспийских государств", "parent_id" =>"4", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Санкции и антисанкции", "parent_id" =>"4", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Инновационная экономика", "parent_id" =>"4", "description" => $faker->paragraph(15)));

      Topic::create(array("name" => "Приоритеты, перспективы и возможности возобновляемых источников энергии", "parent_id" =>"5", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Классическая энергетика", "parent_id" =>"5", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Гидроэнергетика", "parent_id" =>"5", "description" => $faker->paragraph(15)));

      Topic::create(array("name" => "«Умные технологии» в нефтегазовой промышленности", "parent_id" =>"6", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Риск АТЕС", "parent_id" =>"6", "description" => $faker->paragraph(15)));

      Topic::create(array("name" => "Биоразнообразие и экосистемы", "parent_id" =>"7", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Устойчивое развитие", "parent_id" =>"7", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Углеводородная промышленность", "parent_id" =>"7", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Природоохранная деятельность", "parent_id" =>"7", "description" => $faker->paragraph(15)));

      Topic::create(array("name" => "Деградация почвы", "parent_id" =>"8", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Загрязнение гидросферы", "parent_id" =>"8", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Парниковый эффект", "parent_id" =>"8", "description" => $faker->paragraph(15)));
      Topic::create(array("name" => "Изменение климата", "parent_id" =>"8", "description" => $faker->paragraph(15)));
  }

}
