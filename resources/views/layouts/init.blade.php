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

  <title>{{ config('app.name', 'Laravel') }}</title>

  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}" defer></script>

  <link rel="shortcut icon" href="{{ asset('omnivus/images/favicon.ico') }}" type="image/png">

  <link rel="stylesheet" href="{{ asset('omnivus/css/bootstrap.min.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/all.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/magnific-popup.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/nice-select.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/animate.min.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/slick.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/default.css') }}">

  <link rel="stylesheet" href="{{ asset('omnivus/css/style.css') }}">

  <!-- MASTER  STYLESHEET  -->
  <link id="lgx-master-style" rel="stylesheet" href="{{ asset('eventpoint/css/style-default.min.css') }}" media="all"/>

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


  <footer class="footer-area footer-area-2 footer-area-1 bg_cover"
          style="background-image: url({{ asset('omnivus/images/footer-bg.jpg') }}); ">
    <div class="footer-overlay">
      <div class="container position-relative">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="widget-item-1 mt-30">
              <img src="{{ asset('omnivus/images/logo-1.1.png') }}" alt="">
              <p>The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has
                changed too, as have the things that we bring to our community onferences, books, and our membership
                added to the online magazine.</p>
              <p>One thing that hasn’t changed is that we’re a small team — with most of us not working</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="widget-item-2 widget-item-3 mt-30">
              <h4 class="title">Working Hours</h4>
              <ul>
                <li>Monday - Friday: 7:00 - 17:00</li>
                <li>Saturday: 7:00 - 12:00</li>
                <li>Sunday and holidays: 8:00 - 10:00</li>
              </ul>
              <p><span>For more then 30 years,</span> IT Service has been a reliable partner in the field of logistics
                and cargo forwarding.</p>
              <a href="#"><i class="fal fa-angle-right"></i>Discover More</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="footer-copyright">{!! \App\Models\Pages\Initial::getData()->copyright  !!}</div>
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

<!--//.LGX SITE CONTAINER-->
<!-- *** ADD YOUR SITE SCRIPT HERE *** -->
<!-- JQUERY  -->
<script src="{{ asset('eventpoint/js/vendor/jquery-1.12.4.min.js') }}"></script>

<!-- adding magnific popup js library -->
<script type="text/javascript"
        src="{{  asset('eventpoint/libs/maginificpopup/jquery.magnific-popup.min.js') }}"></script>

<!-- CUSTOM SCRIPT  -->
<script src="{{ asset('eventpoint/js/custom.script.js') }}"></script>

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
