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
        <span>Our Team</span>
        <h2 class="text-size-35">People Behind the World Digital Conference</h2>
      </div>
      <div class="flex-row">

        @foreach($data["users_1"] as $user)
          <div class="person person--show-more wow fadeIn">
            <div class="person-info">
              <h4>Abstract Name</h4>
              <p>Minima molestias reprehenderit piciatis. ia officia modi cumque et facere hic et. Sedit rem repellat.
                Optio ut aut nam dolores tur modi. usamus velit commodi consequatur esse orporis adipisci sed
                reprehenderit. Fac magni quam nisi eveniet. Modi autem aut earum error et ipsam quis tenetur. Non te
                vero sint. Minima molestias erit perspiciat</p>
              <a href="{{ route('speakers')."/".$user->id }}" class="btn btn-outline-blue">Show More</a>
            </div>
            <div class="person-img ">
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
                <h4>{{ $user->degree->name ?? "" }} {{ $user->name }}</h4>
                <p><strong>{{ $user->job_title }}</strong></p>
                <p>{{ $user->company }}</p>
              </div>
            </div>
          </div>
        @endforeach
        @foreach($data["users_2"] as $user)
          <div class="person person--default wow fadeIn">
            <div class="person-img ">
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
                <h4>{{ $user->degree->name ?? "" }} {{ $user->name }}</h4>
                <p><strong>{{ $user->job_title }}</strong></p>
                <p>{{ $user->company }}</p>
              </div>
            </div>
          </div>
        @endforeach
        @foreach($data["users_3"] as $user)
          <div class="person person--default wow fadeIn">
            <div class="person-img no-img">
              <div class="person-img-caption">
                <h4>{{ $user->degree->name ?? "" }} {{ $user->name }}</h4>
                <p><strong>{{ $user->job_title }}</strong></p>
                <p>{{ $user->company }}</p>
              </div>
            </div>
          </div>
        @endforeach

      </div>
    </div>
  </section>
@endsection
