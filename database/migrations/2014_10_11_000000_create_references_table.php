<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReferencesTable extends Migration {

  public function up() {
    Schema::create('references', function (Blueprint $table) {
      $table->increments('id');
      $table->json('name');
    });
  }

  public function down() {
    Schema::dropIfExists('references');
  }

}
