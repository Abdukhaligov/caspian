<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageCabinetTable extends Migration {

  public function up() {
    Schema::create('page_cabinet', function (Blueprint $table) {
      $table->increments('id');
      $table->string('title');
      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('page_cabinet');
  }

}
