<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {

  public function run() {
    $this->call(ReferenceSeeder::class);
    $this->call(MembershipSeeder::class);
    $this->call(TopicSeeder::class);
    factory(\App\Models\Topic::class, 12)->create();

    $this->call(UserSeeder::class);
    factory(\App\User::class, 12)->create();

    factory(\App\Models\Report::class, 12)->create();
    $this->call(EventSeeder::class);

    /*  SINGLE PAGES */
    $this->call(PageHomeSeeder::class);
    $this->call(PageAboutUsSeeder::class);
    $this->call(PageContactsSeeder::class);
    $this->call(PageGallerySeeder::class);
    $this->call(PageTopicsSeeder::class);
    $this->call(PageCommitteeSeeder::class);
    $this->call(PageSpeakersSeeder::class);
    $this->call(PageNewsSeeder::class);
    $this->call(PageCabinetSeeder::class);
    $this->call(PageInitialSeeder::class);

    $this->call(SpeakerSeeder::class);
  }

}
