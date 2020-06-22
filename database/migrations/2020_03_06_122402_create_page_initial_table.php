<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageInitialTable extends Migration {

  public function up() {
    Schema::create('page_initial', function (Blueprint $table) {
      $table->increments('id');
      $table->string('title');
      $table->string('favicon');
      $table->string('phone');
      $table->string('email');
      $table->string('copyright');
      $table->string('logo');
      $table->json('social_networks')->nullable();
      $table->integer('max_report_count');
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('page_initial');
  }

}
