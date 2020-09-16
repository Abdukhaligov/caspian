@extends('layouts.app')

@section('content')
  <?php $fake = false ? $fakeUser = factory(\App\User::class)->make() : ''?>

  <section class="hero" style="background-image: url('{{asset('/assets/img/auditory.jpg')}}')">
    <div class="container">
      <h1 class="wow fadeInUp" data-wow-delay=".3s">
        <span data-text="{{ $data->title }}">{{ $data->title }}</span>
      </h1>
      <nav aria-label="breadcrumb">
        <ul class="breadcrumb text-size-35 wow fadeInUp" data-wow-delay=".5s">
          <li><a href="{{ route('home') }}">Home</a><span aria-hidden="true">|</span></li>
          <li class="active" aria-current="page">{{ $data->title }}</li>
        </ul>
      </nav>
    </div>
  </section>

  <section class="section-contacts">
    <div class="container">
      <div class="section-title">
        <div class="flex-row">
          <div class="contact wow fadeIn" data-wow-delay=".2s">
            <h3 class="text-size-25">Phone:</h3>
            <p><a href="tel: {{ $data->phone }}">{{ $data->phone }}</a></p>
          </div>
          <div class="contact wow fadeIn" data-wow-delay=".4s">
            <h3 class="text-size-25">Send E-mail:</h3>
            <p><a href="mailto: {{ $data->email }}">{{ $data->email }}</a></p>
          </div>
          <div class="contact wow fadeIn" data-wow-delay=".6s">
            <h3 class="text-size-25">Address:</h3>
            <p>{{ $data->address }}</p>
          </div>
        </div>
      </div>
      <div class="flex-row">
        <div class="contact-map wow fadeIn">
          <div id="map"></div>
        </div>
        <div class="contact-form wow fadeIn">
          @if(session('message'))
            <h2>{{ session('message') }}</h2>
          @else
            <form method="POST" action="{{ route('contacts') }}" autocomplete="off">
              @csrf
              <h4 class="form-title">Send Us A Message Now!</h4>
              <div class="form-group">
                <input type="text"
                       placeholder="Your name here *"
                       value="{{ $fake ? $fakeUser->name : old('name') }}"
                       name="name"
                       @error('name') class="error" @enderror/>
                @error('name')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
              <div class="form-group">
                <input type="email"
                       placeholder="Your E-mail here *"
                       name="email"
                       value="{{ $fake ? $fakeUser->email : old('email') }}"
                       @error('email') class="error" @enderror/>
                @error('email')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
              <div class="form-group">
              <textarea placeholder="Your message here (max 300 words)" name="message" maxlength="300" @error('msg') class="error" @enderror>{{ $fake ? $fakeUser->description : old('msg') }}</textarea>
                @error('msg')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
              <button type="submit" class="btn btn-blue pull-right">Submit</button>
            </form>
          @endif
        </div>
      </div>
    </div>
  </section>

@endsection

@section('scripts')
  <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4SgjsTpN_D4nuu-O2Dn8f5aeK7dLjwoQ&callback=initMap&language=en"
      async defer></script>
@endsection