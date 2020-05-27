@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <section class="inner-hero inner-hero4">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Contact us</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->
  <!--contact Us Section-->
  <section class="contact-us">
    <div class="container">
      <div class="contact-us-de-info">
        <div class="single-contact-details">
          <h5>Phone:</h5>
          <p><a href="tel: {{ $data->phone }}">{{ $data->phone }}</a></p>
        </div>
        <div class="single-contact-details">
          <h5>Send Email:</h5>
          <p><a href="mailto: {{ $data->email }}">{{ $data->email }}</a></p>
        </div>
        <div class="single-contact-details">
          <h5>Address:</h5>
          <p>{{ $data->address }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 order-md-1 order-2">
          <div class="map">
            <div class="" id="googleMap">
{{--              {{ $data->map }}--}}
            </div>
          </div>
        </div>
        <div class="col-md-6 order-md-2 order-1">
          <div class="contact-information contact-information-2">
            <h2>Send Us A Message Now!</h2>
            <form>
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1" name="name" id="name" placeholder="Your Name Here*"
                       onfocus="this.placeholder = ''" onblur="this.placeholder ='Your Name Here*'">
              </div>
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1" name="email" id="email"
                       placeholder="Your Email Address Here*" onfocus="this.placeholder = ''"
                       onblur="this.placeholder ='Your Email Address Here*'">
              </div>
              <div class="form-group cfdb1">
                <textarea rows="8" class="form-control cp1" name="msg" id="msg" placeholder="Message Details*"
                          onfocus="this.placeholder =''" onblur="this.placeholder ='Message Details*'"></textarea>
              </div>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/contact Us Section-->

@endsection

@section('scripts')
  <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRm7Mq4riVzL1TkDhuTIXKmeZKkr-qJu8&callback=initMap">
  </script>

  <script>
    //**=================== Google Map ==========================**//

    if ($('#googleMap').length > 0) {
      var user_lat, user_lng;
      var map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('googleMap'), {
          center: {
            lat: {{ json_decode($data->map)->latlng->lat }},
            lng: {{ json_decode($data->map)->latlng->lng }}
          },
          zoom: 15,
          scrollwheel: false
        });


        var marker = new google.maps.Marker({
          position:  {
            lat: {{ json_decode($data->map)->latlng->lat }},
            lng: {{ json_decode($data->map)->latlng->lng }}
          },
          map: map,
        });

      }
    }

    //*================ End Google Map ============*//
  </script>
@endsection
