<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventSpeakerTable extends Migration {

  public function up() {
    Schema::create('event_speaker', function (Blueprint $table) {
      $table->integer('event_id')->unsigned();
      $table->foreign('event_id')->references('id')->on('events')->onDelete('CASCADE');

      $table->integer('speaker_id')->unsigned();
      $table->foreign('speaker_id')->references('id')->on('speakers')->onDelete('CASCADE');
    });
  }

  public function down() {
    Schema::dropIfExists('event_speaker');
  }

}
