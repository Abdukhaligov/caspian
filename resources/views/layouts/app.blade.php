<!DOCTYPE html>
<html lang="en">
<?php $data["initial"] = \App\Models\Pages\Initial::first();
$data["event"] = \App\Models\Event::activeEvent(); ?>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta http-equiv="x-ua-compatible" content="ie=edge"/>
  <meta name="author" content="AlVentures"/>
  <meta name="description" content=""/>
  <meta name="keywords" content=""/>
  <!-- Facebook Open Graph -->
  <meta property="og:site_name" content=""/>
  <meta property="og:title" content=""/>
  <meta property="og:url" content=""/>
  <meta property="og:type" content="website"/>
  <meta property="og:image" content=""/>
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:url" content="">
  <meta name="twitter:title" content="">
  <meta name="twitter:description" content="">
  <meta name="twitter:image" content="">
  <!-- Other -->
  <title>Home</title>
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="shortcut icon" type="image/x-icon" href="{{asset('assets/img/fav/favicon.ico')}}">
  <link rel="apple-touch-icon" href="{{asset('assets/img/fav/favicon.png')}}">
  <link rel="canonical" href="http://casper.test"/>
  <!-- Styles -->
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;900&family=Montserrat:wght@400;500;600;900&display=swap">
  <link rel="stylesheet" href="{{asset('assets/css/build.min.css')}}"/>
</head>

<body>
<div id="preloader"></div>
<div id="scroll-top">
  <i class="icon-arrow" aria-hidden="true"></i>
