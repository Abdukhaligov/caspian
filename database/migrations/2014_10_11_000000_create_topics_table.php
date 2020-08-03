<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTopicsTable extends Migration {

  public function up() {
    Schema::create('topics', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('category_id')->unsigned()->nullable();
      $table->foreign('category_id')->references('id')->on('categories');
      $table->integer('parent_id')->unsigned()->nullable();
      $table->foreign('parent_id')->references('id')->on('topics');
      $table->string('name');
      $table->longText('description')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('topics');
  }

}
