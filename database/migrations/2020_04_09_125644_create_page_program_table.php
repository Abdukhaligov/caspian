<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageProgramTable extends Migration {

  public function up() {
    Schema::create('page_program', function (Blueprint $table) {
      $table->increments('id');
      $table->json('title');
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('page_program');
  }

}
