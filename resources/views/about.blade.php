@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <section class="inner-hero inner-hero2">
    <div class="container">
      <div class="ih-content">
        <h1 class=" wow fadeInUp" data-wow-delay=".4s">About Us</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">About Us</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->

  <!-- About Section-->
  <section class="about-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="about-content">
            {!! $data->body !!}
          </div>
        </div>
      </div>
    </div>


  <!-- Team Section-->
  <section class="our-team ot-inner">
    <div class="ot-top">
      <span>Our Team</span>
      <h1>People Behind the World </h1>
      <h1>Digital Conference</h1>
    </div>
    <div class="container">
      <div class="row">
        @foreach(json_decode($data->team) as $member)
          <div class="col-md-4">
            <div class="single-team-member">
              <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
                <a><img src="{{ Storage::disk('public')->url($member->attributes->photo) }}" alt=""></a>
                <div class="stm-icon">
                  @if($member->attributes->social_networks)
                    <ul>
                      @foreach($member->attributes->social_networks as $network)
                        <li>
                          <a target="_blank" href="{{ $network->attributes->link }}">
                            <i class="fab {{ $network->attributes->network }}"></i>
                          </a>
                        </li>
                      @endforeach
                    </ul>
                  @endif
                </div>
              </div>
              <div class="stm-text wow fadeInDown" data-wow-delay=".5s">
                <h4>{{ $member->attributes->name }}</h4>
                <p>{{ $member->attributes->job_title }}</p>
              </div>
            </div>
          </div>
        @endforeach
      </div>
    </div>
  </section>
  <!-- /Team Section-->


@endsection
<script>

</script>