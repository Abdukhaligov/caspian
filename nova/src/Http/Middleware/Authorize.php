<?php

namespace Laravel\Nova\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\Passport;
use Laravel\Nova\Nova;

class Authorize{

    public function handle($request, $next){

//        if(!Auth::user()->isOperator()){
//            return redirect('/');
//        }

        return Nova::check($request) ? $next($request) : abort(403);
    }
}
