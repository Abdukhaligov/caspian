<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartnersTable extends Migration {

  public function up() {
    Schema::create('partners', function (Blueprint $table) {
      $table->increments('id');
      $table->boolean('gold')->default(false);
      $table->string('name');
      $table->string('url')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('partners');
  }

}
