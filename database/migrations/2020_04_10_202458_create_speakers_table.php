<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpeakersTable extends Migration {

  public function up() {
    Schema::create('speakers', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('user_id')->unsigned();
      $table->foreign('user_id')->references('id')->on('users');
      $table->longText('description');
      $table->string('photo');
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('speakers');
  }

}
