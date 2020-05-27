<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration {

  public function up() {
    Schema::create('categories', function (Blueprint $table) {
      $table->increments('id');
      $table->string('title');
      $table->string('slug');
      $table->integer('parent_id')->unsigned()->nullable();
      $table->foreign('parent_id')->references('id')->on('categories');
      $table->boolean('is_active')->default(true);
      $table->tinyInteger('order')->default(0);
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('categories');
  }
}
