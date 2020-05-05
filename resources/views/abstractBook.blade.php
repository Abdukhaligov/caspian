@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <section class="inner-hero inner-hero2">
    <div class="container">
      <div class="ih-content">
        <h1 class=" wow fadeInUp" data-wow-delay=".4s">{{ $data->title }}</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Media</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->

  <!-- About Section-->
  <section class="about-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="about-content">
            @if($data["books"])
              @foreach($data["books"] as $book)
                <div>

                  <div class="card" style="margin-bottom: 15px">
                    <div class="card-header">
                      <h4 style="float:left;">
                        {{ $book->attributes->name }}
                      </h4>
                      <span style="float:right;">
                       <a target="_blank" href="{{ Storage::disk('public')->url($book->attributes->file) }}">
                        Download
                      </a>
                    </span>
                    </div>
                  </div>
                </div>
              @endforeach
            @endif

          </div>
        </div>
      </div>
    </div>





@endsection
