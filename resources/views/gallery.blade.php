@extends('layouts.app')

@section('content')

  <style>
    .portfolio-img img {
      min-height: 175px;
      width: 100%;
    }
  </style>
  <!-- Hero Section-->
  <section class="inner-hero inner-hero2">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Gallery</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
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
        @if($data["media"])
          @foreach($data["media"] as $media)
            @if(pathinfo($media->file_name, PATHINFO_EXTENSION) !== "mp4")
              <div class="col-md-3" style="padding: 0">
                <div class="portfolio-img  wow fadeInUp" data-wow-delay=".4s">
              <a data-fancybox="gallery"
                 href="{{ Storage::disk('mediaFiles')->url($media->id."/".$media->file_name) }}">
                <div class="portfolio-img-block" style="background-image: url({{ Storage::disk('mediaFiles')->url($media->id."/".$media->file_name) }});"></div>
              </a>
                </div>
              </div>
            @else
              <div class="col-md-3" style="padding: 0">
                <div class="portfolio-img  wow fadeInUp" data-wow-delay=".4s">
                  <a data-fancybox="gallery" href="{{ Storage::disk('mediaFiles')->url($media->id."/".$media->file_name) }}">
                    <video loop="true" mute="true" playsinline="true" src="{{ Storage::disk('mediaFiles')->url($media->id."/".$media->file_name) }}" alt="img"></video>
                    <div class="bpw-btn">
                      <div class="pulse-box">
                        <div class="pulse-css">
                          <div>
                            <i class="fas fa-play" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            @endif


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
                <a data-fancybox="youtube" href="https://youtu.be/{{ $video->url }}">
                  <img src="{{ Storage::disk('public')->url($video->thumbnail) }}" alt="">
                  <div class="bpw-btn">
                    <div class="pulse-box">
                      <div class="pulse-css">
                        <div>
                          <i class="fas fa-play" aria-hidden="true"></i>
                        </div>
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
