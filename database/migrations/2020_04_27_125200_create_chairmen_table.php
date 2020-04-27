<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChairmenTable extends Migration {

  public function up() {
    Schema::create('chairmen', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->enum('rank', [1,2,3])->default(3);
      $table->longText('description')->nullable();
      $table->string('photo')->nullable();
      $table->string('job_title')->nullable();
      $table->json('social_networks')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('chairmen');
  }

}
