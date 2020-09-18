@extends('layouts.app')

@section('content')

  <section class="hero" style="background-image: url('{{asset('assets/img/auditory.jpg')}}')">
    <div class="container">

      <h1 class="wow fadeInUp" data-wow-delay=".3s">
        <span data-text="News">News</span>
      </h1>
      <nav aria-label="breadcrumb">
        <ul class="breadcrumb text-size-35 wow fadeInUp" data-wow-delay=".5s">
          <li><a href="{{ route('home') }}">Home</a><span aria-hidden="true">|</span></li>
          <li class="active" aria-current="page">News</li>
        </ul>
      </nav>

    </div>
  </section>

  <section class="section-news">
    <div class="container">
      <div class="section-title wow fadeIn">
        <span>From our blog</span>
        <h2 class="text-size-35 flex-title has-form">Latest News
          <div class="search-form">
            <form method="GET" action="{{ route('newsSearch') }}" autocomplete="off">
              <input required type="text" placeholder="Search here..." value="" name="s" class="font-poppins" />
              <button type="submit" class="btn btn-blue" aria-label="Search">
                <i class="icon-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </h2>
      </div>
      <div class="flex-row">
        @foreach($data["news"] as $news)
          <div class="news-item wow fadeIn">

          <a class="news-item-img" href="{{ route('news')."/".$news->id }}">
            {{ $news->getFirstMedia('preview') }}
          </a>

          <div class="news-item-info">
            <p class="font-poppins">{{ date('M d, Y', strtotime($news->created_at)) }}</p>

            <h4><a href="{{ route('news')."/".$news->id }}">{{ $news->title }}</a></h4>
            <p>{!! $news->minimumDescription() !!}</p>
            <a href="{{ route('news')."/".$news->id }}" class="btn btn-outline-blue font-poppins">Read More</a>

          </div>
        </div>
        @endforeach
      </div>

      {!! $data["news"]->render() !!}

      <style>
        .pagination a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          color: #333;
          font-size: 13px;
          border: 1px solid #f5f7f9;
          border-radius: 2px;
          box-shadow: 0 3px 3px rgba(0, 0, 0, .1);
          margin: 0 4px;
          text-decoration: none;
        }
      </style>

    </div>
  </section>

@endsection
