<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker as Faker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ReportTest extends TestCase
{
    use RefreshDatabase, Faker;

    /** @test */
    public function user_with_privileges_can_add_report(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]));

        $report = [
            "name" => $this->faker->sentence,
            "description" => $this->faker->paragraph,
            "topic_id" => rand(1,5)
        ];

        $this->post('/report/create', $report);

        $this->assertDatabaseHas('reports',$report);
    }

    /** @test */
    public function user_with_privileges_can_add_only_limited_count_of_reports(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]));

        factory('App\Models\Report',3)->create([
            'user_id' => auth()->id(),
            'topic_id' => rand(1,8),
            'status' => 'pending'
        ]);


        $report = [
            "name" => $this->faker->sentence,
            "description" => $this->faker->paragraph,
            "topic_id" => rand(1,5)
        ];

        $this->post('/report/create', $report);

        $this->assertDatabaseMissing('reports',$report);
    }

    /** @test */
    public function user_without_privileges_cannot_add_report(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(1,4),
            'reference_id' => null
        ]));

        $report = [
            "name" => $this->faker->sentence,
            "description" => $this->faker->paragraph,
            "topic_id" => rand(1,5)
        ];

        $this->post('/report/create', $report);

        $this->assertDatabaseMissing('reports',$report);
    }

    /** @test */
    public function user_can_delete_pending_reports(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]));

        $report = factory('App\Models\Report')->create([
            'user_id' => auth()->id(),
            'topic_id' => rand(1,8),
            'status' => 'pending'
        ]);

        $this->post('/report/delete', $report->toArray());

        $this->assertDatabaseMissing('reports',$report->toArray());


    }

    /** @test */
    public function user_cannot_delete_not_own_reports(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $anotherUser = factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]));

        $report = factory('App\Models\Report')->create([
            'user_id' => $anotherUser->id,
            'topic_id' => rand(1,8),
            'status' => 'pending'
        ]);

        $this->post('/report/delete', $report->toArray());

        $this->assertDatabaseHas('reports',$report->toArray());
    }

    /** @test */
    public function user_cannot_delete_accepted_reports(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]));

        $report = factory('App\Models\Report')->create([
            'user_id' => auth()->id(),
            'topic_id' => rand(1,8),
            'status' => 'accepted'
        ]);

        $this->post('/report/delete', $report->toArray());

        $this->assertDatabaseHas('reports',$report->toArray());


    }

    /** @test */
    public function user_cannot_delete_canceled_reports(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]));

        $report = factory('App\Models\Report')->create([
            'user_id' => auth()->id(),
            'topic_id' => rand(1,8),
            'status' => 'canceled'
        ]);

        $this->post('/report/delete', $report->toArray());

        $this->assertDatabaseHas('reports',$report->toArray());


    }

    /** @test */
    public function user_can_add_file_to_report(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]));

        $report = factory('App\Models\Report')->create([
            'user_id' => auth()->id(),
            'topic_id' => rand(1,8),
            'status' => 'accepted'
        ]);

        Storage::fake('local');
        $file = UploadedFile::fake()->create('file.pdf');
        $parameters =[
            'institute'=>'Allen Peter Institute',
            'total_marks'=>'100',
            'aggregate_marks'=>'78',
            'percentage'=>'78',
            'year'=>'2002',
            'file'=>$file,
            "report_id" => $report->id
        ];

        $this->post('/report/edit', $parameters)->assertStatus(200);
        $this->assertDatabaseMissing('reports', $report->toArray());


    }

    /** @test */
    public function user_cannot_add_file_to_report_with_file_already(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]));

        $report = factory('App\Models\Report')->create([
            'user_id' => auth()->id(),
            'topic_id' => rand(1,8),
            'status' => 'accepted',
            'file' => 'some_kind_of_file.docx'
        ]);

        Storage::fake('local');
        $file = UploadedFile::fake()->create('file.pdf');
        $parameters =[
            'institute'=>'Allen Peter Institute',
            'total_marks'=>'100',
            'aggregate_marks'=>'78',
            'percentage'=>'78',
            'year'=>'2002',
            'file'=>$file,
            "report_id" => $report->id
        ];

        $this->post('/report/edit', $parameters)->assertStatus(403);
        $this->assertDatabaseHas('reports', $report->toArray());


    }

    /** @test */
    public function user_cannot_add_file_to_report_in_pending(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]));

        $report = factory('App\Models\Report')->create([
            'user_id' => auth()->id(),
            'topic_id' => rand(1,8),
            'status' => 'pending'
        ]);

        Storage::fake('local');
        $file = UploadedFile::fake()->create('file.pdf');
        $parameters =[
            'institute'=>'Allen Peter Institute',
            'total_marks'=>'100',
            'aggregate_marks'=>'78',
            'percentage'=>'78',
            'year'=>'2002',
            'file'=>$file,
            "report_id" => $report->id
        ];

        $this->post('/report/edit', $parameters)->assertStatus(403);
        $this->assertDatabaseHas('reports', $report->toArray());


    }

    /** @test */
    public function user_cannot_add_file_to_canceled_report(){
        $this->artisan('db:seed', ['--class' => 'MembershipSeeder']);
        $this->artisan('db:seed', ['--class' => 'TopicSeeder']);

        $this->actingAs(factory('App\User')->create([
            'membership_id' => rand(5,6),
            'reference_id' => null
        ]));

        $report = factory('App\Models\Report')->create([
            'user_id' => auth()->id(),
            'topic_id' => rand(1,8),
            'status' => 'canceled'
        ]);

        Storage::fake('local');
        $file = UploadedFile::fake()->create('file.pdf');
        $parameters =[
            'institute'=>'Allen Peter Institute',
            'total_marks'=>'100',
            'aggregate_marks'=>'78',
            'percentage'=>'78',
            'year'=>'2002',
            'file'=>$file,
            "report_id" => $report->id
        ];

        $this->post('/report/edit', $parameters)->assertStatus(403);
        $this->assertDatabaseHas('reports', $report->toArray());


    }

}
