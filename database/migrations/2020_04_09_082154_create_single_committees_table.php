<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSingleCommitteesTable extends Migration {

  public function up() {
    Schema::create('single_committees', function (Blueprint $table) {
      $table->increments('id');
      $table->json('title');
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('single_committees');
  }

}
