@extends('layouts.app')

@section('content')
  <section class="hero" style="background-image: url('{{asset('assets/img/auditory.jpg')}}')">
    <div class="container">
      <h1 class="wow fadeInUp" data-wow-delay=".3s">
        <span data-text="Speaker">Speaker</span>
      </h1>
      <nav aria-label="breadcrumb">
        <ul class="breadcrumb text-size-35 wow fadeInUp" data-wow-delay=".5s">
          <li><a href="{{ route('home') }}">Home</a><span aria-hidden="true">|</span></li>
          <li class="active" aria-current="page">Speaker</li>
        </ul>
      </nav>
    </div>
  </section>

  <section class="section-people">
  <div class="container">
    @if($data->getFirstMedia('avatars'))
      <div class="section-float-img">
        {{ $data->getFirstMedia('avatars') }}
      </div>
    @endif
    <div class="section-title wow fadeIn">
      <span>{{ $data->job_title }} / {{ $data->company }}</span>
      <h2 class="text-size-35">{{ $data->degree->name ?? '' }} {{ $data->name }}</h2>
    </div>
    <div class="text-paragraphs">
      {!! $data->description !!}
    </div>
  </div>
</section>
@endsection
