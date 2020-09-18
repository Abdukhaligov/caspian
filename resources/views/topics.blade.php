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
  @if(!isset($data["topics"]))
    <section class="section-topics">
      <div class="container">
        <div class="topics-list">
          @foreach($data["categories"] as $category)
            <div class="topic wow fadeIn">
              <div class="flex">
                <a class="topic-img" href="{{route("category_topics",$category->id)}}">
                  @if($category->getMedia('image'))
                    {{$category->getMedia('image')[0]}}
                  @else
                    <img src="{{ $data->logoPath }}" alt="">
                  @endif
                </a>
                <div class="topic-info text-paragraphs">
                  <h3 class="text-size-25">{{ $category->name }}</h3>
                  <p>{!! $category->description  !!}</p>
                  <a href="{{route("category_topics",$category->id)}}" class="btn btn-outline-blue">Show More</a>
                </div>
              </div>
            </div>
          @endforeach
        </div>
      </div>
    </section>
  @else
    <section class="section-topics">
      <div class="container">
        @foreach($data["topics"] as $topic)
          <div class="topic-single">
          <h3 class="text-size-25">{{ $topic->name }}</h3>
          <div class="text-paragraphs">{!! $topic->description !!}</div>
          <div class="topic-subcats">
            @foreach($topic->children as $child)
              <span class="btn btn-outline-blue">{{ $child->name }}</span>
            @endforeach
          </div>
        </div>
        @endforeach
      </div>
    </section>
  @endif
@endsection
