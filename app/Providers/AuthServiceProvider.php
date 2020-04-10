<?php

namespace App\Providers;

use App\Models\Pages\Initial;
use App\Models\Pages\SingleAbout;
use App\Models\Pages\SingleCabinet;
use App\Models\Pages\SingleContact;
use App\Models\Pages\SingleGallery;
use App\Models\Pages\SingleHome;
use App\Models\Pages\SingleTopic;
use App\Policies\SinglePagePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider {

  protected $policies = [
    // 'App\Model' => 'App\Policies\ModelPolicy',
      Initial::class => SinglePagePolicy::class,
      SingleHome::class => SinglePagePolicy::class,
      SingleAbout::class => SinglePagePolicy::class,
      SingleContact::class => SinglePagePolicy::class,
      SingleGallery::class => SinglePagePolicy::class,
      SingleTopic::class => SinglePagePolicy::class,
      SingleCabinet::class => SinglePagePolicy::class,
  ];

  public function boot() {
    $this->registerPolicies();
  }

}
