<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpeakersTable extends Migration {

  public function up() {
    Schema::create('speakers', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->longText('description');
      $table->string('photo');
      $table->string('job_title');
      $table->string('company')->nullable();
      $table->string('degree')->nullable();
      $table->json('social_networks')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('speakers');
  }

}
