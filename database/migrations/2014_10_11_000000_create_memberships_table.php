<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembershipsTable extends Migration {

  public function up() {
    Schema::create('memberships', function (Blueprint $table) {
      $table->increments('id');
      $table->json('name');
      $table->integer('parent_id')->unsigned()->nullable();
      $table->foreign('parent_id')->references('id')->on('memberships');
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('memberships');
  }

}
