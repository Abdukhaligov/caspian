<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration {

  public function up() {
    Schema::create('documents', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('user_id')->unsigned();
      $table->foreign('user_id')
          ->references('id')
          ->on('users')
          ->onDelete('CASCADE');
      $table->integer('voucher_id')->unsigned();
      $table->foreign('voucher_id')
          ->references('id')
          ->on('vouchers')
          ->onDelete('CASCADE');
      $table->string('path')->nullable();

      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('documents');
  }
}
