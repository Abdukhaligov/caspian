@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <section class="inner-hero">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Speakers</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Speakers</li>
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
      <div class="row">
        @foreach($data["speakers"] as $speaker)
          <div class="col-md-3">
            <div class="single-team-member">
              <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
                <a href="{{ route('speakers')."/".$speaker->id }}"><img src="{{ Storage::disk('public')->url($speaker->photo) }}" alt=""></a>
                <div class="stm-icon">
                  <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="stm-text wow fadeInDown" data-wow-delay=".5s">
                <h4>{{ $speaker->name }}</h4>
                <p>{{ $speaker->job_title }}</p>
              </div>
            </div>
          </div>
        @endforeach
      </div>
    </div>
  </section>

  <!-- Blog Section-->
  <section class="blog blog-3">
    <div class="container">
      <div class="blog-top">
        <span>From our blog</span>
        <h1>Laest News</h1>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="single-blog wow fadeInUp" data-wow-delay=".4s">
            <a href="#">
              <div class="sb-img">
                <img src="http://caspian/eventdia/img/blog/blog-1.jpg" alt="">
              </div>
            </a>
            <div class="sb-content">
              <span>September 30, 2019 </span>
              <a href="#">
                <h3>Top Conference: Clients in Control Building Dmand</h3>
              </a>
              <p>This presentation will describe seven essential actions that could unleash... ..power of </p>
              <a href="#">READ MORE</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-blog wow fadeInUp" data-wow-delay=".8s">
            <a href="#">
              <div class="sb-img">
                <img src="http://caspian/eventdia/img/blog/blog-2.jpg" alt="">
              </div>
            </a>
            <div class="sb-content">
              <span>September 30, 2019 </span>
              <a href="#">
                <h3>Top Conference: Clients in Control Building Dmand</h3>
              </a>
              <p>This presentation will describe seven essential actions that could unleash... ..power of </p>
              <a href="#">READ MORE</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-blog wow fadeInUp" data-wow-delay="1.2s">
            <a href="#">
              <div class="sb-img">
                <img src="http://caspian/eventdia/img/blog/blog-3.jpg" alt="">
              </div>
            </a>
            <div class="sb-content">
              <span>September 30, 2019 </span>
              <a href="#">
                <h3>Top Conference: Clients in Control Building Dmand</h3>
              </a>
              <p>This presentation will describe seven essential actions that could unleash... ..power of </p>
              <a href="#">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  <!-- /Blog Section-->


@endsection
