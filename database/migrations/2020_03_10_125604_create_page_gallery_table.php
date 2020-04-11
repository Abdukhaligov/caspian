<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageGalleryTable extends Migration {

  public function up() {
    Schema::create('page_gallery', function (Blueprint $table) {
      $table->increments('id');
      $table->json('title');
      $table->json('videos')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('page_gallery');
  }

}
