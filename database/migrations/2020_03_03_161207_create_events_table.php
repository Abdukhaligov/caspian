<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration {

  public function up() {
    Schema::create('events', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->text('description')->nullable();
      $table->text('address');
      $table->dateTime('date')->nullable();
      $table->json('days')->nullable();
      $table->boolean('active')->default(false);
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('events');
  }

}
