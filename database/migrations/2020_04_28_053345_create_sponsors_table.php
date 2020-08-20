<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSponsorsTable extends Migration {

  public function up() {
    Schema::create('sponsors', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('degree_id')->unsigned()->nullable();
      $table->foreign('degree_id')->references('id')->on('degrees');
      $table->string('name');
      $table->longText('description')->nullable();
      $table->string('job_title')->nullable();
      $table->string('company')->nullable();
      $table->json('social_networks')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('sponsors');
  }

}
