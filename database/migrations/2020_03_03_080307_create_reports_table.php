<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportsTable extends Migration {

  public function up() {
    Schema::create('reports', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('user_id')->unsigned();
      $table->foreign('user_id')->references('id')->on('users');
      $table->integer('topic_id')->unsigned();
      $table->foreign('topic_id')->references('id')->on('topics');
      $table->string('name');
      $table->text('description');
      $table->enum('status', ['pending', 'canceled', 'accepted'])->default('pending');
      $table->string('file')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('reports');
  }

}
