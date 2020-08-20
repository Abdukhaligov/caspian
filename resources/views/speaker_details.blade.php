@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <section class="inner-hero">
    <div class="container">
      <div class="ih-content">
        <h1 class=" wow fadeInUp" data-wow-delay=".4s">Speakers</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb  wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Speaker Details</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->

  <!-- Speaker details Section-->
  <section class="speaker-details">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="sd-img">
            {{ $data->getMedia('avatars')->first() }}
          </div>
        </div>
        <div class="col-md-6">
          <div class="sd-text">
            <h2>{{ $data->name }}</h2>
            <span>{{ $data->job_title }}</span>
            {!! $data->description !!}
          </div>

          @if($data["social_networks"])
            <div class="icon">
              <ul>
                @foreach(json_decode($data["social_networks"]) as $network)
                  <li><a target="_blank" href="{{ $network->attributes->link  }}"><i
                          class="fab {{ $network->attributes->network }}"></i></a></li>
                @endforeach
              </ul>
            </div>
          @endif
          

        </div>
      </div>
    </div>
  </section>
  <!-- /Speaker details Section-->


@endsection
