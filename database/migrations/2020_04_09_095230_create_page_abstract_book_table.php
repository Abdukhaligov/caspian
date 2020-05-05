<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageAbstractBookTable extends Migration {

  public function up() {
    Schema::create('page_abstract_book', function (Blueprint $table) {
      $table->increments('id');
      $table->json('title');
      $table->json('books')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('page_abstract_book');
  }

}
