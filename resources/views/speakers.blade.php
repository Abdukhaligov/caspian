\@extends('layouts.app')

@section('content')
  <style>
    .stm-text{
      padding: 10px !important;
      max-height: 130px;
      overflow: hidden;
    }
    .stm-text p {
      font-size: 13px !important;
      line-height: 20px !important;
    }
    .stm-text h5 {
      font-size: 17px;
      line-height: 20px !important;
    }

    .stm-text h6 {
      font-weight: normal;
      line-height: 20px !important;
    }
    .card p {
      font-size: 12px !important;
      line-height: 32px;
    }
    .card h5{
      font-size:  15px !important;
    }
    section.our-team .single-team-member .stm-img {
      max-height: 270px;
      max-width: 270px;
      overflow: hidden;
    }
  </style>
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
        @foreach($data["speakers"] as $user)
          <div class="col-md-3">
            <div class="single-team-member">
              <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
                <a href="{{ route('speakers')."/".$user->id }}">
                  @if($user->getFirstMedia('avatars'))
                    {{ $user->getFirstMedia('avatars') }}
                  @else
                    <img src="{{ Storage::disk('public')->url('user.svg') }}" alt="">
                  @endif
                </a>
                <div class="stm-icon">
                  <ul>
                    @foreach($user->socialNetworks() as $socialNetwork)
                      <li>
                        <a target="_blank" href="{{ $socialNetwork->link }}">
                          <i class="fab {{ $socialNetwork->network }}"></i>
                        </a>
                      </li>
                    @endforeach
                  </ul>
                </div>
              </div>
              <div class="stm-text wow fadeInDown" data-wow-delay=".5s">
                <h5>{{ $user->degree->name ?? '' }} {{ $user->name }}</h5>
                <h6>{{ $user->job_title }}</h6>
                <p>{{ $user->company }}</p>
              </div>
            </div>
          </div>
        @endforeach
      </div>
    </div>
  </section>


@endsection
