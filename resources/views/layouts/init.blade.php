<!doctype html>
<html lang="en">

<!-- Mirrored from gizmoder.com/demo/html/omnivus/omnivus/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 06 Apr 2020 11:14:46 GMT -->
<head>

  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ \App\Models\Pages\Initial::getData()->title }}</title>

  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}" defer></script>

  <link rel="shortcut icon" href="{{ Storage::disk('public')->url(\App\Models\Pages\Initial::getData()->favicon) }}" type="image/png">

  <link rel="stylesheet" href="{{ asset('omnivus/css/bootstrap.min.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/all.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/magnific-popup.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/nice-select.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/animate.min.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/slick.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/default.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/style.css') }}">

  <!-- Styles -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

<div id="app">

    <div class="preloader">
      <div class="loading">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>

  <navbar-component
      :routes="{{ App\ConfigJSON::getRoutes() }}"
      :locale="{{ \App\ConfigJSON::getLocale() }}"
      :data="{{ \App\ConfigJSON::getData() }}">
  </navbar-component>

  @yield('content')


  <div class="back-to-top back-to-top-2">
    <a href="#">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>


  <footer class="footer-area footer-area-2 footer-area-1">
    <div style="    background-color: #00152e;">
      <div class="container position-relative">
        <div class="row">
          <div class="col-lg-12">
            <div style="margin: 15px; text-align: center">{!! \App\Models\Pages\Initial::getData()->copyright  !!}</div>
          </div>
        </div>
      </div>
    </div>
  </footer>


  <div class="back-to-top back-to-top-2">
    <a href="#">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>

  <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
    @csrf
  </form>


</div>

<script src="{{ asset('omnivus/js/vendor/jquery-1.12.4.min.js') }}"
        type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/bootstrap.min.js') }}" type="fa7f17f0923a53efe332a952-text/javascript"></script>
<script src="{{ asset('omnivus/js/popper.min.js') }}" type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/slick.min.js') }}" type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/isotope.pkgd.min.js') }}" type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/imagesloaded.pkgd.min.js') }}"
        type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/jquery.magnific-popup.min.js') }}"
        type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/jquery.counterup.min.js') }}"
        type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/circle-progress.min.js') }}"
        type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/ajax-contact.js') }}" type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/jquery.syotimer.min.js') }}"
        type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/jquery.nice-select.min.js') }}"
        type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/wow.min.js') }}" type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/waypoints.min.js') }}" type="fa7f17f0923a53efe332a952-text/javascript"></script>

<script src="{{ asset('omnivus/js/main.js') }}" type="fa7f17f0923a53efe332a952-text/javascript"></script>
<script src="{{ asset('omnivus/js/rocket-loader.min.js') }}" data-cf-settings="fa7f17f0923a53efe332a952-|49"
        defer=""></script>

</body>

</html>
