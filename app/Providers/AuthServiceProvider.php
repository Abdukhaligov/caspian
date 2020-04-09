<?php

namespace App\Providers;

use App\models\SingleAbout;
use App\Models\SingleCabinet;
use App\Models\SingleContact;
use App\Models\SingleGallery;
use App\Models\SingleHome;
use App\Models\SingleTopic;
use App\Policies\SinglePagePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider {
  /**
   * The policy mappings for the application.
   *
   * @var array
   */
  protected $policies = [
    // 'App\Model' => 'App\Policies\ModelPolicy',
      SingleHome::class => SinglePagePolicy::class,
      SingleAbout::class => SinglePagePolicy::class,
      SingleContact::class => SinglePagePolicy::class,
      SingleGallery::class => SinglePagePolicy::class,
      SingleTopic::class => SinglePagePolicy::class,
      SingleCabinet::class => SinglePagePolicy::class,

  ];

  /**
   * Register any authentication / authorization services.
   *
   * @return void
   */
  public function boot() {
    $this->registerPolicies();

  }
}
