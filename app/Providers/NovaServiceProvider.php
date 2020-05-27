<?php

namespace App\Providers;

use Day4\TreeView\TreeView;
use Illuminate\Support\Facades\Gate;
use Laravel\Nova\Cards\Help;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaApplicationServiceProvider;
use Joedixon\NovaTranslation\NovaTranslation;
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
        new TreeView([
            ['Categories', 'categories']
        ])
    ];
  }

  /**
   * Register any application services.
   *
   * @return void
   */
  public function register() {
    Nova::tools([
        new NovaTranslation,
    ]);
  }
}
