<!DOCTYPE html>
<html lang="en">

<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{ \App\Models\Pages\Initial::getData()->title }}</title>

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- Mobile Specific Meta  -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <!--- Font-->
  <link href="http://caspian/eventdia/css/cssf67e.css?family=Poppins:400,500,600,700&amp;display=swap"
        rel="stylesheet">
  <link href="http://caspian/eventdia/css/cssbbf1.css?family=Montserrat:400,500,600&amp;display=swap"
        rel="stylesheet">

  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}" defer></script>
  <!-- CSS -->
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="http://caspian/eventdia/css/bootstrap.min.css">
  <!-- Jquery ui CSS -->
  <link rel="stylesheet" href="http://caspian/eventdia/css/jquery-ui.css">
  <!-- Fancybox CSS -->
  <link rel="stylesheet" href="http://caspian/eventdia/css/jquery.fancybox.min.css">
  <!-- Font Awesome CSS -->
  <link rel="stylesheet" href="http://caspian/eventdia/css/font-awosome.css">
  <!-- Flaticon CSS -->
  <link rel="stylesheet" href="http://caspian/eventdia/flat-font/flaticon.css">
  <!-- Slick Slider -->
  <link rel="stylesheet" href="http://caspian/eventdia/slick/slick-theme.css">
  <link rel="stylesheet" href="http://caspian/eventdia/slick/slick.css">
  <!-- Ticker css-->
  <link rel="stylesheet" href="http://caspian/eventdia/css/ticker.min.css">
  <!-- Nav Menu CSS -->
  <link rel="stylesheet" href="http://caspian/eventdia/css/sm-core-css.css">
  <link rel="stylesheet" href="http://caspian/eventdia/css/sm-mint.css">
  <link rel="stylesheet" href="http://caspian/eventdia/css/sm-style.css">
  <!-- Animate CSS -->
  <link rel="stylesheet" href="http://caspian/eventdia/css/animate.min.css">
  <!-- Main StyleSheet CSS -->
  <link rel="stylesheet" href="http://caspian/eventdia/css/style.css">
  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ Storage::disk('public')->url(\App\Models\Pages\Initial::getData()->favicon) }}"
        type="image/png">
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>

<body>
<!---Preloder-->
<div id="preloader-2"></div>
<!-- /Preloder-->

<!--Scroll Top-->
<div class="scrollup"><i class="fas fa-long-arrow-alt-up scrollup-icon"></i></div>
<!--Scroll Top-->

<!-- Header Area-->
<header class="header-area">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <nav class="main-nav" role="navigation">
          <!-- Mobile menu toggle button (hamburger/x icon) -->
          <input id="main-menu-state" type="checkbox"/>
          <label class="main-menu-btn" for="main-menu-state">
            <span class="main-menu-btn-icon"></span>
          </label>
          <h2 class="nav-brand"><a href="/"><img class="top-logo"
                                                 src="{{ Storage::disk('public')->url(\App\Models\Pages\Initial::getData()->logo) }}"
                                                 alt=""></a></h2>
          <!-- Sample menu definition -->
          <ul id="main-menu" class="sm sm-mint">
            @foreach(\App\Models\Pages\Initial::getRoutes() as $route)
              <li>
                <a href="{{ $route["link"] }}">{{$route["title"]}}</a>
                @if(array_key_exists('children', $route))
                  <ul>
                    @foreach($route["children"] as $child)
                      <li><a href="{{ $child["link"] }}">{{ $child["title"] }}</a></li>
                    @endforeach
                  </ul>
                @endif
              </li>
            @endforeach

            <li>
              @auth
                <a class="btn-1 blue" href="{{ route('cabinet') }}">
                  {{  __('static.personal_cabinet') }}
                </a>
                <a class="btn-1 blue" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                   href="{{ route('logout') }}">
                  {{  __('static.logout') }}
                </a>
              @else
                <a class="btn-1 blue" href="{{ route('login') }}">
                  {{  __('static.sign_in') . " \\ " . __('static.sign_up') }}
                </a>
              @endguest

            </li>
              @if(App::getLocale() == "en")
                <li>
                  <a class="btn-4" style="padding: 0; background: none; border-radius: 0;" href="{{ Request::root()."/lang/ru" }}">
                    <img style="
                        width: 54px;
                        padding: 5px 5px;
                        border-radius: 12px;
                        background-color: #ffffff;
                        margin-left: 15px;" src="http://caspian/omnivus/images/flag-2.jpg" alt="">
                  </a>
                </li>
                @else
                <li>
                  <a class="btn-4" style="padding: 0; background: none; border-radius: 0;" href="{{ Request::root()."/lang/eng" }}">
                    <img style="
                          width: 54px;
                          padding: 5px 5px;
                          border-radius: 12px;
                          background-color: #ffffff;
                          margin-left: 15px;" src="http://caspian/omnivus/images/flag-1.jpg" alt="">
                  </a>
                </li>
              @endif

          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
