<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSingleGalleriesTable extends Migration {

  public function up() {
    Schema::create('single_galleries', function (Blueprint $table) {
      $table->increments('id');
      $table->json('title');
      $table->json('videos')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('single_galleries');
  }

}
