<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ReportTest extends TestCase {
  use RefreshDatabase;

  /** @test */
  public function user_with_privileges_can_add_report() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());
    $report = $this->tempReport();

    $this->post('/report/create', $report);
    $this->assertDatabaseHas('reports', $report);
  }

  /** @test */
  public function user_with_privileges_can_add_only_limited_count_of_reports() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());
    $this->tempReport("pending", true, 3);
    $report = $this->tempReport();

    $this->post('/report/create', $report);
    $this->assertDatabaseMissing('reports', $report);
  }

  /** @test */
  public function user_without_privileges_cannot_add_report() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser(rand(1, 4)));
    $report = $this->tempReport();

    $this->post('/report/create', $report);
    $this->assertDatabaseMissing('reports', $report);
  }

  /** @test */
  public function user_can_delete_pending_reports() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());
    $report = $this->tempReport(["status" => "pending"], true);

    $this->post('/report/delete', $report->toArray());
    $this->assertDatabaseMissing('reports', $report->toArray());
  }

  /** @test */
  public function user_cannot_delete_not_own_reports() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());

    $report = $this->tempReport([
        "status" => "pending",
        "user_id" => $this->tempUser()->id
    ], true);

    $this->post('/report/delete', $report->toArray());
    $this->assertDatabaseHas('reports', $report->toArray());
  }

  /** @test */
  public function user_cannot_delete_accepted_reports() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());
    $report = $this->tempReport(["status" => "accepted"], true);

    $this->post('/report/delete', $report->toArray());
    $this->assertDatabaseHas('reports', $report->toArray());
  }

  /** @test */
  public function user_cannot_delete_canceled_reports() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());
    $report = $this->tempReport(["status" => "canceled"], true);

    $this->post('/report/delete', $report->toArray());
    $this->assertDatabaseHas('reports', $report->toArray());
  }

  /** @test */
  public function user_can_add_file_to_report() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());
    $report = $this->tempReport(["status" => "accepted"], true);

    Storage::fake('local');
    $file = UploadedFile::fake()->create('file.pdf');
    $parameters = [
        'institute' => 'Allen Peter Institute',
        'total_marks' => '100',
        'aggregate_marks' => '78',
        'percentage' => '78',
        'year' => '2002',
        'file' => $file,
        "report_id" => $report->id
    ];

    $this->post('/report/edit', $parameters)->assertStatus(200);
    $this->assertDatabaseMissing('reports', $report->toArray());
  }

  /** @test */
  public function user_cannot_add_file_to_not_own_report() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());
    $report = $this->tempReport([
        "user_id" => $this->tempUser()->id,
        "status" => "accepted",
        "file" => 'some_kind_of_file.docx'
    ], true);

    Storage::fake('local');
    $file = UploadedFile::fake()->create('file.pdf');
    $parameters = [
        'institute' => 'Allen Peter Institute',
        'total_marks' => '100',
        'aggregate_marks' => '78',
        'percentage' => '78',
        'year' => '2002',
        'file' => $file,
        "report_id" => $report->id
    ];

    $this->post('/report/edit', $parameters)->assertStatus(403);
    $this->assertDatabaseHas('reports', $report->toArray());
  }

  /** @test */
  public function user_cannot_add_file_to_report_with_file_already() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());
    $report = $this->tempReport([
        "status" => "accepted",
        "file" => 'some_kind_of_file.docx'
    ], true);

    Storage::fake('local');
    $file = UploadedFile::fake()->create('file.pdf');
    $parameters = [
        'institute' => 'Allen Peter Institute',
        'total_marks' => '100',
        'aggregate_marks' => '78',
        'percentage' => '78',
        'year' => '2002',
        'file' => $file,
        "report_id" => $report->id
    ];

    $this->post('/report/edit', $parameters)->assertStatus(403);
    $this->assertDatabaseHas('reports', $report->toArray());
  }

  /** @test */
  public function user_cannot_add_file_to_report_in_pending() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());
    $report = $this->tempReport("pending", true);

    Storage::fake('local');
    $file = UploadedFile::fake()->create('file.pdf');
    $parameters = [
        'institute' => 'Allen Peter Institute',
        'total_marks' => '100',
        'aggregate_marks' => '78',
        'percentage' => '78',
        'year' => '2002',
        'file' => $file,
        "report_id" => $report->id
    ];

    $this->post('/report/edit', $parameters)->assertStatus(403);
    $this->assertDatabaseHas('reports', $report->toArray());
  }

  /** @test */
  public function user_cannot_add_file_to_canceled_report() {
    $this->tempSeeder(['MembershipSeeder', 'TopicSeeder', 'UserSeeder']);

    $this->actingAs($this->tempUser());
    $report = $this->tempReport("canceled", true);

    Storage::fake('local');
    $file = UploadedFile::fake()->create('file.pdf');
    $parameters = [
        'institute' => 'Allen Peter Institute',
        'total_marks' => '100',
        'aggregate_marks' => '78',
        'percentage' => '78',
        'year' => '2002',
        'file' => $file,
        "report_id" => $report->id
    ];

    $this->post('/report/edit', $parameters)->assertStatus(403);
    $this->assertDatabaseHas('reports', $report->toArray());
  }
}
