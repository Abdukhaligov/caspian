<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageNewsTable extends Migration {

  public function up() {
    Schema::create('page_news', function (Blueprint $table) {
      $table->increments('id');
      $table->string('title');
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('page_news');
  }

}
