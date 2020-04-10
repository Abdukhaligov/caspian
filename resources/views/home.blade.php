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
