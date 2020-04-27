@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <section class="inner-hero inner-hero3">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">News</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">News</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->



  <!-- Blog Section-->
  <section class="blog blog-3 inner-blog">
    <div class="container">
      <div class="row">
        @foreach($data["news"] as $news)
          <div class="col-md-4">
            <div class="single-blog  wow fadeInUp" data-wow-delay=".4s">
              <a href="{{ route('news')."/".$news->id }}">
                <div class="sb-img">
                  @if($news->preview())
                    <img src="{{ Storage::disk('mediaFiles')->url($news->preview()->id."/".$news->preview()->file_name) }}" alt="">
                    @else
                    <img src="{{ asset('eventdia/img/blog/blog-'.rand(1,8).'.jpg') }}" alt="">
                  @endif
                </div>
              </a>
              <div class="sb-content">
                <span>{{ date('M d, Y', strtotime($news->created_at)) }}</span>
                <a href="{{ route('news')."/".$news->id }}">
                  <h3>{{ $news->title }}</h3>
                </a>
                {!! $news->minimumDescription() !!}
                <a href="{{ route('news')."/".$news->id }}">READ MORE</a>
              </div>
            </div>
          </div>
        @endforeach
      </div>

      {!! $data["news"]->render() !!}

      <style>
        .active{
          background-color: #1a41c9 !important;
          border: 1.5px solid #1a41c9 !important;
        }
        .active a{
          color: #fff !important;
        }
      </style>
    </div>

  </section>
  <!-- /Blog Section-->


@endsection
