<?php

namespace Laravel\Nova\Http\Middleware;

use Laravel\Nova\Nova;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response|void
     */
    public function handle($request, $next)
    {
        if(!\Auth::user()->isAdmin()) abort(403);
        return Nova::check($request) ? $next($request) : abort(403);
    }
}
