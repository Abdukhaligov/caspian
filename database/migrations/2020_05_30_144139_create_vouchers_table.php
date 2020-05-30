<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVouchersTable extends Migration {

  public function up() {
    Schema::create('vouchers', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('event_id')->unsigned()->nullable();
      $table->foreign('event_id')->references('id')->on('events');
      $table->integer('membership_id')->unsigned()->nullable();
      $table->foreign('membership_id')->references('id')->on('memberships');

      $table->string('template');
      $table->timestamps();
    });
  }


  public function down() {
    Schema::dropIfExists('vouchers');
  }
}
