<?php

namespace App\Providers;

use App\Models\Pages\AbstractBook;
use App\Models\Pages\Initial;
use App\Models\Pages\AboutUs;
use App\Models\Pages\Cabinet;
use App\Models\Pages\Contacts;
use App\Models\Pages\Gallery;
use App\Models\Pages\Home;
use App\Models\Pages\Topics;
use App\Policies\SinglePagePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider {

  protected $policies = [
    // 'App\Model' => 'App\Policies\ModelPolicy',
      Initial::class => SinglePagePolicy::class,
      Home::class => SinglePagePolicy::class,
      AboutUs::class => SinglePagePolicy::class,
      Contacts::class => SinglePagePolicy::class,
      Gallery::class => SinglePagePolicy::class,
      Topics::class => SinglePagePolicy::class,
      Cabinet::class => SinglePagePolicy::class,
      AbstractBook::class => SinglePagePolicy::class,
  ];

  public function boot() {
    $this->registerPolicies();
  }

}
