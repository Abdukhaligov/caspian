@extends('layouts.app')

@section('content')

  <style>
    .ed-img h6{
      font-size: 17px;
      font-weight: 500;
    }
    .ed-img p{
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
                @foreach($data->program as $id => $program)
                  <a class="nav-item nav-link @if($id == 0) active @endif" id="nav-{{ $id }}-tab" data-toggle="tab" href="#nav-{{ $id }}" role="tab"
                     aria-controls="nav-agreement" aria-selected="false">
                    <div class="es-day">
                      <div class="es-day-details">
                        <span>{{ ++$id }}</span>
                      </div>
                      <div class="es-day-details2">
                        <span>Day</span><br>
                        <span>{{ date('dS M Y', strtotime($program["attributes"]["event_begin"])) }}</span>
                      </div>
                    </div>
                  </a>
                @endforeach
              </div>
            </nav>
            <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              @foreach($data->program as $tab_id => $tab)
                <div class="tab-pane fade @if($tab_id == 0) show active @endif" id="nav-{{ $tab_id }}" role="tabpanel" aria-labelledby="nav-{{ $tab_id }}-tab">
                  @foreach($tab["attributes"]["speaker"] as $speaker_id => $speaker)
                    @php
                      $speakerDetails = \App\User::find($speaker["attributes"]["speaker"]);
                      $speakerDetails->photo = \App\Models\Speaker::find($speaker["attributes"]["speaker"])->photo;
                     @endphp
                    <div class="event-details">
                      <div class="ed-img">
                        <img src="{{ Storage::disk('public')->url($speakerDetails->photo) }}" alt="">
                        <a href="{{ route('speakers')."/".$speakerDetails->id }}">
                          <h5>{{$speakerDetails->degree}} {{$speakerDetails->name}}</h5>
                        </a>
                        <h6>{{$speakerDetails->job_title}}</h6>
                        <p>{{$speakerDetails->company}}</p>
                      </div>
                      <div class="ed-content">
                        <h5>{{ $speaker["attributes"]["title"] }}</h5>
                        {!! $speaker["attributes"]["description"] !!}
                        <span>
                          <i class="fas fa-map-marker-alt"></i>
                          @if($speaker["attributes"]["address"] !== "")
                            {{ $speaker["attributes"]["address"] }}
                          @else
                            {{ $data->event["address"] }}
                          @endif
                        </span>
                        <span>
                          <i class="far fa-clock"></i>
                          {{ date('H:i', strtotime($speaker["attributes"]["event_start"])) }} - {{ date('H:i', strtotime($speaker["attributes"]["event_end"])) }}
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