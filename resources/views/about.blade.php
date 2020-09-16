@extends('layouts.app')

@section('content')
  <section class="hero" style="background-image: url('{{asset('assets/img/auditory.jpg')}}')">
    <div class="container">

      <h1 class="wow fadeInUp" data-wow-delay=".3s">
        <span data-text="{!! $data->title !!}">{!! $data->title !!}</span>
      </h1>
      <nav aria-label="breadcrumb">
        <ul class="breadcrumb text-size-35 wow fadeInUp" data-wow-delay=".5s">
          <li><a href="{{ route('home') }}">Home</a><span aria-hidden="true">|</span></li>
          <li class="active" aria-current="page">{!! $data->title !!}</li>
        </ul>
      </nav>

    </div>
  </section>
  <section class="section-about">
    <div class="container">
      <div class="text-paragraphs spaced wow fadeIn" data-wow-delay=".2s">
        {!! $data->body !!}
      </div>
    </div>
  </section>
@endsection