<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageHomeTable extends Migration {

  public function up() {
    Schema::create('page_home', function (Blueprint $table) {
      $table->increments('id');
      $table->json('title');
      $table->json('banners')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('page_home');
  }

}
