@extends('layouts.app')

@section('content')
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

  <section class="section-people">
    <div class="container">
      <div class="section-title wow fadeIn">
        <h2 class="text-size-35">Who Speaking?</h2>
        <p>Welcome to the dedicated to building remarkable Speakers!</p>
      </div>
      <div class="flex-row">
        @if($data["speakers"])
          @foreach($data["speakers"] as $user)
            <div class="person person--default wow fadeIn">
              <div class="person-img">
                <a href="{{ route('speakers')."/".$user->id }}">
                  <div class="person-img-wrap">
                    @if($user->getFirstMedia('avatars'))
                      {{ $user->getFirstMedia('avatars') }}
                    @else
                      <img src="{{ Storage::disk('public')->url('user.svg') }}" alt="">
                    @endif
                  </div>
                </a>
                <div class="person-img-caption">
                  <h4>{{ $user->degree->name ?? '' }} {{ $user->name }}</h4>
                  <p><strong>{{ $user->job_title }}</strong></p>
                  <p>{{ $user->company }}</p>
                </div>
              </div>
            </div>
          @endforeach
        @endif
      </div>
    </div>
  </section>
@endsection
