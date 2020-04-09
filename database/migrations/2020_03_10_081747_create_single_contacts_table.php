<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSingleContactsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('single_contacts', function (Blueprint $table) {
      $table->increments('id');
      $table->json('name');
      $table->json('location')->nullable();

      $table->string('latitude')->default(0);
      $table->string('longitude')->default(0);

      $table->string('phone')->nullable();
      $table->string('email')->nullable();
      $table->string('address')->nullable();
      $table->json('social_networks')->nullable();

      $table->string('video_url')->nullable();
      $table->string('video_cover')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('single_contacts');
  }
}
