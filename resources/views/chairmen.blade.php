@extends('layouts.app')

@section('content')
  <style>
    .stm-text{
      padding: 10px !important;
      max-height: 72px;
      overflow: hidden;
    }
    .stm-text p{
      font-size: 13px !important;
      line-height: 30px !important;
    }
    .card p {
      font-size: 12px !important;
      line-height: 32px;
    }
    .card h5{
      font-size:  15px !important;
    }
  </style>
  <!-- Hero Section-->
  <section class="inner-hero inner-hero2">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Chairmen</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Chairmen</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->


  <section class="our-team ot-inner">
    <div class="ot-top">
      <span>Our Team</span>
      <h1>People Behind the World </h1>
      <h1>Digital Conference</h1>
    </div>
    <div class="container">
      <div class="col-md-8 row m-auto">
      @foreach($data["chairmen_1"] as $speaker)
          <div class="col-md-6">
            <div class="single-team-member">
              <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
                <a href="{{ route('speakers')."/".$speaker->id }}"><img
                      src="{{ Storage::disk('public')->url($speaker->photo) }}" alt=""></a>
                <div class="stm-icon">
                  <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="stm-text wow fadeInDown" data-wow-delay=".5s">
                <h5>{{ $speaker->name }}</h5>
                <p>{{ $speaker->job_title }}</p>
              </div>
            </div>
          </div>
        @endforeach
      </div>
      <div class="row col-md-12 m-auto">
        @foreach($data["chairmen_2"] as $speaker)
          <div class="col-md-3">
            <div class="single-team-member">
              <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
                <a href="{{ route('speakers')."/".$speaker->id }}"><img
                      src="{{ Storage::disk('public')->url($speaker->photo) }}" alt=""></a>
                <div class="stm-icon">
                  <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="stm-text wow fadeInDown" data-wow-delay=".5s">
                <h5>{{ $speaker->name }}</h5>
                <p>{{ $speaker->job_title }}</p>
              </div>
            </div>
          </div>

        @endforeach
      </div>
      <div class="row">
        @foreach($data["chairmen_3"] as $speaker)
{{--          <div class="col-md-2" style="padding: 0">--}}
{{--            <div class="single-team-member">--}}
{{--              <div class="stm-text wow fadeInDown" data-wow-delay=".5s">--}}
{{--                <h5>{{ $speaker->name }}</h5>--}}
{{--                                  <p>{{ $speaker->job_title }}</p>--}}
{{--              </div>--}}
{{--            </div>--}}
{{--          </div>          --}}
          <div class="col-md-2">
            <div class="card" style="border: 0;
    background: #fff;
    box-shadow: 0px 6px 40px 0px rgba(0, 0, 0, 0.08);
    padding: 10px !important;
    max-height: 72px;
    overflow: hidden;
    margin-bottom: 15px;
">                                <h5>{{ $speaker->name }}</h5>
              <p>{{ $speaker->job_title }}</p>

            </div>
          </div>
        @endforeach
      </div>
    </div>
  </section>

@endsection
