@extends('layouts.app')

@section('content')

  <style>
    .stm-text {
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

    .card h5 {
      font-size: 15px !important;
    }
    .about-content{
      overflow-wrap: break-word;
    }
    section.about-section .about-content p {
      padding: 0px 0px 10px 0px;
    }
    h1 {
      margin-bottom: 20px;
    }

    .swiper-container {
      width: 100%;
      height: max-content;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 50px !important
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center
    }

    .eventDescription {
      margin-top: 10px;
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 0px;
      color: #fff;
    }
  </style>

  @if($data["eventBanners"])
    @if(count($data["eventBanners"]))
      <section class="hero-1">
        <div class="hero-slide1">
          @foreach($data["eventBanners"] as $image)
            <div class="slide">
              <div class="hero-slide-wrapper">
                <img src="{{ Storage::disk('mediaFiles')->url($image->id."/".$image->file_name) }}" alt=""
                     class="h-bag">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="hero-slide-content">
                        <h1>{{$data["event"]["name"]}}</h1>
                        <span><i class="fas fa-map-marker-alt"></i> {{$data["event"]["address"]}}</span>
                        <span><i
                              class="far fa-clock"></i> {{ date('d M, Y', strtotime($data["event"]["date"])) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          @endforeach
        </div>
      </section>
    @else
      <section class="hero-2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-content">
                <h1 class="wow fadeInUp" data-wow-delay=".3s">{{$data["event"]["name"]}}</h1>
                <span class="wow fadeInUp" data-wow-delay=".8s"><i class="fas fa-map-marker-alt"></i> {{$data["event"]["address"]}}</span>
                <span class="wow fadeInUp" data-wow-delay=".8s"><i class="far fa-clock"></i> {{ date('d M, Y', strtotime($data["event"]["date"])) }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    @endif
    <!-- Counter Section-->
    <section class="counter">
      <div class="container">
        <div class="row">
          <div class="col-md-7 offset-md-1 m-auto">
            <div id="clockdiv">
              <div class="time">
                <span class="days"></span>
                <div class="smalltext">Days</div>
              </div>
              <div class="dot">:</div>
              <div class="time">
                <span class="hours"></span>
                <div class="smalltext">Hrs</div>
              </div>
              <div class="dot">:</div>
              <div class="time">
                <span class="minutes"></span>
                <div class="smalltext">Minutes</div>
              </div>
              <div class="dot">:</div>
              <div class="time">
                <span class="seconds"></span>
                <div class="smalltext">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Counter Section-->
  @else
    <section class="hero-2">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="hero-content">
              <h1 class="wow fadeInUp" data-wow-delay=".3s">Caspian forum</h1>
              {{--              <h1 class="wow fadeInUp" data-wow-delay=".5s"></h1>--}}
              {{--              <span class="wow fadeInUp" data-wow-delay=".8s"><i class="fas fa-map-marker-alt"></i></span>--}}
              {{--              <span class="wow fadeInUp" data-wow-delay=".8s"><i class="far fa-clock"></i></span>--}}
            </div>
          </div>
        </div>
      </div>
    </section>
  @endif


  <!-- About Section-->
  <section class="about-section ab-section2">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="about-content">
            {!! $data->description !!}
            <br>
            <a href="@guest {{ route('register') }}?speaker=2 @endauth @auth{{ route('about') }}@endauth"
               class="btn-2">Join to Us</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="amout-img">
              @if($data->hasMedia('description_img'))
                {{ $data->media('description_img')->first() }}
              @endif
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /About Section-->
  @if($data["event"])
    @if($data["speakers"]->count() > 0)
      <!-- Team Section-->
      <section class="our-team ot-inner">
        <div class="ot-top">
          <h1>Who Speaking?</h1>
          <p>Welcome to the dedicated to building remarkable Speakers!</p>
        </div>
        <div class="container">
          <div class="row">
            <div class="swiper-container h-brands swp-cnt-brands">
              <div class="swiper-wrapper">
                @foreach($data["speakers"] as $user)
                  <div class="swiper-slide">
                    <div class="col-md-12">
                      <div class="single-team-member">
                        <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
                          <a href="{{ route('speakers')."/".$user->id }}">
                            {{ $user->getMedia('avatars')->first() }}
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
                  </div>
                @endforeach
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /Team Section-->
    @endif
  @endif


  @if($data["sponsors"]->count() > 0)
    <section class="our-team ot-inner">
      <div class="ot-top">
        <span>WHO HELPS US</span>
        <h1>Organizers of the event </h1>
      </div>
      <div class="container">
        <div class="row col-md-8 m-auto">
          @foreach($data["sponsors"] as $sponsor)
            <div class="col-md-6">
              <div class="single-team-member">
                <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
                  <a>
                    {{$sponsor->getFirstMedia('avatars')}}
                  </a>
                  <div class="stm-icon">
                    <ul>
                      @foreach($sponsor->socialNetworks() as $socialNetwork)
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
                  <h5>{{ $sponsor->degree->name ?? '' }} {{ $sponsor->name }}</h5>
                  <h6>{{ $sponsor->job_title }}</h6>
                  <p>{{ $sponsor->company }}</p>
                </div>
              </div>
            </div>
          @endforeach
        </div>
      </div>
    </section>
  @endif

  <!--- Partner Section -->
  <section class="partner partner2 partner3 sponsor">
    <span>WHO HELPS US</span>
    <h1>Partners</h1>

    <h3 style="text-decoration: underline">Gold Partners</h3>
    <div class="container">
      <div class="row">
        @foreach($data["partnersGold"] as $partner)
          @php $media = $partner->getMedia('partners')->first(); @endphp
          <div class="col-md-3">
            <a target="_blank" href="{{ $partner->url }}">
              <div class="single-partner">
                @if($media)
                  {{ $media }}
                @endif
              </div>
            </a>
          </div>
        @endforeach
      </div>
    </div>

    <h3 style="text-decoration: underline">Partners</h3>
    <div class="container">
      <div class="row">
        @foreach($data["partners"] as $partner)
          @php $media = $partner->getMedia('partners')->first(); @endphp
          <div class="col-md-2">
            <a target="_blank" href="{{ $partner->url }}">
              <div class="single-partner">
                @if($media)
                  {{ $media }}
                @endif
              </div>
            </a>
          </div>
        @endforeach
      </div>
    </div>

  </section>
  <!--- /Partner Section-->


@endsection