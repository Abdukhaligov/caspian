@extends('layouts.init')

@section('content')

  <div class="banner-area-2 bg_cover" style="background-image: url({{ asset('omnivus/images/banner-bg.jpg') }});">
    <div class="banner-overlay">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="banner-content text-center">
              <span>Get Quality Item & Goods</span>
              <h1 class="title">IT Solutions</h1>
              <p>Make your products with good & professionals</p>
              <ul>
                <li><a class="main-btn wow fadeInUp" href="#" data-wow-duration=".3s" data-wow-delay=".5s">Get A
                    Quote</a></li>
                <li><a class="main-btn main-btn-2 wow fadeInUp" href="#" data-wow-duration=".7s" data-wow-delay=".7s">Learn
                    More</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="services-area pt-115 pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center">
            <span>services</span>
            <h2 class="title">What We Do</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-duration=".1s" data-wow-delay=".3s">
          <div class="single-services text-center mt-30">
            <img src="{{ asset('omnivus/images/services-1.png') }}" alt="">
            <h4 class="title">UI/UX Design</h4>
            <p>Many aspects of computing and technology and the term is more recognizable than before.</p>
            <a href="services-details.html"><i class="fal fa-angle-right"></i> Read More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".4s">
          <div class="single-services single-services-2 text-center mt-30">
            <img src="{{ asset('omnivus/images/services-2.png') }}" alt="">
            <h4 class="title">Web Design</h4>
            <p>Many aspects of computing and technology and the term is more recognizable than before.</p>
            <a href="services-details.html"><i class="fal fa-angle-right"></i> Read More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
          <div class="single-services single-services-3 text-center mt-30">
            <img src="{{ asset('omnivus/images/services-3.png') }}" alt="">
            <h4 class="title">Digital Marketing</h4>
            <p>Many aspects of computing and technology and the term is more recognizable than before.</p>
            <a href="services-details.html"><i class="fal fa-angle-right"></i> Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="video-area bg_cover" style="background-image: url({{ asset('omnivus/images/video-bg.jpg') }}); ">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="video-item">
            <a class="video-popup" href="www.youtube.com/watch05ac.html?v=TdSA7gkVYU0"><i
                  class="fal fa-play"></i></a><br>
            <span>Portfolio</span>
            <h3 class="title">We Have Done So Much Stuffs</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="video-thumb-1">
      <img src="{{ asset('omnivus/images/video-item-1.png') }}" alt="">
    </div>
    <div class="video-thumb-2">
      <img src="{{ asset('omnivus/images/video-item-2.png') }}" alt="">
    </div>
  </div>


  <div class="portfolio-area">
    <div class="container">
      <div class="row portfolio-active">
        <div class="col-lg-4">
          <div class="single-portfolio mb-30">
            <div class="portfolio-thumb">
              <img src="{{ asset('omnivus/images/portfolio-1.jpg') }}" alt="">
            </div>
            <div class="portfolio-content">
              <span>Digital Computing</span>
              <h5 class="title">Aspects of computing and technology and the term</h5>
              <p>Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-portfolio mb-30">
            <div class="portfolio-thumb">
              <img src="{{ asset('omnivus/images/portfolio-2.jpg') }}" alt="">
            </div>
            <div class="portfolio-content">
              <span>it consultant</span>
              <h5 class="title">Today, the term Inform tion Technology (IT)</h5>
              <p>Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-portfolio mb-30">
            <div class="portfolio-thumb">
              <img src="{{ asset('omnivus/images/portfolio-3.jpg') }}" alt="">
            </div>
            <div class="portfolio-content">
              <span>design & development</span>
              <h5 class="title">Has ballooned to encomp ass many aspects</h5>
              <p>Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-portfolio mb-30">
            <div class="portfolio-thumb">
              <img src="{{ asset('omnivus/images/portfolio-2.jpg') }}" alt="">
            </div>
            <div class="portfolio-content">
              <span>it consultant</span>
              <h5 class="title">Today, the term Inform tion Technology (IT)</h5>
              <p>Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="faq-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title text-left">
            <span>faq</span>
            <h2 class="title">Get Every Single Answers Here.</h2>
          </div>
          <div class="faq-accordion">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <a class="" href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                     aria-controls="collapseOne">
                    Today, the term Information Technology
                  </a>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                     data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term
                      Information Technology (IT) has ballooned to encompass is real.Today, the term Information
                      Technology (IT) has ballooned to encompass is real. </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <a class="collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                     aria-controls="collapseTwo">
                    Over the years, a wide range of developments
                  </a>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term
                      Information Technology (IT) has ballooned to encompass is real.Today, the term Information
                      Technology (IT) has ballooned to encompass is real. </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <a class="collapsed" href="#" data-toggle="collapse" data-target="#collapseThree"
                     aria-expanded="false" aria-controls="collapseThree">
                    As a result, most of us need to know
                  </a>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term
                      Information Technology (IT) has ballooned to encompass is real.Today, the term Information
                      Technology (IT) has ballooned to encompass is real. </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <a class="collapsed" href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                     aria-controls="collapseFour">
                    Our knowledge of computers will help us
                  </a>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term
                      Information Technology (IT) has ballooned to encompass is real.Today, the term Information
                      Technology (IT) has ballooned to encompass is real. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-5">
          <div class="row">
            <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".2s">
              <div class="single-faq">
                <h3 class="title"><span class="counter">869 </span>+</h3>
                <span>Project We Have Done</span>
                <p>Today, the term Information Technology (IT) has ballooned to encompass is real.</p>
                <i class="fal fa-archive"></i>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
              <div class="single-faq mt-20">
                <h3 class="title"><span class="counter">100 </span>+</h3>
                <span>Project We Have Done</span>
                <p>Today, the term Information Technology (IT) has ballooned to encompass is real.</p>
                <i class="fal fa-user"></i>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
              <div class="single-faq mt-10">
                <h3 class="title"><span class="counter">50 </span>+</h3>
                <span>Project We Have Done</span>
                <p>Today, the term Information Technology (IT) has ballooned to encompass is real.</p>
                <i class="fal fa-globe"></i>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".5s">
              <div class="single-faq mt-30">
                <h3 class="title"><span class="counter">10 </span>+</h3>
                <span>Project We Have Done</span>
                <p>Today, the term Information Technology (IT) has ballooned to encompass is real.</p>
                <i class="fal fa-award"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="team-area gray-bg pt-115">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center">
            <span>team</span>
            <h2 class="title">Our Leadership</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="single-team mt-30">
            <div class="team-thumb">
              <img src="{{ asset('omnivus/images/team-1.png') }}" alt="">
            </div>
            <div class="team-content text-center">
              <h5 class="title">Rosalina D. William</h5>
              <span>Founder</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="single-team mt-30">
            <div class="team-thumb">
              <img src="{{ asset('omnivus/images/team-2.png') }}" alt="">
            </div>
            <div class="team-content text-center">
              <h5 class="title">Kelian M. Bappe</h5>
              <span>ceo</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="single-team mt-30">
            <div class="team-thumb">
              <img src="{{ asset('omnivus/images/team-3.png') }}" alt="">
            </div>
            <div class="team-content text-center">
              <h5 class="title">Helix H. Hiliam</h5>
              <span>designer</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="single-team mt-30">
            <div class="team-thumb">
              <img src="{{ asset('omnivus/images/team-4.png') }}" alt="">
            </div>
            <div class="team-content text-center">
              <h5 class="title">Kingopoli G. George</h5>
              <span>developer</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="single-team mt-30">
            <div class="team-thumb">
              <img src="{{ asset('omnivus/images/team-5.png') }}" alt="">
            </div>
            <div class="team-content text-center">
              <h5 class="title">Romada U. Ubodobo</h5>
              <span>game designer</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="single-team mt-30">
            <div class="team-thumb">
              <img src="{{ asset('omnivus/images/team-6.png') }}" alt="">
            </div>
            <div class="team-content text-center">
              <h5 class="title">Yellow Y. Yankee</h5>
              <span>consultant</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="single-team mt-30">
            <div class="team-thumb">
              <img src="{{ asset('omnivus/images/team-7.png') }}" alt="">
            </div>
            <div class="team-content text-center">
              <h5 class="title">Daddy Yankee</h5>
              <span>support manager</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="single-team mt-30">
            <div class="team-thumb">
              <img src="{{ asset('omnivus/images/team-8.png') }}" alt="">
            </div>
            <div class="team-content text-center">
              <h5 class="title">Limbo Re Limbo</h5>
              <span>seo specialist</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="action-area">
    <div class="action-overlay bg_cover"
         style="background-image: url({{ asset('omnivus/images/action-pattern.png') }});">
      <div class="container">
        <div class="action-bg">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="action-content">
                <span>Call To action</span>
                <h3 class="title">Let’s Discuss With Us Your Estimate.</h3>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="action-btn text-left text-lg-right">
                <a class="main-btn" href="contact.html"><i class="fal fa-comments"></i> Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="blog-area pt-115 pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center">
            <span>blog</span>
            <h2 class="title">News Feeds</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".4s">
          <div class="single-blog mt-30">
            <ul>
              <li><i class="fal fa-user"></i> By Admin</li>
              <li><i class="fal fa-comments"></i> 13 Comments</li>
            </ul>
            <h4 class="title"><a href="blog-details.html">Over the years, a wide is mean of developments</a></h4>
            <p>Over the years, a wide range of design & innovations in the global IT arena have led to many new
              IT-enabled.</p>
            <a href="blog-details.html"><i class="fal fa-angle-right"></i> Read More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
          <div class="single-blog mt-30">
            <ul>
              <li><i class="fal fa-user"></i> By Admin</li>
              <li><i class="fal fa-comments"></i> 13 Comments</li>
            </ul>
            <h4 class="title"><a href="blog-details.html">Over the years, a wide is mean of developments</a></h4>
            <p>Over the years, a wide range of design & innovations in the global IT arena have led to many new
              IT-enabled.</p>
            <a href="blog-details.html"><i class="fal fa-angle-right"></i> Read More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".8s">
          <div class="single-blog mt-30">
            <ul>
              <li><i class="fal fa-user"></i> By Admin</li>
              <li><i class="fal fa-comments"></i> 13 Comments</li>
            </ul>
            <h4 class="title"><a href="blog-details.html">Over the years, a wide is mean of developments</a></h4>
            <p>Over the years, a wide range of design & innovations in the global IT arena have led to many new
              IT-enabled.</p>
            <a href="blog-details.html"><i class="fal fa-angle-right"></i> Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <footer class="footer-area gray-bg pt-90 ">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-7">
          <div class="widget-item-1 mt-30">
            <img src="{{ asset('omnivus/images/logo-2.1.png') }}" alt="">
            <p>The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has
              changed too, as have the things that we bring to our community onferences, books, and our membership added
              to the online magazine.</p>
            <p>One thing that hasn’t changed is that we’re a small team — with most of us not working</p>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1 col-md-5">
          <div class="widget-item-2 mt-30">
            <h4 class="title">Pages</h4>
            <div class="footer-list">
              <ul>
                <li><a href="#"><i class="fal fa-angle-right"></i> Home</a></li>
                <li><a href="#"><i class="fal fa-angle-right"></i> Services</a></li>
                <li><a href="#"><i class="fal fa-angle-right"></i> About</a></li>
                <li><a href="#"><i class="fal fa-angle-right"></i> Career</a></li>
                <li><a href="#"><i class="fal fa-angle-right"></i> Refund</a></li>
                <li><a href="#"><i class="fal fa-angle-right"></i> Terms</a></li>
              </ul>
              <ul>
                <li><a href="#"><i class="fal fa-angle-right"></i> Details</a></li>
                <li><a href="#"><i class="fal fa-angle-right"></i> Contact</a></li>
                <li><a href="#"><i class="fal fa-angle-right"></i> Business</a></li>
                <li><a href="#"><i class="fal fa-angle-right"></i> Affiliate</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="widget-item-2 widget-item-3 mt-30">
            <h4 class="title">Working Hours</h4>
            <ul>
              <li>Monday - Friday: 7:00 - 17:00</li>
              <li>Saturday: 7:00 - 12:00</li>
              <li>Sunday and holidays: 8:00 - 10:00</li>
            </ul>
            <p><span>For more then 30 years,</span> IT Service has been a reliable partner in the field of logistics and
              cargo forwarding.</p>
            <a href="#"><i class="fal fa-angle-right"></i>Discover More</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="footer-copyright">
            <p>Copyright <a href="https://gizmoder.com/cdn-cgi/l/email-protection" class="__cf_email__"
                            data-cfemail="c183b881">[email&#160;protected]</a> <span>tanvir82</span> - 2019</p>
          </div>
        </div>
      </div>
    </div>
  </footer>


  <div class="back-to-top back-to-top-2">
    <a href="#">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>

@endsection
