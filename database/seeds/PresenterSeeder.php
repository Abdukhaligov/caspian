<?php

use Illuminate\Database\Seeder;

class PresenterSeeder extends Seeder {

  public function run() {
    $data = [
      array('id' => '1', 'name' => 'Jhon Soumen', 'photo' => 'presenters/speaker1.jpg', 'job_title' => 'Ceo of LogicHunt', 'social_networks' => '[]', 'created_at' => '2020-04-10 20:47:13', 'updated_at' => '2020-04-10 21:03:59'),
      array('id' => '2', 'name' => 'Sujana Jhon', 'photo' => 'presenters/speaker2.jpg', 'job_title' => 'Ceo of LogicHunt', 'social_networks' => '[]', 'created_at' => '2020-04-10 20:47:30', 'updated_at' => '2020-04-10 21:04:12'),
      array('id' => '3', 'name' => 'Devil Sagar', 'photo' => 'presenters/speaker3.jpg', 'job_title' => 'Ceo of LogicHunt', 'social_networks' => '[]', 'created_at' => '2020-04-10 20:47:45', 'updated_at' => '2020-04-10 21:04:29'),
      array('id' => '4', 'name' => 'Alina Pavel', 'photo' => 'presenters/speaker4.jpg', 'job_title' => 'Ceo of LogicHunt', 'social_networks' => '[]', 'created_at' => '2020-04-10 20:48:00', 'updated_at' => '2020-04-10 21:04:40'),
      array('id' => '5', 'name' => 'Jhon Soumen', 'photo' => 'presenters/speaker5.jpg', 'job_title' => 'Ceo of LogicHunt', 'social_networks' => '[]', 'created_at' => '2020-04-10 20:48:13', 'updated_at' => '2020-04-10 21:04:51'),
      array('id' => '6', 'name' => 'Sujana Jhon', 'photo' => 'presenters/speaker6.jpg', 'job_title' => 'Ceo of LogicHunt', 'social_networks' => '[]', 'created_at' => '2020-04-10 20:48:26', 'updated_at' => '2020-04-10 21:05:01'),
      array('id' => '7', 'name' => 'Devil Sagar', 'photo' => 'presenters/speaker7.jpg', 'job_title' => 'Ceo of LogicHunt', 'social_networks' => '[{"key": "88298a85ed188d0e", "layout": "Data", "attributes": {"link": "https://google.com", "network": "fa-facebook      "}}, {"key": "6c41d7a4a8ec7b75", "layout": "Data", "attributes": {"link": "https://google.com", "network": "fa-twitter"}}, {"key": "1b16d953c444edf2", "layout": "Data", "attributes": {"link": "https://google.com", "network": "fa-instagram"}}, {"key": "2537150ee751edab", "layout": "Data", "attributes": {"link": "https://google.com", "network": "fa-linkedin"}}]', 'created_at' => '2020-04-10 20:48:47', 'updated_at' => '2020-04-10 21:05:14'),
      array('id' => '8', 'name' => 'Sujana Jhon', 'photo' => 'presenters/speaker7.jpg', 'job_title' => 'Ceo of LogicHunt', 'social_networks' => '[{"key": "cb352ad88d83a1b5", "layout": "Data", "attributes": {"link": "https://google.com", "network": "fa-facebook      "}}, {"key": "2666329b0b59e32d", "layout": "Data", "attributes": {"link": "https://google.com", "network": "fa-twitter"}}, {"key": "c35817e46ba0aa74", "layout": "Data", "attributes": {"link": "https://google.com", "network": "fa-instagram"}}]', 'created_at' => '2020-04-10 20:48:58', 'updated_at' => '2020-04-10 21:05:27')
    ];

      DB::table('presenters')->insert($data);
  }

}
