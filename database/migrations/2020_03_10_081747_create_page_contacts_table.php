<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageContactsTable extends Migration {

  public function up() {
    Schema::create('page_contacts', function (Blueprint $table) {
      $table->increments('id');
      $table->json('title');
      $table->string('phone')->nullable();
      $table->string('email')->nullable();
      $table->string('address')->nullable();
      $table->json('map')->nullable();
      $table->json('social_networks')->nullable();
      $table->string('video_url')->nullable();
      $table->string('video_cover')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('page_contacts');
  }

}
