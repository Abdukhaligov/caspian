@extends('layouts.app')

@section('content')


  <!-- Hero Section-->
  <section class="hero-2"
           @if($data["event"]["banner"])
              style="background-image: url({{Storage::disk('public')->url($data["event"]["banner"])}})"
           @endif>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-content">
            <h1 class="wow fadeInUp" data-wow-delay=".3s">{{$data["event"]["name"]}}</h1>
            <h1 class="wow fadeInUp" data-wow-delay=".5s">Conference</h1>
            <span class="wow fadeInUp" data-wow-delay=".8s"><i class="fas fa-map-marker-alt"></i> {{$data["event"]["address"]}}</span>
            <span class="wow fadeInUp" data-wow-delay=".8s"><i class="far fa-clock"></i> {{ date('d M, Y', strtotime($data["event"]["date"])) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->

  <!-- Counter Section-->
  <section class="counter wow fadeInUp" data-wow-delay=".8s">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
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

  <!-- About Section-->
  <section class="about-section ab-section2">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="about-content">
            <h1>Welcome to the World
              Digital Conference</h1>
            <p>welcome to eventmat, start with a greeting to your audience that's appropriate to the situation. Dolor
              sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim
              veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.</p>

            <a href="#" class="btn-2">Learn More</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="amout-img">
            <img src="http://caspian/eventdia/img/about/about.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /About Section-->

  <!-- Team Section-->
  <section class="our-team our-team2">
    <div class="ot-top">
      <h1>Who Speaking?</h1>
      <p>Welcome to the dedicated to building remarkable Speakers!</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
              <a href="#"><img src="http://caspian/eventdia/img/team/team-member1.jpg" alt=""></a>
              <div class="stm-icon">
                <h4>Roberto Berry</h4>
                <p>CEO & Founder</p>
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay=".5s">
              <a href="#"> <img src="http://caspian/eventdia/img/team/team-member2.jpg" alt=""></a>
              <div class="stm-icon sil-1">
                <h4>Frances B. Chandler</h4>
                <p>Analisis </p>
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay="1s">
              <a href="#"> <img src="http://caspian/eventdia/img/team/team-member3.jpg" alt=""></a>
              <div class="stm-icon">
                <h4>Thomas Childers</h4>
                <p>Managing Director</p>
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
              <a href="#"><img src="http://caspian/eventdia/img/team/team-member4.jpg" alt=""></a>
              <div class="stm-icon">
                <h4>Melek Ozcan</h4>
                <p>Founder</p>
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay=".6s">
              <a href="#"><img src="http://caspian/eventdia/img/team/team-member5.jpg" alt=""></a>
              <div class="stm-icon sil-1">
                <h4>Tommy Martinez</h4>
                <p>Painter, Conceptual Artist</p>
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay="1s">
              <a href="#"><img src="http://caspian/eventdia/img/team/team-member6.jpg" alt=""></a>
              <div class="stm-icon">
                <h4>Deirdre Adams</h4>
                <p>Marketers</p>
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Team Section-->

  <!--Schedule Section-->
  <section class="schedule schedule2">
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
  <section id="ticket" class="pricing pricing2">
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

  <!--- Partner Section-->
  <section class="partner partner2">
    <h1>Sponsors & Partners</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="single-partner">
            <ul>
              <li><a href="#"> <img src="http://caspian/eventdia/img/partner/partner-1.png" alt=""></a></li>
              <li><a href="#"> <img src="http://caspian/eventdia/img/partner/partner-2.png" alt=""></a></li>
              <li><a href="#"> <img src="http://caspian/eventdia/img/partner/partner-3.png" alt=""></a></li>
              <li><a href="#"> <img src="http://caspian/eventdia/img/partner/partner-7.png" alt=""></a></li>
              <li><a href="#"> <img src="http://caspian/eventdia/img/partner/partner-8.png" alt=""></a></li>
              <li><a href="#"> <img src="http://caspian/eventdia/img/partner/partner-4.png" alt=""></a></li>
              <li><a href="#"> <img src="http://caspian/eventdia/img/partner/partner-6.png" alt=""></a></li>
              <li><a href="#"> <img src="http://caspian/eventdia/img/partner/partner-5.png" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="btn-2">BECOME A SPONSOR</a>
  </section>
  <!--- /Partner Section-->

  <!-- Blog Section-->
  <section class="blog blog-2">
    <div class="container">
      <div class="blog-top">
        <h1>From Our Blog</h1>
        <p>Conferences dedicated to building remarkable events.</p>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="single-blog wow fadeInUp" data-wow-delay=".4s">
            <a href="single-post.html">
              <div class="sb-img">
                <img src="http://caspian/eventdia/img/blog/blog-1.jpg" alt="">
              </div>
            </a>
            <div class="sb-content">
              <span>September 30, 2023 </span>
              <a href="single-post.html">
                <h3>Top Conference: Clients in Control Building Dmand</h3>
              </a>
              <p>This presentation will describe seven essential actions that could unleash... ..power of </p>
              <a href="single-post.html">READ MORE</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-blog wow fadeInUp" data-wow-delay=".8s">
            <a href="single-post.html">
              <div class="sb-img">
                <img src="http://caspian/eventdia/img/blog/blog-2.jpg" alt="">
              </div>
            </a>
            <div class="sb-content">
              <span>September 30, 2023 </span>
              <a href="single-post.html">
                <h3>Top Conference: Clients in Control Building Dmand</h3>
              </a>
              <p>This presentation will describe seven essential actions that could unleash... ..power of </p>
              <a href="single-post.html">READ MORE</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-blog wow fadeInUp" data-wow-delay="1.2s">
            <a href="single-post.html">
              <div class="sb-img">
                <img src="http://caspian/eventdia/img/blog/blog-3.jpg" alt="">
              </div>
            </a>
            <div class="sb-content">
              <span>September 30, 2023 </span>
              <a href="single-post.html">
                <h3>Top Conference: Clients in Control Building Dmand</h3>
              </a>
              <p>This presentation will describe seven essential actions that could unleash... ..power of </p>
              <a href="single-post.html">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  <!-- /Blog Section-->

@endsection