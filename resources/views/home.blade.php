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
                        <span><i class="far fa-clock"></i> {{ date('d M, Y', strtotime($data["event"]["date"])) }}</span>
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
            <a href="@guest {{ route('register') }}?speaker=2 @endauth @auth{{ route('cabinet') }}@endauth" class="btn-2">Join to Us</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="amout-img">
            <img src="{{ Storage::disk('public')->url($data->description_img) }}" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /About Section-->

  @if($data["event"]["users"])
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
              @foreach($data["event"]["users"] as $user)
                <div class="swiper-slide">
                  <div class="col-md-12">
                    <div class="single-team-member">
                      <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
                        <a href="{{ route('speakers')."/".$user->id }}">
                          {{ $user->getMedia('avatar')->first() }}
                        </a>
                        <div class="stm-icon">
                          <ul>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="stm-text wow fadeInDown" data-wow-delay=".5s">
                        <h5>{{ $user->degree }} {{ $user->name }}</h5>
                        <h6>{{ $user->job_title }}</h6>
                        <p>{{ $user->company }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              @endforeach
              <div class="swiper-pagination swp-pg-brands"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Team Section-->
  @endif





  <!--Schedule Section-->
  <section class="schedule schedule2" style="display: none">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="event-schedule-top">
            <h1>Event Schedule </h1>
            <p>Welcome to the dedicated to building remarkable Schedule!</p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="event-schedule">
            <nav>
              <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-terms-tab" data-toggle="tab" href="#nav-terms" role="tab"
                   aria-controls="nav-terms" aria-selected="true">
                  <div class="es-day">
                    <div class="es-day-details">
                      <span>1</span>
                    </div>
                    <div class="es-day-details2">
                      <span>Day</span><br>
                      <span>11th January 2023</span>
                    </div>
                  </div>
                </a>
                <a class="nav-item nav-link" id="nav-privacy-tab" data-toggle="tab" href="#nav-privacy" role="tab"
                   aria-controls="nav-privacy" aria-selected="false">
                  <div class="es-day">
                    <div class="es-day-details">
                      <span>2</span>
                    </div>
                    <div class="es-day-details2">
                      <span>Day</span><br>
                      <span>12th January 2023</span>
                    </div>
                  </div>
                </a>
                <a class="nav-item nav-link" id="nav-agreement-tab" data-toggle="tab" href="#nav-agreement" role="tab"
                   aria-controls="nav-agreement" aria-selected="false">
                  <div class="es-day">
                    <div class="es-day-details">
                      <span>3</span>
                    </div>
                    <div class="es-day-details2">
                      <span>Day</span><br>
                      <span>13th January 2023</span>
                    </div>
                  </div>
                </a>
              </div>
            </nav>
            <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-terms" role="tabpanel" aria-labelledby="nav-terms-tab">
                <div class="event-details">
                  <div class="ed-img">
                    <img src="http://caspian/eventdia/img/team/team-member7.jpg" alt="">
                    <a href="#">
                      <h5>Hubert Aguilar</h5>
                    </a>
                    <p>CEO & Founder</p>
                  </div>
                  <div class="ed-content">
                    <h5>Business Management Techniques</h5>
                    <p>This presentation will describe seven essential actions that could unleash the power of
                      prevention and substantially reduce the prevalence of behavioral health problems and inequality in
                      health and behavior outcomes in the U.S. population. substantially reduce the prevalence of
                      behavio.</p>
                    <span><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, Canada</span>
                    <span><i class="far fa-clock"></i> 9:00 am - 11:00 am</span>
                  </div>
                </div>
                <div class="event-details">
                  <div class="ed-img">
                    <img src="http://caspian/eventdia/img/team/team-member8.jpg" alt="">
                    <a href="#">
                      <h5>Frances Chandler</h5>
                    </a>
                    <p>Analisis </p>
                  </div>
                  <div class="ed-content">
                    <h5>How to Build a Successful Startup</h5>
                    <p>We care for more than 200 thousand exhibits spanning billions of years and welcome more than five
                      million way visitors annually. We care for more than 200 thousand exhibits spanning billions of
                      years and welcome more than five million way visitors annually.We care for more than 200 thousand
                      exhibits spanning.</p>
                    <span><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, Canada</span>
                    <span><i class="far fa-clock"></i> 11:00 am - 1:00 am</span>
                  </div>
                </div>
                <div class="event-details">
                  <div class="ed-img">
                    <img src="http://caspian/eventdia/img/team/team-member9.jpg" alt="">
                    <a href="#">
                      <h5>Thomas Childers</h5>
                    </a>
                    <p>CEO & Founder</p>
                  </div>
                  <div class="ed-content">
                    <h5>Managing International Enterprises</h5>
                    <p>In order to save time you have to break down the content strategy for the event or conference you
                      are planning step by step. Creating this process from scratch will take the longest amount of time
                      to build, but once you have content production.</p>
                    <span><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, Canada</span>
                    <span><i class="far fa-clock"></i> 1:00 am - 3:00 am</span>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-privacy" role="tabpanel" aria-labelledby="nav-privacy-tab">
                <div class="event-details">
                  <div class="ed-img">
                    <img src="http://caspian/eventdia/img/team/team-member18.jpg" alt="">
                    <a href="#">
                      <h5>Tommy Martinez</h5>
                    </a>
                    <p>Founder</p>
                  </div>
                  <div class="ed-content">
                    <h5>Managing International Enterprises</h5>
                    <p>In order to save time you have to break down the content strategy for the event or conference you
                      are planning step by step. Creating this process from scratch will take the longest amount of time
                      to build, but once you have content production.</p>
                    <span><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, Canada</span>
                    <span><i class="far fa-clock"></i> 9:00 am - 11:00 am</span>
                  </div>
                </div>
                <div class="event-details">
                  <div class="ed-img">
                    <img src="http://caspian/eventdia/img/team/team-member14.jpg" alt="">
                    <a href="#">
                      <h5>B.Chandler</h5>
                    </a>
                    <p>Analisis </p>
                  </div>
                  <div class="ed-content">
                    <h5>Managing Your Successful Grow</h5>
                    <p>We care for more than 200 thousand exhibits spanning billions of years and welcome more than five
                      million way visitors annually. We care for more than 200 thousand exhibits spanning billions of
                      years and welcome more than five million way visitors annually.We care for more than 200 thousand
                      exhibits spanning.</p>
                    <span><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, Canada</span>
                    <span><i class="far fa-clock"></i> 11:00 am - 1:00 am</span>
                  </div>
                </div>
                <div class="event-details">
                  <div class="ed-img">
                    <img src="http://caspian/eventdia/img/team/team-member13.jpg" alt="">
                    <a href="#">
                      <h5>Hubert Aguilar</h5>
                    </a>
                    <p>CEO & Founder</p>
                  </div>
                  <div class="ed-content">
                    <h5>Build a Successful Startup</h5>
                    <p>This presentation will describe seven essential actions that could unleash the power of
                      prevention and substantially reduce the prevalence of behavioral health problems and inequality in
                      health and behavior outcomes in the U.S. population. substantially reduce the prevalence of
                      behavio.</p>
                    <span><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, Canada</span>
                    <span><i class="far fa-clock"></i> 1:00 am - 3:00 am</span>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-agreement" role="tabpanel" aria-labelledby="nav-agreement-tab">
                <div class="event-details">
                  <div class="ed-img">
                    <img src="http://caspian/eventdia/img/team/team-member15.jpg" alt="">
                    <a href="#">
                      <h5>Hubert Aguilar</h5>
                    </a>
                    <p>CEO & Founder</p>
                  </div>
                  <div class="ed-content">
                    <h5>Business Management Techniques</h5>
                    <p>This presentation will describe seven essential actions that could unleash the power of
                      prevention and substantially reduce the prevalence of behavioral health problems and inequality in
                      health and behavior outcomes in the U.S. population. substantially reduce the prevalence of
                      behavio.</p>
                    <span><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, Canada</span>
                    <span><i class="far fa-clock"></i> 9:00 am - 11:00 am</span>
                  </div>
                </div>
                <div class="event-details">
                  <div class="ed-img">
                    <img src="http://caspian/eventdia/img/team/team-member17.jpg" alt="">
                    <a href="#">
                      <h5>Frances Chandler</h5>
                    </a>
                    <p>Analisis </p>
                  </div>
                  <div class="ed-content">
                    <h5>How to Build a Successful Startup</h5>
                    <p>We care for more than 200 thousand exhibits spanning billions of years and welcome more than five
                      million way visitors annually. We care for more than 200 thousand exhibits spanning billions of
                      years and welcome more than five million way visitors annually.We care for more than 200 thousand
                      exhibits spanning.</p>
                    <span><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, Canada</span>
                    <span><i class="far fa-clock"></i> 11:00 am - 1:00 am</span>
                  </div>
                </div>
                <div class="event-details">
                  <div class="ed-img">
                    <img src="http://caspian/eventdia/img/team/team-member16.jpg" alt="">
                    <a href="#">
                      <h5>Thomas Childers</h5>
                    </a>
                    <p>CEO & Founder</p>
                  </div>
                  <div class="ed-content">
                    <h5>Managing International Enterprises</h5>
                    <p>In order to save time you have to break down the content strategy for the event or conference you
                      are planning step by step. Creating this process from scratch will take the longest amount of time
                      to build, but once you have content production.</p>
                    <span><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, Canada</span>
                    <span><i class="far fa-clock"></i> 1:00 am - 3:00 am</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="#" class="btn-2">SEE MORE PROGRAM</a>
  </section>
  <!--/Schedule Section-->

  <!--Pricing Section-->
  <section id="ticket" class="pricing pricing2" style="display: none">
    <div class="pp-2-bg">
      <div class="pricing-top">
        <h1>Get Your Ticket</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="single-priceing wow fadeInUp" data-wow-delay=".2s">
              <h5>Basic Pass</h5>
              <h1>$60</h1>
              <p>Regular Seating
                Comfortable Seat
                Coffee Break
                Photos Allowed
                One Workshop
                Certificate</p>
              <span>Price Excluding 20% VAT</span>
              <a href="#" class="btn-3" data-toggle="modal" data-target="#myModal">BUY TICKET</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="single-priceing wow fadeInUp" data-wow-delay=".5s">
              <h5>Standard Pass</h5>
              <h1>$90</h1>
              <p>Two Day Conference Ticket
                Coffee-break & Networing
                Posters Session
                Lunch </p>
              <span>Price Excluding 20% VAT</span>
              <a href="#" class="btn-3 active" data-toggle="modal" data-target="#myModal">BUY TICKET</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="single-priceing wow fadeInUp" data-wow-delay=".8s">
              <h5>golden Pass</h5>
              <h1>$99</h1>
              <p>ThreeDay Conference Ticket
                Comfortable Seat
                Coffee Break
                Photos Allowed
                One </p>
              <span>Price Excluding 20% VAT</span>
              <a href="#" class="btn-3" data-toggle="modal" data-target="#myModal">BUY TICKET</a>
            </div>
          </div>
        </div>
      </div>

      <!-- The Modal -->
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Information</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <!--contact Us Section-->
            <section class="contact-us no-mar">
              <div class="contact-information">
                <form id="cf" method="POST"
                      action="https://demo.voidcoders.com/htmldemo/eventdia/main-files/contact.php">
                  <div class="form-group cfdb1">
                    <input type="text" class="form-control cp1" name="name" id="name" placeholder="Name"
                           onfocus="this.placeholder = ''" onblur="this.placeholder ='Name'">
                  </div>
                  <div class="form-group cfdb1">
                    <input type="text" class="form-control cp1" name="email" id="email" placeholder="Email"
                           onfocus="this.placeholder = ''" onblur="this.placeholder ='Email'">
                  </div>
                  <div class="form-group cfdb1">
                    <input type="text" class="form-control cp1" name="website" id="website" placeholder="Website"
                           onfocus="this.placeholder = ''" onblur="this.placeholder ='Website'">
                  </div>
                  <div class="form-group cfdb1">
                  <textarea rows="8" class="form-control cp1" name="msg" id="msg" placeholder="Comment"
                            onfocus="this.placeholder =''" onblur="this.placeholder ='Comment'"></textarea>
                  </div>
                  <button type="submit" id="submit">Send Message</button>
                  <div class="col-md-12 text-center">
                    <div class="cf-msg"></div>
                  </div>
                </form>
              </div>
            </section>
            <!--/contact Us Section-->

          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/Pricing Section-->

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
                <a href="{{ route('speakers')."/".$sponsor->id }}"><img
                      src="{{ Storage::disk('public')->url($sponsor->photo) }}" alt=""></a>
                <div class="stm-icon">
                  <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="stm-text wow fadeInDown" data-wow-delay=".5s">
                <h5>{{ $sponsor->name }}</h5>
                <p>{{ $sponsor->job_title }}</p>
              </div>
            </div>
          </div>
        @endforeach
      </div>
    </div>
  </section>


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
            <div class="single-partner">
              <a href="{{ $partner->url }}"></a>
              @if($media)
                {{ $media }}
              @endif
            </div>
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
            <div class="single-partner">
              <a href="{{ $partner->url }}"></a>
              @if($media)
                {{ $media }}
              @endif
            </div>
          </div>
        @endforeach
      </div>
    </div>

  </section>
  <!--- /Partner Section-->


@endsection