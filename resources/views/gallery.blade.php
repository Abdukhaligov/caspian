@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <section class="inner-hero inner-hero2">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Gallery</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Gallery</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->
  <!-- Gallery Section-->
  <section class="gallery">
    <div class="container">
      <div class="row">

        @if($data["photos"])
          @foreach($data["photos"] as $image)
          <div class="col-md-3" style="padding: 0">
            <div class="portfolio-img  wow fadeInUp" data-wow-delay=".4s"> <a data-fancybox="gallery" href="{{ Storage::disk('mediaFiles')->url($image->id."/".$image->file_name) }}">
                <img src="{{ Storage::disk('mediaFiles')->url($image->id."/".$image->file_name) }}" alt=""></a>
            </div>
          </div>
          @endforeach
        @endif

      </div>
    </div>
  </section>
  <br>
  <section class="gallery">
    <div class="container">
      <div class="row">
        @if($data["videos"])
          @foreach($data["videos"] as $video)
            <div class="col-md-3" style="padding: 0">
              <div class="portfolio-img  wow fadeInUp" data-wow-delay=".4s">
                <a data-fancybox="gallery" href="https://youtu.be/{{ $video->attributes->url }}">
                  <img src="{{ Storage::disk('public')->url($video->attributes->cover) }}" alt="">
                  <div class="bpw-btn">
                    <div class="pulse-box">
                      <div class="pulse-css">
                        <a data-fancybox="gallery" href="https://youtu.be/{{ $video->attributes->url }}">
                          <i class="fas fa-play" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          @endforeach
        @endif
      </div>
    </div>
  </section>

  <!-- /Gallery Section-->


@endsection
