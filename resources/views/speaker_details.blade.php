@extends('layouts.init')

@section('content')

  <page-banner-component :title="{{"\"Speaker\""}}"></page-banner-component>

  <div class="team-details-area pt-120">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="team-details-thumb">
            <img src="{{ Storage::disk('public')->url($data->photo) }}" alt="">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="team-details-content">
            <h4 class="title">{{ $data->name }}</h4>
            <span>{{ $data->job_title }}</span>
            <p>{!! $data->description !!}</p>

            @if($data["social_networks"])
              <ul>
                @foreach(json_decode($data["social_networks"]) as $network)
                  <li>
                    <a target="_blank" href="{{ $network->attributes->link  }}">
                      <i class="fab {{ $network->attributes->network }}"></i>
                    </a>
                  </li>
                @endforeach
              </ul>
            @endif

          </div>
        </div>
      </div>
    </div>
  </div>

@endsection
