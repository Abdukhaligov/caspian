<!doctype html>
<html lang="en">

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

  <?php
  $routes = [
      "about" => [
          "link" => route('about'),
          "title" => __('static.about us')
      ],
      "contacts" => [
          "link" => route('contacts'),
          "title" => __('static.contacts')
      ],
      "gallery" => [
          "link" => route('gallery'),
          "title" => __('static.gallery')
      ],
      "home" => [
          "link" => route('home'),
          "title" => __('static.home')
      ]
  ];
  $locale = [
      "en" => [
          "link" => "lang/eng",
          "title" => "EN",
          "img" => asset('omnivus/images/flag-1.jpg')
      ],
      "ru" => [
          "link" => "lang/ru",
          "title" => "RU",
          "img" => asset('omnivus/images/flag-2.jpg')
      ]
  ];

  switch (App::getLocale()){
    case "en":
      $locale = [
          "link" => "/lang/ru",
          "title" => "RU",
          "img" => asset('omnivus/images/flag-2.jpg')
      ];
      break;
    case "ru":
      $locale = [
          "link" => "/lang/en",
          "title" => "EN",
          "img" => asset('omnivus/images/flag-1.jpg')
      ];
      break;
  }

  $routes = json_encode($routes);
  $locale = json_encode($locale);
  ?>
  <preloader-component></preloader-component>

  <navbar-component :routes="{{ $routes }}" :locale="{{ $locale }}"></navbar-component>

  @yield('content')

  <script data-cfasync="false" src="{{ asset('omnivus/js/email-decode.min.js') }}"></script>

  <script src="{{ asset('omnivus/js/vendor/modernizr-3.6.0.min.js') }}"
          type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/vendor/jquery-1.12.4.min.js') }}"
          type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <!--//.LGX SITE CONTAINER-->
  <!-- *** ADD YOUR SITE SCRIPT HERE *** -->
  <!-- JQUERY  -->
  <script src="{{ asset('eventpoint/js/vendor/jquery-1.12.4.min.js') }}"></script>

  <!-- adding magnific popup js library -->
  <script type="text/javascript"
          src="{{  asset('eventpoint/libs/maginificpopup/jquery.magnific-popup.min.js') }}"></script>

  <!-- CUSTOM SCRIPT  -->
  <script src="{{ asset('eventpoint/js/custom.script.js') }}"></script>

  <script src="{{ asset('omnivus/js/bootstrap.min.js') }}" type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>
  <script src="{{ asset('omnivus/js/popper.min.js') }}" type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/slick.min.js') }}" type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/isotope.pkgd.min.js') }}" type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/imagesloaded.pkgd.min.js') }}"
          type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/jquery.magnific-popup.min.js') }}"
          type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/jquery.counterup.min.js') }}"
          type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/circle-progress.min.js') }}"
          type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/ajax-contact.js') }}" type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/jquery.syotimer.min.js') }}"
          type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/jquery.nice-select.min.js') }}"
          type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/wow.min.js') }}" type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/waypoints.min.js') }}" type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>

  <script src="{{ asset('omnivus/js/main.js') }}" type="0bd88c4bfff54d964c6c0fba-text/javascript"></script>
  <script src="{{ asset('omnivus/js/rocket-loader.min.js') }}" data-cf-settings="0bd88c4bfff54d964c6c0fba-|49"
          defer=""></script>

</div>
</body>


</html>