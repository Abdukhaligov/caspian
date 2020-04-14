@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <section class="hero-2">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-content">
            <h1 class="wow fadeInUp" data-wow-delay=".3s">Eventdia Digital</h1>
            <h1 class="wow fadeInUp" data-wow-delay=".5s">Conference</h1>
            <span class="wow fadeInUp" data-wow-delay=".8s"><i class="fas fa-map-marker-alt"></i> Waterfront Hotel,
              Canada</span>
            <span class="wow fadeInUp" data-wow-delay=".8s"><i class="far fa-clock"></i> 8 - 9 January, 2020</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->

  <section class="contact-us"  id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="contact-details">
            <h2>Some kind of title</h2>
            <p>I have worls-class, flexible support via live chat, email and hone. I guarantee that you’ll be able to
              have any issue resolved within 24 hours.</p>
          </div>
        </div>
        <div class="col-md-7">
          <div class="contact-information">
            <form method="POST" action="{{ route('login') }}">
              @csrf
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1 @error('email') is-invalid @enderror"
                       name="email" id="email" placeholder="{{ __('static.e_mail_address') }}"
                       value="{{ old('email') }}" autocomplete="email"
                       onfocus="this.placeholder = ''" onblur="this.placeholder ='{{ __('static.e_mail_address') }}'">
                @error('email')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="password" class="form-control cp1 @error('password') is-invalid @enderror"
                       name="password" id="password" placeholder="{{ __('static.password') }}"
                       value="" autocomplete="password">
                @error('password')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <button style="float:left; margin-right: 15px" type="submit" id="submit">{{ __('static.login') }}</button>
            </form>
            <a href="{{ route('register') }}">
              <button style="float:left;" type="submit" id="submit">{{ __('static.registration') }}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


@endsection
