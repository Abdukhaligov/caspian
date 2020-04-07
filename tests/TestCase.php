<?php

namespace Tests;

use Illuminate\Foundation\Testing\WithFaker as Faker;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase {
  use CreatesApplication, Faker;

  protected function tempReport($attributes = null, $factory = false, $count = null) {
    if ($factory) {
      return factory('App\Models\Report', $count)->create([
          'user_id' => $attributes["user_id"] ?? auth()->id(),
          'topic_id' => rand(1, 5),
          'status' => $attributes["status"] ?? "pending",
          'file' => $attributes["file"] ?? null
      ]);
    }

    return [
        "name" => $this->faker->sentence,
        "description" => $this->faker->paragraph,
        "topic_id" => rand(1, 5),
        "status" => $attributes["status"] ?? "pending"
    ];
  }

  protected function tempUser($membership = null) {
    return
        factory('App\User')->create([
            'membership_id' => $membership ?? rand(5, 6),
            'reference_id' => null
        ]);
  }

  protected function tempSeeder($array) {
    foreach ($array as $seeder) {
      $this->artisan('db:seed', ['--class' => $seeder]);
    }
  }
}