<!--/Header Area-->


@yield('content')


<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
  @csrf
</form>


<!-- Footer Section-->
<footer class="footer-area footer-area-2">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="subscribe">
          <h1>Subscribe to Our Newsletter</h1>
          <form>
            <input type="text" class="form-control" placeholder=" Enter your email address....."
                   onfocus="this.placeholder=''" onblur="this.placeholder='Enter your email address.....'">
            <button type="submit" class="btn btn-primary sub-btn"> Subscribe</button>
          </form>
        </div>
        <div class="footer-bottom">
          <div class="logo">
            <a href="#"><img src="http://caspian/eventdia/img/logo.png" alt=""></a>
          </div>
          <div class="fb-text">
            {{--            <p> Copyright © 2020 eventdia ! All Rights Reserved By <a href="https://voidcoders.com/"--}}
            {{--                                                                      target="blank">VoidCoders</a></p>--}}
            {!! \App\Models\Pages\Initial::getData()->copyright  !!}
          </div>
          <div class="fb-s-icon">
            <ul>
              @php
              @endphp
              @foreach(json_decode(\App\Models\Pages\Initial::getData()->social_networks) as $network)
                <li>
                  <a href="{{ $network->attributes->link }}" target="_blank">
                    <i class="fab {{ $network->attributes->network }}"></i>
                  </a>
                </li>
              @endforeach
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<!-- /Footer Section-->

<!-- Scripts -->

<!-- jQuery Plugin -->
<script src="http://caspian/eventdia/js/jquery-3.4.1.min.js"></script>
<!-- Bootstrap JS -->
<script src="http://caspian/eventdia/js/bootstrap.min.js"></script>
<!-- Jquery ui JS-->
<script src="http://caspian/eventdia/js/jquery-ui.js"></script>
<!--  Nav  -->
<script src="http://caspian/eventdia/js/jquery.smartmenus.js"></script>
<!-- Slick Slider -->
<script src="http://caspian/eventdia/slick/slick.min.js"></script>
<!-- Main Counterup Plugin-->
<script src="http://caspian/eventdia/js/jquery.counterup.min.js"></script>
<!-- Main Counterdown Plugin-->
<script src="http://caspian/eventdia/js/countdown.js"></script>
<!-- Waypoint Js-->
<script src="http://caspian/eventdia/js/waypoints.min.js"></script>
<!-- Fancybox Js-->
<script src="http://caspian/eventdia/js/jquery.fancybox.min.js"></script>
<!-- Ticker Js Plugin-->
<script src="http://caspian/eventdia/js/ticker.min.js"></script>
<!-- WOW JS Plugin-->
<script src="http://caspian/eventdia/js/wow.min.js"></script>
<!-- Main Script -->
<script src="http://caspian/eventdia/js/theme.js"></script>

<script>
  $(function () {
    //Timer Js//

    if ($('body').find('#clockdiv').length !== 0) {

      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }

      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
          var t = getTimeRemaining(endtime);

          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }

      var deadline = new Date("{{  \App\Models\Event::where('active', true)->first()["date"] }}");
      initializeClock('clockdiv', deadline);
    }
  }(jQuery));

  //**=================End Timer=====================**//
</script>

</body>

</html>