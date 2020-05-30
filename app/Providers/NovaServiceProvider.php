<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaApplicationServiceProvider;
use CodencoDev\NovaGridSystem\NovaGridSystem;


class NovaServiceProvider extends NovaApplicationServiceProvider {

  public function boot() {
    parent::boot();

    Nova::style('admin', public_path('css/admin.css'));
  }


  protected function routes() {
    Nova::routes()
        ->withAuthenticationRoutes()
        ->withPasswordResetRoutes()
        ->register();
  }


  protected function gate() {
    Gate::define('viewNova', function ($user) {
      return in_array($user->email, [
        //
      ]);
    });
  }


  protected function cards() {
    return [

    ];
  }

  protected function dashboards() {
    return [];
  }

  public function tools() {
    return [
//        new \Infinety\Filemanager\FilemanagerTool(),
        new NovaGridSystem,
    ];
  }


  public function register() {
    Nova::tools([
//        new NovaTranslation,
    ]);
  }
}
