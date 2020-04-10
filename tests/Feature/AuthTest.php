<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;


class AuthTest extends TestCase {

  use WithFaker, RefreshDatabase;

  /** @test */
  public function user_can_view_a_login_form() {
    $this->tempSeeder(['InitialSeeder']);
    $response = $this->get('/login');

    $response->assertSuccessful();
    $response->assertViewIs('auth.login');
  }

  /** @test */
  public function user_cannot_view_a_login_form_when_authenticated() {
    $this->tempSeeder(['InitialSeeder']);
    $user = factory(User::class)->make();

    $response = $this->actingAs($user)->get('/login');
    $response->assertRedirect('/');
  }

  /** @test */
  public function user_can_login_with_correct_credentials() {
    $this->tempSeeder(['InitialSeeder']);

    $user = factory(User::class)->create([
        'password' => bcrypt($password = '123123'),
        'membership_id' => null,
        'reference_id' => null
    ]);

    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => $password,
    ]);

    $response->assertRedirect('/');
    $this->assertAuthenticatedAs($user);
  }

}
