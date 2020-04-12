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
        <div class="col-md-6">
          <div class="amout-img">
            <img src="http://caspian/eventdia/img/about/about.jpg" alt="">
            <div class="bpw-btn">
              <div class="pulse-box">
                <div class="pulse-css">
                  <a href="#" data-toggle="modal" data-target="#myModal2">
                    <i class="fas fa-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>

    <!-- The Modal -->
    <div class="modal" id="myModal2">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <button type="button" class="button ml-auto" id="pause-button" data-dismiss="modal"><i
                  class="fas fa-times v-close"></i></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div id="headerPopup">
              <!-- Make sure ?enablejsapi=1 is on URL -->
              <iframe id="video" src="https://www.youtube.com/embed/mGAB-kQRDBI?enablejsapi=1&amp;html5=1"
                      allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- /About Section-->
  <!-- Event Outcome Section-->
  <section class="event-outcome eo-inner">
    <span class="wow fadeInUp" data-wow-delay=".5s">Features</span>
    <h1 class="wow fadeInUp" data-wow-delay=".5s">Our Features</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="single-e-out wow fadeInUp" data-wow-delay=".3s">
            <span class="flaticon-microphone f-icon"></span>
            <h5>Great Speakers</h5>
            <p>How you transform your business as technology, consumer, habits industry dynamic</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-e-out wow fadeInUp" data-wow-delay=".6s">
            <span class="flaticon-collaboration f-icon"></span>
            <h5>Networking</h5>
            <p>How you transform your business as technology, consumer, habits industry dynamic</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-e-out wow fadeInUp" data-wow-delay=".9s">
            <span class="flaticon-confetti f-icon"></span>
            <h5>Have Fun</h5>
            <p>How you transform your business as technology, consumer, habits industry dynamic</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-e-out wow fadeInUp" data-wow-delay=".3s">
            <span class="flaticon-coffee-cup f-icon"></span>
            <h5>Free Coffee Break</h5>
            <p>How you transform your business as technology, consumer, habits industry dynamic</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-e-out wow fadeInUp" data-wow-delay=".6s">
            <span class="flaticon-bus f-icon"></span>
            <h5>Free Transfer</h5>
            <p>How you transform your business as technology, consumer, habits industry dynamic</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-e-out wow fadeInUp" data-wow-delay=".9s">
            <span class="flaticon-location f-icon"></span>
            <h5>Best Location</h5>
            <p>How you transform your business as technology, consumer, habits industry dynamic</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Event Outcome Section-->
  <!-- Team Section-->
  <section class="our-team ot-inner">
    <div class="ot-top">
      <span>Our Team</span>
      <h1>People Behind the World </h1>
      <h1>Digital Conference</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
              <a href="#"><img src="http://caspian/eventdia/img/team/team-member13.jpg" alt=""></a>
              <div class="stm-icon">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="stm-text wow fadeInDown" data-wow-delay=".5s">
              <h4>Roberto Berry</h4>
              <p>CEO & Founder</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay=".5s">
              <a href="#"> <img src="http://caspian/eventdia/img/team/team-member14.jpg" alt=""></a>
              <div class="stm-icon">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="stm-text wow fadeInDown" data-wow-delay=".8s">
              <h4>Frances B. Chandler</h4>
              <p>Analisis </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay="1s">
              <a href="#"> <img src="http://caspian/eventdia/img/team/team-member15.jpg" alt=""></a>
              <div class="stm-icon">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="stm-text wow fadeInDown" data-wow-delay="1.2s">
              <h4>Thomas Childers</h4>
              <p>Managing Director</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay=".3s">
              <a href="#"><img src="http://caspian/eventdia/img/team/team-member16.jpg" alt=""></a>
              <div class="stm-icon">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="stm-text wow fadeInDown" data-wow-delay=".5s">
              <h4>Melek Ozcan</h4>
              <p>Founder</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay=".6s">
              <a href="#"> <img src="http://caspian/eventdia/img/team/team-member17.jpg" alt=""></a>
              <div class="stm-icon">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="stm-text wow fadeInDown" data-wow-delay=".8s">
              <h4>Tommy Martinez</h4>
              <p>Painter, Conceptual Artist</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-team-member">
            <div class="stm-img wow fadeInUp" data-wow-delay="1s">
              <a href="#"> <img src="http://caspian/eventdia/img/team/team-member18.jpg" alt=""></a>
              <div class="stm-icon">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="stm-text wow fadeInDown" data-wow-delay="1.2s">
              <h4>Deirdre Adams</h4>
              <p>Marketers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Team Section-->


@endsection
<script>

</script>