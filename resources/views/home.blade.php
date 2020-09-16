@extends('layouts.app')

@section('content')
  <section class="hero hero--main" style="background-image: url('{{asset('assets/img/auditory.jpg')}}')">
    <div class="container">

      <h1 class="wow fadeInUp" data-wow-delay=".3s">
        <span data-text="{{$data["event"]["name"]}}">{{$data["event"]["name"]}}</span>
      </h1>
      <span class="address text-size-35 wow fadeIn" data-wow-delay=".5s">
            <i class="icon-placeholder" aria-hidden="true"></i>{{$data["event"]["address"]}}
          </span>
      <span class="time text-size-35 wow fadeIn" data-wow-delay=".6s">
            <i class="icon-clock" aria-hidden="true"></i>{{ date('d M, Y', strtotime($data["event"]["date"])) }}
          </span>
      <a href="#0" class="btn btn-outline-white wow fadeIn" data-wow-delay=".7s">Participate</a>
      <div class="countdown">
        <div data-countdown="{{ date('Y/m/d H:i:s', strtotime($data["event"]["date"])) }}" class="wow fadeInUp"></div>
        <div class="wow fadeInDown">
          <span>days</span>
          <span>hours</span>
          <span>minutes</span>
          <span>seconds</span>
        </div>
        <div class="wow fadeIn">
          <h2>The event has finished</h2>
        </div>
      </div>

    </div>
  </section>
  <section class="section-about">
    <div class="container">
      <div class="flex-row">
        <div class="text-paragraphs wow fadeIn" data-wow-delay=".2s">
          {!! $data->description !!}
          <a href="{{ route('about') }}" class="btn btn-blue">More About Us</a>
        </div>
        <div class="wow fadeIn" data-wow-delay=".4s">
          @if($data->hasMedia('description_img'))
            {{ $data->media('description_img')->first() }}
          @endif
        </div>
      </div>
    </div>
  </section>
  @if($data["event"])
    @if($data["speakers"]->count() > 0)
      <section class="section-people">
        <div class="container">
          <div class="section-title wow fadeIn">
            <h2 class="text-size-35">Who Speaking?</h2>
            <p>Welcome to the dedicated to building remarkable Speakers!</p>
          </div>
          <div class="flex-row">

            @foreach($data["speakers"] as $user)
              <div class="person person--show-more wow fadeIn">

                <div class="person-info">
                  <h4>Abstract Name</h4>
                  <p>Minima molestias reprehenderit piciatis. ia officia modi cumque et facere hic et. Sedit rem
                    repellat. Optio ut aut nam dolores tur modi. usamus velit commodi consequatur esse orporis adipisci
                    sed reprehenderit. Fac magni quam nisi eveniet. Modi autem aut earum error et ipsam quis tenetur.
                    Non te vero sint. Minima molestias erit perspiciat</p>
                  <a href="/speakers-single.html" class="btn btn-outline-blue">Show More</a>
                </div>

                <div class="person-img ">
                  <a href="{{ route('speakers')."/".$user->id }}">
                    <div class="person-img-wrap">
                      {{ $user->getMedia('avatars')->first() }}
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


          </div>
        </div>
      </section>
    @endif
  @endif
  @if($data["sponsors"]->count() > 0)
    <section class="section-people">
      <div class="container">
        <div class="section-title wow fadeIn">
          <span>Who help us</span>
          <h2 class="text-size-35">Organizers of the event</h2>
        </div>
        <div class="flex-row">
          @foreach($data["sponsors"] as $sponsor)
            <div class="person person--img-wide wow fadeIn">
              <div class="person-img ">
                <a href="">
                  <div class="person-img-wrap">
                    {{$sponsor->getFirstMedia('avatars')}}
                  </div>
                </a>
                <div class="person-img-caption">
                  <h4>{{ $sponsor->degree->name ?? '' }} {{ $sponsor->name }}</h4>
                  <p><strong>{{ $sponsor->job_title }}</strong></p>
                  <p>{{ $sponsor->company }}</p>
                </div>
              </div>
            </div>
          @endforeach
        </div>
      </div>
    </section>
  @endif
  <section class="section-partners">
    <div class="container">
      <div class="section-title wow fadeIn">
        <span>Who help us</span>
        <h2 class="text-size-35">Partners</h2>
      </div>
      <h3 class="text-size-25 wow fadeIn">Golden Partners</h3>
      <div class="flex-row">
        @foreach($data["partnersGold"] as $partner)
          <div class="partner wow fadeIn">
            <a class="partner-img" target="_blank" href="{{ $partner->url }}">
              {{$partner->getMedia('partners')->first()}}
            </a>
          </div>
        @endforeach

      </div>
      <h3 class="text-size-25 wow fadeIn">Partners</h3>
      <div class="flex-row">
        @foreach($data["partners"] as $partner)
          <div class="partner wow fadeIn">
            <a class="partner-img" target="_blank" href="{{ $partner->url }}">
              {{$partner->getMedia('partners')->first()}}
            </a>
          </div>
        @endforeach
      </div>
    </div>
  </section>
@endsection
