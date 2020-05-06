@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <section class="inner-hero inner-hero2">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Schedule</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Schedule</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->
  <!--Schedule Section-->
  <section class="schedule schedule3 schedule4 schedule-inner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        </div>
        <div class="col-md-12">
          <div class="event-schedule">
            <nav>
              <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist" style="width: 100%">
                <a class="nav-item nav-link active" id="nav-terms-tab" data-toggle="tab" href="#nav-terms" role="tab"
                   aria-controls="nav-terms" aria-selected="true">
                  <div class="es-day">
                    <div class="es-day-details">
                      <span>1</span>
                    </div>
                    <div class="es-day-details2">
                      <span>Day</span><br>
                      <span>11th January 2020</span>
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
                      <span>12th January 2020</span>
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
                      <span>13th January 2020</span>
                    </div>
                  </div>
                </a>
                <a class="nav-item nav-link" id="nav-agreement-tab" data-toggle="tab" href="#nav-a" role="tab"
                   aria-controls="nav-agreement" aria-selected="false">
                  <div class="es-day">
                    <div class="es-day-details">
                      <span>4</span>
                    </div>
                    <div class="es-day-details2">
                      <span>Day</span><br>
                      <span>13th January 2020</span>
                    </div>
                  </div>
                </a>
                <a class="nav-item nav-link" id="nav-agreement-tab" data-toggle="tab" href="#nav-b" role="tab"
                   aria-controls="nav-agreement" aria-selected="false">
                  <div class="es-day">
                    <div class="es-day-details">
                      <span>5</span>
                    </div>
                    <div class="es-day-details2">
                      <span>Day</span><br>
                      <span>13th January 2020</span>
                    </div>
                  </div>
                </a>
                <a class="nav-item nav-link" id="nav-agreement-tab" data-toggle="tab" href="#nav-c" role="tab"
                   aria-controls="nav-agreement" aria-selected="false">
                  <div class="es-day">
                    <div class="es-day-details">
                      <span>6</span>
                    </div>
                    <div class="es-day-details2">
                      <span>Day</span><br>
                      <span>13th January 2020</span>
                    </div>
                  </div>
                </a>
              </div>
            </nav>
            <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-terms" role="tabpanel" aria-labelledby="nav-terms-tab">
                <div class="event-details">
                  <div class="ed-img">
                    <img src="{{ asset('eventdia/img/team/team-member7.jpg') }}" alt="">
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
                    <img src="{{ asset('eventdia/img/team/team-member8.jpg') }}" alt="">
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
                    <img src="{{ asset('eventdia/img/team/team-member9.jpg') }}" alt="">
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
                    <img src="{{ asset('eventdia/img/team/team-member18.jpg') }}" alt="">
                    <a href="#">
                      <h5>Tommy Martinez</h5>
                    </a>
                    <p>Founder</p>
                  </div>
                  <div class="ed-content">
                    <h5>Managing International Enterprises</h5>
                    <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production.</p>
                    <span><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, Canada</span>
                    <span><i class="far fa-clock"></i> 9:00 am - 11:00 am</span>
                  </div>
                </div>
                <div class="event-details">
                  <div class="ed-img">
                    <img src="{{ asset('eventdia/img/team/team-member14.jpg') }}" alt="">
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
                    <img src="{{ asset('eventdia/img/team/team-member13.jpg') }}" alt="">
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
                    <img src="{{ asset('eventdia/img/team/team-member15.jpg') }}" alt="">
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
                    <img src="{{ asset('eventdia/img/team/team-member17.jpg') }}" alt="">
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
                    <img src="{{ asset('eventdia/img/team/team-member16.jpg') }}" alt="">
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
              <div class="tab-pane fade" id="nav-a" role="tabpanel" aria-labelledby="nav-agreement-tab">
                <div class="event-details">
                  <div class="ed-img">
                    <img src="{{ asset('eventdia/img/team/team-member15.jpg') }}" alt="">
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
              </div>
              <div class="tab-pane fade" id="nav-b" role="tabpanel" aria-labelledby="nav-agreement-tab">
                <div class="event-details">
                  <div class="ed-img">
                    <img src="{{ asset('eventdia/img/team/team-member17.jpg') }}" alt="">
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
              </div>
              <div class="tab-pane fade" id="nav-c" role="tabpanel" aria-labelledby="nav-agreement-tab">
                <div class="event-details">
                  <div class="ed-img">
                    <img src="{{ asset('eventdia/img/team/team-member16.jpg') }}" alt="">
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
  </section>
  <!--/Schedule Section-->


@endsection
