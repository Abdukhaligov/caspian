<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSingleHomesTable extends Migration {

  public function up() {
    Schema::create('single_homes', function (Blueprint $table) {
      $table->increments('id');
      $table->json('title');
      $table->json('banners')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('single_homes');
  }

}
