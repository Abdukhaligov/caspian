@extends('layouts.app')

@section('content')

  <section class="section-news">
    <div class="container">
      <div class="flex-row">
        <div class="news-single">

          <div class="news-item wow fadeIn">

            @if($data["news"]->getFirstMedia('preview'))
              <div class="news-item-img">
                {{ $data["news"]->getFirstMedia('preview') }}
              </div>
            @endif

            <div class="news-item-info">
              <p class="font-poppins">{{ date('M d, Y', strtotime($data["news"]->created_at)) }}</p>

              <div class="text-paragraphs">
                <h3 class="text-size-25">{{ $data["news"]->title }}</h3>
                {!! $data["news"]->body !!}
              </div>

            </div>
          </div>
        </div>
        <div class="news-other">
          <div class="news-other-top">
            <div class="search-form">
              <form method="GET" action="/news-search.html" enctype="multipart/form-data" autocomplete="off">
                <input type="text" placeholder="Search here..." value="" name="s" class="font-poppins" />
                <button type="submit" class="btn btn-blue" aria-label="Search">
                  <i class="icon-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <h4 class="text-over-line">
              <span>Recent Posts</span>
            </h4>
          </div>
          @foreach($data["recentNews"] as $news)
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
      </div>
    </div>
  </section>
@endsection
