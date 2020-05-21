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
      $table->longText('description')->nullable();
      $table->string('name')->nullable();
      $table->string('email')->unique()->nullable();
      $table->boolean('is_admin')->default(false);
      $table->enum('rank',[0,1,2,3])->default(0);
      $table->boolean('show_on_site')->default(false);
      $table->string('phone')->nullable();
      $table->string('company')->nullable();
      $table->string('degree')->nullable();
      $table->string('job_title')->nullable();
      $table->timestamp('email_verified_at')->nullable();
      $table->string('password')->default(bcrypt(123123));
      $table->rememberToken();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('users');
  }

}
