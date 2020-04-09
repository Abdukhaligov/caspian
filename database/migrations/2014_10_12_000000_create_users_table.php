<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration {

  public function up() {
    Schema::create('users', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('reference_id')->unsigned()->nullable();
      $table->foreign('reference_id')->references('id')->on('references');
      $table->integer('membership_id')->unsigned()->nullable();
      $table->foreign('membership_id')->references('id')->on('memberships');
      $table->string('name');
      $table->string('email')->unique();
      $table->boolean('is_admin')->default(false);
      $table->string('phone')->nullable();
      $table->string('company')->nullable();
      $table->string('job_title')->nullable();
      $table->timestamp('email_verified_at')->nullable();
      $table->string('password');
      $table->rememberToken();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('users');
  }

}
