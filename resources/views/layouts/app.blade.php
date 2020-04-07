<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">

                    <a class="navbar-brand {{ Request::is('/') ? 'text-primary' : ''}}" href="{{ route('home') }}">
                        {{ __('static.home') }}
                    </a>

                    <a class="navbar-brand {{ Request::is('about*') ? 'text-primary' : ''}}" href="{{ route('about') }}">
                        {{ __('static.about us') }}
                    </a>
                    <a class="navbar-brand {{ Request::is('contacts*') ? 'text-primary' : ''}}" href="{{ route('contacts') }}">
                        {{ __('static.contacts') }}
                    </a>
                    <a class="navbar-brand {{ Request::is('gallery*') ? 'text-primary' : ''}}" href="{{ route('gallery') }}">
                        {{ __('static.gallery') }}
                    </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        <select id="languages" name="category" data-width="fit">
                            <option value="lang/eng" @if(App::getLocale() == "en") selected disabled @endif>English</option>
                            <option value="lang/ru" @if(App::getLocale() == "ru") selected disabled @endif>Russian</option>
                        </select>

                        <script src="http://code.jquery.com/jquery-latest.js"></script>
                        <script>
                            $(document).ready(function() {
                                $('#languages').bind('change', function () {
                                    window.location.replace($(this).val());
                                });
                            });

                        </script>

                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                                    <a class="dropdown-item" href="{{ route('personal_cabinet') }}">
                                        {{ __('static.personal cabinet') }}
                                    </a>

                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('static.logout') }}
                                    </a>



                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
