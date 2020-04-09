@extends('layouts.init')

@section('content')

  <div class="banner-active">
    @if($data["banners"])
      @foreach($data["banners"] as $banner)
        <div class="single-banner bg_cover" style="background-image: url({{  Storage::disk('public')->url($banner->attributes->img) }});">
          <div class="banner-overlay">
            <div class="container">
              <div class="row">
                <div class="col-lg-9">
                  <div class="banner-content">
                    <span data-animation="fadeInLeft" data-delay="0.5s">{{ $banner->attributes->category }}</span>
                    <h1 data-animation="fadeInLeft" data-delay="0.9s" class="title">{!!  $banner->attributes->title !!}</h1>
                    <p data-animation="fadeInLeft" data-delay="1.3s">{{ $banner->attributes->subtitle }}</p>
                    @if($banner->attributes->btn_link)
                      <a data-animation="fadeInUp" data-delay="1.6s" class="main-btn" target="_blank" href="{{ $banner->attributes->btn_link }}">{!! $banner->attributes->btn_title !!}</a>
                    @endif
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      @endforeach
    @endif
  </div>


  <div class="who-we-are-area pt-110 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0s">
          <div class="section-title">
            <span>who we are</span>
            <h2 class="title">We Work Hard Play Hard Explore Creative Mmind</h2>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0s">
          <div class="section-title">
            <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem-quelaudantium, totam rem
              aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quiavoluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores
              eos ratione voluptatem sequi nesciunt eque porroe. </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 wow slideInUp" data-wow-duration=".5s" data-wow-delay="0s">
          <div class="what-we-do-item text-center mt-30">
            <i class="fal fa-laptop-code"></i>
            <h5 class="title">IT Soluations</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
            <a href="case-details.html"><i class="fal fa-long-arrow-right"></i></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 wow slideInUp" data-wow-duration="1s" data-wow-delay="0s">
          <div class="what-we-do-item text-center mt-30">
            <i class="fal fa-fingerprint"></i>
            <h5 class="title">Security System</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
            <a href="case-details.html"><i class="fal fa-long-arrow-right"></i></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s">
          <div class="what-we-do-item text-center mt-30">
            <i class="fal fa-chalkboard"></i>
            <h5 class="title">Web Development</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
            <a href="case-details.html"><i class="fal fa-long-arrow-right"></i></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 wow slideInUp" data-wow-duration="2s" data-wow-delay="0s">
          <div class="what-we-do-item text-center mt-30">
            <i class="fal fa-database"></i>
            <h5 class="title">Database Security</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
            <a href="case-details.html"><i class="fal fa-long-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="what-we-are-shape-1">
      <img src="{{ asset('omnivus/images/what-we-are-shape-1.png') }}" alt="shape">
    </div>
    <div class="what-we-are-shape-2">
      <img src="{{ asset('omnivus/images/what-we-are-shape-2.png') }}" alt="shape">
    </div>
  </div>


  <div class="solution-area bg_cover" style="background-image: url({{ asset('omnivus/images/solution-bg.jpg') }});">
    <div class="solution-overlay pt-120">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="solution-box">
              <div class="solution-content">
                <h3 class="title">Get Better Solution For Your Business</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                  totam rem aperiam eaque ipsa</p>
                <div class="solution-play text-right mr-30 d-block d-lg-none">
                  <a class="video-popup" href="www.youtube.com/watch05ac.html?v=TdSA7gkVYU0"><i class="fas fa-play"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="solution-play text-right mr-30 d-none d-lg-block">
              <a class="video-popup" href="www.youtube.com/watch05ac.html?v=TdSA7gkVYU0"><i class="fas fa-play"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="services-title-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="services-title-item text-center">
            <div class="ring-shape"></div>
            <span>Our latest services</span>
            <h3 class="title">We Offer Better Soluation For Your IT Business</h3>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="latest-services-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-9 wow fadeInUp" data-wow-duration=".5s" data-wow-delay="0s">
          <div class="single-services mt-30 mb-55">
            <div class="services-thumb">
              <img src="{{ asset('omnivus/images/services-4.1.jpg') }}" alt="">
            </div>
            <div class="services-content">
              <h4 class="title">Desktop Computing</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiuto-tam
                rem aperiam eaque ipsa quae inventore</p>
              <a href="services-details.html">Read More <i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-9 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0s">
          <div class="single-services mt-30 mb-55">
            <div class="services-thumb">
              <img src="{{ asset('omnivus/images/services-4.2.jpg') }}" alt="">
            </div>
            <div class="services-content">
              <h4 class="title">Infrastructure Planning</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiuto-tam
                rem aperiam eaque ipsa quae inventore</p>
              <a href="services-details.html">Read More <i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-9 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0s">
          <div class="single-services mt-30 mb-55">
            <div class="services-thumb">
              <img src="{{ asset('omnivus/images/services-4.3.jpg') }}" alt="">
            </div>
            <div class="services-content">
              <h4 class="title">Big Data & Analytics</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiuto-tam
                rem aperiam eaque ipsa quae inventore</p>
              <a href="services-details.html">Read More <i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-9 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s">
          <div class="single-services mt-30 mb-55">
            <div class="services-thumb">
              <img src="{{ asset('omnivus/images/services-4.4.jpg') }}" alt="">
            </div>
            <div class="services-content">
              <h4 class="title">It Management System</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiuto-tam
                rem aperiam eaque ipsa quae inventore</p>
              <a href="services-details.html">Read More <i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-9 wow fadeInUp" data-wow-duration="2.5s" data-wow-delay="0s">
          <div class="single-services mt-30 mb-55">
            <div class="services-thumb">
              <img src="{{ asset('omnivus/images/services-4.5.jpg') }}" alt="">
            </div>
            <div class="services-content">
              <h4 class="title">Web Development</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiuto-tam
                rem aperiam eaque ipsa quae inventore</p>
              <a href="services-details.html">Read More <i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-9 wow fadeInUp" data-wow-duration="3s" data-wow-delay="0s">
          <div class="single-services mt-30 mb-55">
            <div class="services-thumb">
              <img src="{{ asset('omnivus/images/services-4.6.jpg') }}" alt="">
            </div>
            <div class="services-content">
              <h4 class="title">Dedicated IT Solution</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiuto-tam
                rem aperiam eaque ipsa quae inventore</p>
              <a href="services-details.html">Read More <i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="why-choose-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center">
            <span>why choose us</span>
            <h2 class="title">We Are Very Different Form Others IT Solutions</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-9 wow slideInUp" data-wow-duration=".5s" data-wow-delay="0s">
          <div class="single-choose text-center mt-30">
            <div class="icon-box">
              <span></span>
              <i class="fal fa-laptop-code"></i>
            </div>
            <h4 class="title">Modify Whole System</h4>
            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam rem
              aperiam eaque ipsa</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-9 wow slideInUp" data-wow-duration="1s" data-wow-delay="0s">
          <div class="single-choose text-center mt-30">
            <div class="icon-box">
              <span></span>
              <i class="fal fa-server"></i>
            </div>
            <h4 class="title">Beneficial Strategies</h4>
            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam rem
              aperiam eaque ipsa</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-9 wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s">
          <div class="single-choose text-center mt-30">
            <div class="icon-box">
              <span></span>
              <i class="fal fa-tools"></i>
            </div>
            <h4 class="title">Automated Software</h4>
            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam rem
              aperiam eaque ipsa</p>
          </div>
        </div>
      </div>
    </div>
    <div class="choose-dot">
      <img src="{{ asset('omnivus/images/choose-dot.png') }}" alt="">
    </div>
    <div class="choose-shape">
      <img src="{{ asset('omnivus/images/choose-shape.png') }}" alt="">
    </div>
  </div>


  <div class="case-studies-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="section-title">
            <span>Latest Case Studies</span>
            <h2 class="title">Reads Our Recent Case Studies </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid pl-70 pr-70">
      <div class="row no-gutters case-studies-active">
        <div class="col-lg-3">
          <div class="single-case-studies mt-30">
            <img src="{{ asset('omnivus/images/case-studies-1.jpg') }}" alt="case-studies">
            <div class="case-overlay">
              <div class="item">
                <span>IT / Solutions </span>
                <h5 class="title">How To Improve <br> IT knowledge</h5>
              </div>
              <a href="case-details.html"><i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="single-case-studies mt-30">
            <img src="{{ asset('omnivus/images/case-studies-2.jpg') }}" alt="case-studies">
            <div class="case-overlay">
              <div class="item">
                <span>Product Design</span>
                <h5 class="title">Develop Your IT <br> Business Growth</h5>
              </div>
              <a href="case-details.html"><i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="single-case-studies mt-30">
            <img src="{{ asset('omnivus/images/case-studies-3.jpg') }}" alt="case-studies">
            <div class="case-overlay">
              <div class="item">
                <span>Consulting</span>
                <h5 class="title">Management Your <br>It Solutions System</h5>
              </div>
              <a href="case-details.html"><i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="single-case-studies mt-30">
            <img src="{{ asset('omnivus/images/case-studies-4.jpg') }}" alt="case-studies">
            <div class="case-overlay">
              <div class="item">
                <span>Software Solutiona</span>
                <h5 class="title">How To Control <br>Your IT Customer</h5>
              </div>
              <a href="case-details.html"><i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="single-case-studies mt-30">
            <img src="{{ asset('omnivus/images/case-studies-2.jpg') }}" alt="case-studies">
            <div class="case-overlay">
              <div class="item">
                <span>Product Design</span>
                <h5 class="title">Develop Your IT <br> Business Growth</h5>
              </div>
              <a href="case-details.html"><i class="fal fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="team-member-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center">
            <span>our team member</span>
            <h2 class="title">Meet Our Exclusive Leadership</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-team-member mt-30">
            <img src="{{ asset('omnivus/images/team-member-1.jpg') }}" alt="team-member">
            <div class="team-member-overlay">
              <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-behance"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
              </ul>
              <h4 class="title">David Jhon Korla</h4>
              <span>IT Consultant</span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-team-member mt-30">
            <img src="{{ asset('omnivus/images/team-member-2.jpg') }}" alt="team-member">
            <div class="team-member-overlay">
              <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-behance"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
              </ul>
              <h4 class="title">David Jhon Korla</h4>
              <span>IT Consultant</span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-team-member mt-30">
            <img src="{{ asset('omnivus/images/team-member-3.jpg') }}" alt="team-member">
            <div class="team-member-overlay">
              <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-behance"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
              </ul>
              <h4 class="title">David Jhon Korla</h4>
              <span>IT Consultant</span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-team-member mt-30">
            <img src="{{ asset('omnivus/images/team-member-4.jpg') }}" alt="team-member">
            <div class="team-member-overlay">
              <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-behance"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
              </ul>
              <h4 class="title">David Jhon Korla</h4>
              <span>IT Consultant</span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-team-member mt-30">
            <img src="{{ asset('omnivus/images/team-member-5.jpg') }}" alt="team-member">
            <div class="team-member-overlay">
              <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-behance"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
              </ul>
              <h4 class="title">David Jhon Korla</h4>
              <span>IT Consultant</span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-team-member mt-30">
            <img src="{{ asset('omnivus/images/team-member-6.jpg') }}" alt="team-member">
            <div class="team-member-overlay">
              <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-behance"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
              </ul>
              <h4 class="title">David Jhon Korla</h4>
              <span>IT Consultant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="meet-us-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="meet-us-item bg_cover d-flex align-items-center justify-content-between"
               style="background-image: url({{ asset('omnivus/images/meet-us-bg.jpg') }})">
            <h2 class="title">Preparing For Your <br> Business Success</h2>
            <a class="main-btn" href="#">Meet With Us <i class="fal fa-long-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="latest-news-area gray-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center">
            <span>latest news</span>
            <h2 class="title">Read Our Latest News & Blog</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="letast-news-grid white-bg  ml-40 mr-40">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="latest-news">
              <div class="row">
                <div class="col-lg-4 col-md-6 wow slideInUp" data-wow-duration=".5s" data-wow-delay="0s">
                  <div class="letest-news-item mt-30">
                    <span>By Admin, 05 Aug 2019</span>
                    <h4 class="title"><a href="blog-details.html">Monthly Web Development Update Design Ethics & Clarity
                        Over Solution System</a></h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sip erntur aut odit aut fugit, sed quia consequunturm
                      agni dolores eos qui ratione voluptatem</p>
                    <a class="main-btn" href="blog-details.html">Read More <i class="fal fa-long-arrow-right"></i></a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 wow slideInUp" data-wow-duration="1s" data-wow-delay="0s">
                  <div class="letest-news-item mt-30">
                    <span>By Admin, 05 Aug 2019</span>
                    <h4 class="title"><a href="blog-details.html">Design System: What It Is And How To Create One Using
                        Indigo Design Sence</a></h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sip erntur aut odit aut fugit, sed quia consequunturm
                      agni dolores eos qui ratione voluptatem</p>
                    <a class="main-btn" href="blog-details.html">Read More <i class="fal fa-long-arrow-right"></i></a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s">
                  <div class="letest-news-item mt-30">
                    <span>By Admin, 05 Aug 2019</span>
                    <h4 class="title"><a href="blog-details.html">How We Used WebAssembly To Speed Up Our Web App By 20X
                        (Case Study)</a></h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sip erntur aut odit aut fugit, sed quia consequunturm
                      agni dolores eos qui ratione voluptatem</p>
                    <a class="main-btn" href="blog-details.html">Read More <i class="fal fa-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="brand-2-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="brand-active">
            <div class="brand-item">
              <img src="{{ asset('omnivus/images/brand-item-1.png') }}" alt="brand name">
            </div>
            <div class="brand-item">
              <img src="{{ asset('omnivus/images/brand-item-2.png') }}" alt="brand name">
            </div>
            <div class="brand-item">
              <img src="{{ asset('omnivus/images/brand-item-3.png') }}" alt="brand name">
            </div>
            <div class="brand-item">
              <img src="{{ asset('omnivus/images/brand-item-4.png') }}" alt="brand name">
            </div>
            <div class="brand-item">
              <img src="{{ asset('omnivus/images/brand-item-5.png') }}" alt="brand name">
            </div>
            <div class="brand-item">
              <img src="{{ asset('omnivus/images/brand-item-6.png') }}" alt="brand name">
            </div>
            <div class="brand-item">
              <img src="{{ asset('omnivus/images/brand-item-3.png') }}" alt="brand name">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


@endsection
