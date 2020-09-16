@extends('layouts.app')

@section('content')
  <section class="hero" style="background-image: url('{{asset('/assets/img/auditory.jpg')}}')">
    <div class="container">
      <h1 class="wow fadeInUp" data-wow-delay=".3s">
        <span data-text="{{ $data->title }}">{{ $data->title }}</span>
      </h1>
      <nav aria-label="breadcrumb">
        <ul class="breadcrumb text-size-35 wow fadeInUp" data-wow-delay=".5s">
          <li><a href="{{ route('home') }}">Home</a><span aria-hidden="true">|</span></li>
          <li class="active" aria-current="page">{{ $data->title }}</li>
        </ul>
      </nav>
    </div>
  </section>

  <section class="section-gallery">
    <div class="container">
      <div class="btn-group wow fadeIn">
        <a href="#0" class="btn btn-outline-blue active" data-tab-target="all">All Media</a>
        <a href="#0" class="btn btn-outline-blue" data-tab-target="photos">Photos</a>
        <a href="#0" class="btn btn-outline-blue" data-tab-target="videos">Videos</a>
      </div>
      <div class="flex-row">
        @if($data["media"])
          @foreach($data["media"] as $media)
            <div class="media wow fadeIn" data-tab="photos">
              <a class="media-thumb photo" data-fancybox="photos"
                 href="{{ Storage::disk('mediaFiles')->url($media->id."/".$media->file_name) }}">
                <img src="{{ Storage::disk('mediaFiles')->url($media->id."/".$media->file_name) }}" alt="Demo"/>
              </a>
            </div>
          @endforeach
        @endif
        @if($data["videos"])
          @foreach($data["videos"] as $video)
            <div class="media wow fadeIn" data-tab="videos">
              <a class="media-thumb video" data-fancybox="videos" href="https://youtu.be/{{ $video->url }}">
                <img src="{{ Storage::disk('public')->url($video->thumbnail) }}" alt="Demo"/>
              </a>
            </div>
          @endforeach
        @endif
      </div>
    </div>
  </section>
@endsection
