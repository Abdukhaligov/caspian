<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {

  public function run() {
    $this->call(ReferenceSeeder::class);
    $this->call(MembershipSeeder::class);
    $this->call(RegionSeeder::class);
    $this->call(DegreeSeeder::class);
    $this->call(TopicSeeder::class);
    factory(\App\Models\Topic::class, 12)->create();

    $this->call(UserSeeder::class);
    factory(\App\User::class, 2)->create(["rank" => '1', 'show_on_site' => true]);
    factory(\App\User::class, 4)->create(["rank" => '2', 'show_on_site' => true]);
    factory(\App\User::class, 12)->create(["rank" => '3', 'show_on_site' => true]);
    factory(\App\User::class, 10)->create();

    factory(\App\User::class)->create(array('reference_id' => '2','membership_id' => '2','name' => 'Ayten Huseynova','email' => 'khasayeva.ayten@gmail.com','is_admin' => '1','phone' => '994503501425','company' => 'Azerbaijan National Academy of Sciences','job_title' => 'Deputy of head devision','email_verified_at' => NULL,'password' => '$2y$10$P7.n4SW01BVz6ry8Dhf8De359bdmexyRLkFuTFB0zfux6tGGOmObO','remember_token' => NULL,'created_at' => '2020-05-19 19:01:42','updated_at' => '2020-05-19 19:01:42'),);
    factory(\App\User::class)->create(array('reference_id' => '2','membership_id' => '2','name' => 'Aysel Danilova','email' => 'aysel.d@bestcomp.net','is_admin' => '1','phone' => '994125414747','company' => 'Bestcomp Group','job_title' => 'Project Manager','email_verified_at' => NULL,'password' => '$2y$10$egDJlmLW0YgYNGKhZ6.mAueSlpJoRQmPa7jyuGhz.RRD5Oalc1CXG','remember_token' => NULL,'created_at' => '2020-05-19 19:02:19','updated_at' => '2020-05-19 19:02:19'));



    factory(\App\Models\Report::class, 12)->create();
    $this->call(EventSeeder::class);
    $this->call(PartnerSeeder::class);
    $this->call(SponsorSeeder::class);
    $this->call(NewsSeeder::class);
    $this->call(MediaSeeder::class);

    /*  SINGLE PAGES */
    $this->call(PageHomeSeeder::class);
    $this->call(PageAboutUsSeeder::class);
    $this->call(PageContactsSeeder::class);
    $this->call(PageGallerySeeder::class);
    $this->call(PageTopicsSeeder::class);
    $this->call(PageCommitteeSeeder::class);
    $this->call(PageAbstractBook::class);
    $this->call(PageSpeakersSeeder::class);
    $this->call(PageProgramSeeder::class);
    $this->call(PageNewsSeeder::class);
    $this->call(PageCabinetSeeder::class);
    $this->call(PageInitialSeeder::class);

  }

}
