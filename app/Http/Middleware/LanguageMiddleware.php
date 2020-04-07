<?php

namespace App\Http\Middleware;

use Closure;

class LanguageMiddleware {
  /**
   * Handle an incoming request.
   *
   * @param \Illuminate\Http\Request $request
   * @param \Closure $next
   * @return mixed
   */
  public function handle($request, Closure $next) {
    app()->setLocale('en');

    if (in_array(session('locale'), ['en', 'ru']))
      app()->setLocale(session('locale'));

    return $next($request);
  }
}
