<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePresentersTable extends Migration {

  public function up() {
    Schema::create('presenters', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->string('photo');
      $table->string('job_title');
      $table->json('social_networks');
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('presenters');
  }

}
