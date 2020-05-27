<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegionsTable extends Migration {

  public function up() {
    Schema::create('regions', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name_en')->nullable();
      $table->string('desc_en')->nullable();
      $table->string('name_ru')->nullable();
      $table->string('desc_ru')->nullable();
      $table->string('cc')->nullable();
      $table->string('mask')->nullable();
    });
  }

  public function down() {
    Schema::dropIfExists('regions');
  }
}
