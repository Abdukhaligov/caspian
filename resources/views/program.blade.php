@extends('layouts.app')

@section('content')

  <style>
    .ed-img h6 {
      font-size: 17px;
      font-weight: 500;
    }

    .ed-img p {
      font-size: 15px;
    }

    .ed-content p {
      text-align: justify;
    }
  </style>
  <!-- Hero Section-->
  <section class="inner-hero inner-hero2">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Schedule</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Schedule</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->
  <!--Schedule Section-->
  <section class="schedule schedule3 schedule4 schedule-inner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        </div>
        <div class="col-md-12">
          <div class="event-schedule">
            <nav>
              <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist" style="width: 100%">

                @foreach($data->days as $id => $day)
                  <a class="nav-item nav-link @if($id == 0) active @endif" id="nav-{{ $id }}-tab" data-toggle="tab"
                     href="#nav-{{ $id }}" role="tab"
                     aria-controls="nav-agreement" aria-selected="false">
                    <div class="es-day">
                      <div class="es-day-details">
                        <span>{{ ++$id }}</span>
                      </div>
                      <div class="es-day-details2">
                        <span>Day</span><br>
                        <span>{{ date('dS M Y', strtotime($day->event_begin)) }}</span>
                      </div>
                    </div>
                  </a>
                @endforeach
              </div>
            </nav>

            <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              @foreach($data->days as $day_id => $day)
                <div class="tab-pane fade @if($day_id == 0) show active @endif" id="nav-{{ $day_id }}" role="tabpanel"
                     aria-labelledby="nav-{{ $day_id }}-tab">
                  @foreach($day->events as $event_id => $event)
                    <div class="event-details">
                      @if($event->layout == "speaker")
                        @php $user = \App\User::find($event->attributes->user);  @endphp
                        <div class="ed-img">
                          {{ $user->getMedia('avatar')->first() }}
                          <a href="{{ route('speakers')."/".$user->id }}">
                            <h5>{{$user->degree->name ?? ''}} {{$user->name}}</h5>
                          </a>
                          <h6>{{$user->job_title}}</h6>
                          <p>{{$user->company}}</p>
                        </div>
                      @else
                        <div class="ed-img">
                          <img src="{{ Storage::disk('public')->url($event->attributes->pic) }}" alt="">
                        </div>
                      @endif
                      <div class="ed-content">
                        <h5>{{ $event->attributes->title }}</h5>
                        {!! $event->attributes->description  !!}
                        <span>
                          <i class="fas fa-map-marker-alt"></i>
                          {{ $event->attributes->address ?? $data->event["address"] }}
                        </span>
                        <span>
                          <i class="far fa-clock"></i>
                          {{ date('H:i', strtotime($event->attributes->event_start)) }} - {{ date('H:i', strtotime($event->attributes->event_end)) }}
                        </span>
                      </div>
                    </div>
                  @endforeach

                </div>
              @endforeach
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/Schedule Section-->


@endsection