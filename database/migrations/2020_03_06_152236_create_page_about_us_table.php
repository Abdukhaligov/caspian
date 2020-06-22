<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageAboutUsTable extends Migration {

  public function up() {
    Schema::create('page_about_us', function (Blueprint $table) {
      $table->increments('id');
      $table->string('title');
      $table->text('body');
//      $table->json('team')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('page_about_us');
  }

}
