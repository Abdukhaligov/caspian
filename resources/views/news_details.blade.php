@extends('layouts.app')

@section('content')

  <style>
    img {
      height: auto;
      width: auto;
    }
    ul{
      margin-left: 40px !important;
    }
    li {
      list-style-type: disc;
      display: list-item;
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0;
      color: #8e8d8e;
      line-height: 26px;
      margin: 0;
    }
    .breadcrumb-item{
      line-height: 18px;
      list-style-type: none;
      margin: 0px;
      letter-spacing: 0;
      display: inline-block;
      font-size: 16px;
    }

  </style>

  <!-- Hero Section-->
  <section class="inner-hero inner-hero3">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Blog</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
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
        <div class="col-md-8 order-md-1 order-2">
          <div class="row">
            <div class="col-md-12">
              <div class="single-blog">
                <div class="sb-img">
                  @if($data["news"]->getFirstMedia('preview'))
                    {{ $data["news"]->getFirstMedia('preview') }}
                  @else
                    <img src="{{ asset('eventdia/img/blog/blog-'.rand(1,8).'.jpg') }}" alt="" style="height: auto; width: 100%;max-height: fit-content;">
                  @endif
                </div>
                <div class="sb-content sbc-details">
                  <span>{{ date('M d, Y', strtotime($data["news"]->created_at)) }}</span>
                    <h2>{{ $data["news"]->title }}</h2>
                  <br>
                  {!! $data["news"]->body !!}
                </div>
              </div>

              <!--End Blog comment section-->

            </div>
          </div>
        </div>
        <div class="col-md-4 order-md-2 order-1">
          <div class="blog-sideber">
            <div class="searchbox">
              <form>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="search.....">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                  </div>
                </div>
              </form>
            </div>

            <div class="recent-post">
              <h4>Recent Posts</h4>
              @foreach($data["recentNews"] as $news)
                <div class="single-recent-blog">
                  <div class="srb-img">
                    <a href="{{ route('news')."/".$news->id }}">
                      @if($news->getFirstMedia('preview'))
                        {{ $news->getFirstMedia('preview') }}
                      @else
                        <img src="{{ asset('eventdia/img/blog/blog-details'.rand(1,8).'.jpg') }}" alt="">
                      @endif
                    </a>
                  </div>
                  <div class="srb-text">
                    <a href="{{ route('news')."/".$news->id }}">
                      <h5>{{ $news->title }}</h5>
                    </a>
                    <span>{{ date('M d, Y', strtotime($news->created_at)) }}</span>
                  </div>
                </div>
              @endforeach
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  <!-- /Blog Section-->


@endsection
