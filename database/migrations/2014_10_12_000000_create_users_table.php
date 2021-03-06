5<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration {

  public function up() {
    Schema::create('users', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('reference_id')->unsigned()->nullable();
      $table->foreign('reference_id')->references('id')->on('references');
      $table->integer('degree_id')->unsigned()->nullable();
      $table->foreign('degree_id')->references('id')->on('degrees');
      $table->integer('region_id')->unsigned()->nullable();
      $table->foreign('region_id')->references('id')->on('regions');
      $table->longText('description')->nullable();
      $table->string('name')->nullable();
      $table->string('email')->unique()->nullable();
      $table->boolean('is_admin')->default(false);
      $table->enum('rank',[1,2,3])->nullable();
      $table->boolean('show_on_site')->default(true);
      $table->string('phone')->nullable();
      $table->string('company')->nullable();
      $table->json('social_networks')->nullable();



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
