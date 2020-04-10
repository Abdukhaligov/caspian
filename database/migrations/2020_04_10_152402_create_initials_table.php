<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInitialsTable extends Migration {

  public function up() {
    Schema::create('initials', function (Blueprint $table) {
      $table->increments('id');
      $table->json('title');
      $table->string('phone');
      $table->string('email');
      $table->string('copyright');
      $table->string('logo');
      $table->json('social_networks')->nullable();


      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('initials');
  }

}
