@extends('layouts.init')

@section('content')

  <page-banner-component :title="{{ json_encode($data->title) }}"></page-banner-component>

  <div class="leadership-area padding gray-bg pt-70">
    <div class="container">
      <div class="row">
        @foreach($data["speakers"] as $speaker)
          <div class="col-lg-3 col-md-6 col-sm-6">
            <a href="{{ route('speakers')."/".$speaker->id }}">
              <div class="leadership-item mt-50">
                <img src="{{ Storage::disk('public')->url($speaker->photo) }}" alt="">
                <div class="leadership-content">
                  <h5 class="title">{{ $speaker->name }}</h5>
                  <span>{{ $speaker->job_title }}</span>
                </div>
              </div>
            </a>
          </div>
        @endforeach
      </div>
    </div>
  </div>


  <div class="team-join">
    <div class="container">
      <div class="join-bg">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="team-join-title">
              <span>Join With us</span>
              <h3 class="title">Let’s make some noise with us.</h3>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="team-join-btn text-lg-right text-left">
              <a class="main-btn" href="#">Apply Now</a>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="team-join-thumb">
              <img src="{{ asset('omnivus/images/team-join-thumb.png') }}" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="Progress-bar-area mt-95 mb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-6">
          <div class="Progress-bar-item mt-30" id="circle1">
            <div class="Progress-bar-content text-center">
              <i class="fal fa-map"></i>
              <h3 class="title"><span class="counter">280</span></h3>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="Progress-bar-item mt-30" id="circle2">
            <div class="Progress-bar-content text-center">
              <i class="fal fa-chart-bar"></i>
              <h3 class="title"><span class="counter">782</span></h3>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="Progress-bar-item mt-30" id="circle3">
            <div class="Progress-bar-content text-center">
              <i class="fal fa-chart-pie"></i>
              <h3 class="title"><span class="counter">9</span>m</h3>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="Progress-bar-item mt-30" id="circle4">
            <div class="Progress-bar-content text-center">
              <i class="fal fa-user-friends"></i>
              <h3 class="title"><span class="counter">100</span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


@endsection
