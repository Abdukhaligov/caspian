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

  <section class="section-books">
    <div class="container">
      <div class="books-list">
        @if($data["books"])
          @foreach($data["books"] as $book)
            <div class="book wow fadeIn">
              <div class="book-info text-paragraphs">
                <h3 class="text-size-25 flex-title">
                  {{ $book->attributes->name }}
                  <span class="font-poppins"><a target="_blank" href="{{ Storage::disk('public')->url($book->attributes->file) }}" class="btn btn-outline-blue">Download Book</a></span>
                </h3>
              </div>
            </div>
          @endforeach
        @endif

      </div>
    </div>
  </section>
@endsection
