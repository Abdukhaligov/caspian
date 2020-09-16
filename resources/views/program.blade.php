@extends('layouts.app')

@section('content')
  <section class="hero" style="background-image: url('{{asset('assets/img/auditory.jpg')}}')">
    <div class="container">

      <h1 class="wow fadeInUp" data-wow-delay=".3s">
        <span data-text="{!! $data->title !!}">{!! $data->title !!}</span>
      </h1>
      <nav aria-label="breadcrumb">
        <ul class="breadcrumb text-size-35 wow fadeInUp" data-wow-delay=".5s">
          <li><a href="{{ route('home') }}">Home</a><span aria-hidden="true">|</span></li>
          <li class="active" aria-current="page">{!! $data->title !!}</li>
        </ul>
      </nav>

    </div>
  </section>

  <section class="section-people">
    <div class="container">
      <div class="swiper wow fadeIn" data-wow-delay=".2s" id="swiper-agenda">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            @foreach($data->days as $id => $day)
              <div class="swiper-slide" data-tab-target="day{{$id}}">
                <strong>{{ ++$id }}</strong>
                <div class="date">
                  <strong class="text-size-25">Day</strong>
                  <span>{{ date('dS M Y', strtotime($day->attributes->event_begin ?? 0)) }}</span>
                </div>
              </div>
            @endforeach

          </div>
        </div>
        <div class="swiper-button-prev icon-arrow-down"></div>
        <div class="swiper-button-next icon-arrow-up"></div>
      </div>
      <div class="flex-row">
        @foreach($data->days as $id => $day)
          @foreach($day->attributes->events as $event_id => $event)
            <div class="person person--schedule wow fadeIn" data-tab="day{{$id}}">

              <div class="person-img ">
                @if($event->layout == "speaker")
                  @if($event->user)
                    <a href="{{ route('speakers')."/".$event->user->id }}">
                      <div class="person-img-wrap">
                        @if($event->user->getFirstMedia('avatars'))
                          {{ $event->user->getFirstMedia('avatars') }}
                        @else
                          <img src="{{ Storage::disk('public')->url('user.svg') }}" alt="">
                        @endif
                      </div>
                    </a>
                    <div class="person-img-caption">
                      <h4>{{$event->user->degree->name ?? ''}} {{$event->user->name}}</h4>
                      <p><strong>{{$event->user->job_title}}</strong></p>
                      <p>{{$event->user->company}}</p>
                    </div>
                  @else
                    <a href="#">
                      <div class="person-img-wrap">
                        <img src="{{ $data->logoPath }}" alt="">
                      </div>
                    </a>
                  @endif
                @else
                  <a>
                    <div class="person-img-wrap">
                      <img src="{{ Storage::disk('public')->url($event->pic) }}" alt="">
                    </div>
                  </a>
                @endif
              </div>

              <div class="person-schedule">
                <div class="text-paragraphs">
                  <h3 class="text-size-25">{{ $event->title }}</h3>
                  {!! $event->description  !!}
                </div>
                <div class="person-schedule-details">
                  <span>
                    <i class="icon-placeholder" aria-hidden="true"></i>
                     {{ $event->address ?? $data->event["address"] }}
                  </span>
                  <span>
                    <i class="icon-clock" aria-hidden="true"></i>
                     {{ date('H:i', strtotime($event->event_start)) }} - {{ date('H:i', strtotime($event->event_end)) }}
                  </span>
                </div>
              </div>
            </div>
          @endforeach
        @endforeach
      </div>
    </div>
  </section>
@endsection
