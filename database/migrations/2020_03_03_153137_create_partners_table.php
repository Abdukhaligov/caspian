<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartnersTable extends Migration {

  public function up() {
    Schema::create('partners', function (Blueprint $table) {
      $table->increments('id');
      $table->boolean('gold');
      $table->string('name');
      $table->string('img');
      $table->string('url');
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('partners');
  }

}
