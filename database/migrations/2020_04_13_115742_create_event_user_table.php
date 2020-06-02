<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventUserTable extends Migration {

  public function up() {
    Schema::create('event_user', function (Blueprint $table) {
      //$table->increments('id');

      $table->integer('event_id')->unsigned();
      $table->foreign('event_id')->references('id')->on('events')->onDelete('CASCADE');

      $table->integer('user_id')->unsigned();
      $table->foreign('user_id')->references('id')->on('users')->onDelete('CASCADE');

      $table->integer('membership_id')->unsigned();
      $table->foreign('membership_id')->references('id')->on('memberships');

      $table->enum('status', [1, 2, 3])->default(1);
    });
  }

  public function down() {
    Schema::dropIfExists('event_user');
  }

}