</div>
<div id="wrapper">
  <header class="header compensate-for-scrollbar">
    <nav class="header_nav">
      <div class="container flex">
        <a class="header_logo" href="/" title="Home">
          <img src="{{asset('assets/img/logo.svg')}}" alt="Casper"/>
        </a>
        <ul class="header_menu">
          <li class="{{Request::url() == route('home') ? "active" : ""}}">
            <a href="{{route('home')}}" title="Home">Home</a>
          </li>
          <li class="{{!Request::is('about*') ?: "active"}} dropdown">
            <a href="#0" title="About">About</a>
            <ul>
              <li class="{{Request::url() == route('about') ?"active": ""}}">
                <a href="{{route('about')}}" title="About Us">About Us</a>
              </li>
              <li class="{{Request::url() == route('topics') ?"active": ""}}">
                <a href="{{route('topics')}}" title="Topics">Topics</a>
              </li>
              <li class="{{Request::url() == route('committee') ?"active": ""}}">
                <a href="{{route('committee')}}" title="Committee">Committee</a>
              </li>
              <li class="{{Request::url() == route('speakers') ?"active": ""}}">
                <a href="{{route('speakers')}}" title="Speakers">Speakers</a>
              </li>
              <li class="{{Request::url() == route('program') ?"active": ""}}">
                <a href="{{route('program')}}" title="Program">Program</a>
              </li>
            </ul>
          </li>
          @guest
            <li class="{{Request::url() == route('register') ? "active" : ""}}">
              <a href="{{route('register')}}" title="Registration">
                Registration
              </a>
            </li>
          @endguest
          <li class="{{Request::url() == route('news') ? "active" : ""}}">
            <a href="{{route('news')}}" title="News">
              News
            </a>
          </li>
          <li class="{{!Request::is('media*') ?: "active"}} dropdown">
            <a href="#0" title="Media">Media</a>
            <ul>
              <li class="{{Request::url() == route('gallery') ? "active" : ""}}">
                <a href="{{route('gallery')}}" title="Gallery">Gallery</a>
              </li>
              <li class="{{Request::url() == route('abstractBook') ? "active" : ""}}">
                <a href="{{route('abstractBook')}}" title="Abstract Books">Abstract Books</a>
              </li>
            </ul>
          </li>
          <li class="{{Request::url() == route('contacts') ? "active" : ""}}">
            <a href="{{route('contacts')}}" title="Contacts">
              Contacts
            </a>
          </li>
          @auth
            <li class="dropdown {{Request::url() == route('cabinet') ? "active" : ""}}">
              <a href="#0" title="{{Auth::user()->name }}">
                <i class="icon-user" aria-hidden="true"></i>{{Auth::user()->name }}
              </a>
              <ul>
                <li class="{{Request::url() == route('cabinet') ? "active" : ""}}">
                  <a href="{{ route("cabinet") }}" title="Personal Cabinet">Personal Cabinet</a>
                </li>
                <li class="">
                  <a onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                     href="{{ route('logout') }}" title="Logout">Logout</a>
                  <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                  </form>
                </li>
              </ul>
            </li>
          @else
            <li class=" login-cta" data-toggle="login">
              <a href="#0" title="Login">
                Login
              </a>
              <div class="header_login form">
                <form method="POST" action="{{ route('login') }}" autocomplete="off">
                  @csrf
                  <div class="form-group">
                    <input type="email" placeholder="E-mail Address" value="{{ $email ?? old('email') }}"
                           @error('email') class="error" @enderror
                           name="email"/>
                    @error('email')
                    <span class="helper">{{ $message }}</span>
                    @enderror
                  </div>
                  <div class="form-group">
                    <input type="password" placeholder="Password" value="" name="password"
                           @error('password') class="error" @enderror
                           autocomplete="current-password"/>
                    @error('password')
                    <span class="helper">{{ $message }}</span>
                    @enderror
                  </div>
                  <button type="submit" class="btn btn-blue pull-center">Login</button>
                  <div class="text-center">
                    <a href="{{ route('register') }}">Registration</a><br/>
                    @if (Route::has('password.request'))
                      <a href="{{ route('password.request') }}">Forgot your password?</a>
                    @endif
                  </div>
                </form>
              </div>
            </li>
          @endauth
        </ul>
        <button class="header_burger" data-toggle="nav">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <nav class="header_mobile">
      <ul>
        <li class="{{Request::url() == route('home') ? "active" : ""}}">
          <a href="{{route('home')}}" title="Home">Home</a>
        </li>
        <li class="{{!Request::is('about*') ?: "active"}} dropdown">
          <a href="#0" title="About" data-toggle="dropdown">About</a>
          <ul style="display: none;">
            <li class="{{Request::url() == route('about') ?"active": ""}}">
              <a href="{{route('about')}}" title="About Us">About Us</a>
            </li>
            <li class="{{Request::url() == route('topics') ?"active": ""}}">
              <a href="{{route('topics')}}" title="Topics">Topics</a>
            </li>
            <li class="{{Request::url() == route('committee') ?"active": ""}}">
              <a href="{{route('committee')}}" title="Committee">Committee</a>
            </li>
            <li class="{{Request::url() == route('speakers') ?"active": ""}}">
              <a href="{{route('speakers')}}" title="Speakers">Speakers</a>
            </li>
            <li class="{{Request::url() == route('program') ?"active": ""}}">
              <a href="{{route('program')}}" title="Program">Program</a>
            </li>
          </ul>
        </li>
        @guest
          <li class="{{Request::url() == route('register') ? "active" : ""}}">
            <a href="{{route('register')}}" title="Registration">
              Registration
            </a>
          </li>
        @endguest
        <li class="{{Request::url() == route('news') ? "active" : ""}}">
          <a href="{{route('news')}}" title="News">
            News
          </a>
        </li>
        <li class="{{!Request::is('media*') ?: "active"}} dropdown">
          <a href="#0" title="Media" data-toggle="dropdown">Media</a>
          <ul>
            <li class="{{Request::url() == route('gallery') ? "active" : ""}}">
              <a href="{{route('gallery')}}" title="Gallery">Gallery</a>
            </li>
            <li class="{{Request::url() == route('abstractBook') ? "active" : ""}}">
              <a href="{{route('abstractBook')}}" title="Abstract Books">Abstract Books</a>
            </li>
          </ul>
        </li>
        <li class="{{Request::url() == route('contacts') ? "active" : ""}}">
          <a href="{{route('contacts')}}" title="Contacts">
            Contacts
          </a>
        </li>
        @auth
          <li class="dropdown {{Request::url() == route('cabinet') ? "active" : ""}}">
            <a href="#0" title="{{Auth::user()->name }}" data-toggle="dropdown">
              <i class="icon-user" aria-hidden="true"></i>{{Auth::user()->name }}
            </a>
            <ul>
              <li class="{{Request::url() == route('cabinet') ? "active" : ""}}">
                <a href="{{ route("cabinet") }}" title="Personal Cabinet">Personal Cabinet</a>
              </li>
              <li class="">
                <a onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                   href="{{ route('logout') }}" title="Logout">Logout</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                  @csrf
                </form>
              </li>
            </ul>
          </li>
        @else
          <li class="{{Request::url() == route('login') ? "active" : ""}}">
            <a href="{{route('login')}}" title="Login">Login</a>
          </li>
        @endauth
      </ul>
    </nav>
  </header>

  <main class="main">
    @yield('content')
    <section class="section-news">
      <div class="container">
        <div class="section-title wow fadeIn">
          <span>From our blog</span>
          <h2 class="text-size-35">Latest News</h2>
        </div>
        <div class="flex-row">
          @foreach(\App\Models\News::orderBy('created_at', 'desc')->with('media')->limit(3)->get() as $news)
            <div class="news-item wow fadeIn">
              <a class="news-item-img" href="{{ route('news')."/".$news->id }}">
                {{ $news->getFirstMedia('preview') }}
              </a>
              <div class="news-item-info">
                <p class="font-poppins">{{ date('M d, Y', strtotime($news->created_at)) }}</p>
                <h4><a href="{{ route('news')."/".$news->id }}">{{ $news->title }}</a></h4>
                <p>{!! $news->minimumDescription() !!}</p>
                <a href="{{ route('news')."/".$news->id }}" class="btn btn-outline-blue font-poppins">Read More</a>
              </div>
            </div>
          @endforeach
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer_subscribe">
        <h2 class="text-size-35">Subscribe to Our Newsletter</h2>
        <form method="POST" action="/" enctype="multipart/form-data" autocomplete="off">
          <input type="email" placeholder="Enter your email address..." value="" name="newsletter"
                 class="font-poppins"/>
          <button type="submit" class="btn btn-blue">Subscribe</button>
        </form>
      </div>
      <div class="footer_bottom flex font-poppins">
        <a href="#0" class="btn btn-outline-white">Caspian Forum</a>
        <small>{!! $data["initial"]->copyright  !!}</small>
        <ul class="socials flex">
          @foreach(json_decode($data["initial"]->social_networks) as $network)
            <li>
              <a href="{{ $network->attributes->link }}" target="_blank">
                <i class="icon-{{ $network->attributes->network }}"></i>
              </a>
            </li>
          @endforeach
        </ul>
      </div>
    </div>
  </footer>
</div>

<!-- Scripts -->
<script src="{{asset('assets/js/vendors.min.js')}}"></script>
<script src="{{asset('assets/js/build.min.js')}}"></script>
@yield('scripts')

</body>

</html>


