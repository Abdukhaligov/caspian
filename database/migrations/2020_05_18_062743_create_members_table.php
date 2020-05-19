<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersTable extends Migration {

  public function up() {
    Schema::create('members', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('user_id')->unsigned();
      $table->foreign('user_id')->references('id')->on('users');
      $table->enum('rank', [1, 2, 3])->default(3);

      $table->longText('description')->nullable();
      $table->string('photo')->nullable();
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('members');
  }
}
