@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <style type="text/css">
    .categoryButton {
      padding: 8px 25px;
      background: #1a41c9;
      border: 0;
      color: #fff;
      transition: .5s ease;
      text-transform: uppercase;
      cursor: pointer;
      margin-bottom: 20px;
    }
  </style>
  <section class="inner-hero inner-hero2">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Contact us</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Topics</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->

  @if(!isset($data["topics"]))
  <section class="schedule schedule3 schedule4 schedule-inner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        </div>
        <div class="col-md-12">
          <div class="event-schedule">
            <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-terms" role="tabpanel" aria-labelledby="nav-terms-tab">
                @foreach($data["categories"] as $category)
                  <div class="event-details">
                    <div class="ed-img">
                      @if($category->getMedia('image'))
                        {{$category->getMedia('image')[0]}}
                      @else
                        <img src="{{ $data->logoPath }}" alt="">
                      @endif
                    </div>

                    <div class="ed-content">
                      <h5>{{ $category->name }}</h5>
                      <div>
                        {!! $category->description  !!}
                      </div>
                      <div>
                        <a href="{{route("category_topics",$category->id)}}">
                          <button class="categoryButton" style="margin-top: 15px">More</button>
                        </a>
                      </div>
                    </div>
                  </div>

                @endforeach
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  @else
  <!-- FAQ Section-->
  <section class="faq">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="accordion">
              @foreach($data["topics"] as $topic)
                <div class="card ">
                  <div class="card-header">
                    <h4 class="card-header">
                      <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                         href="#collapse{{ $topic->id }}">{{ $topic->name }}
                        @if($topic->description || $topic->children)
                          <i class="fas fa-minus-circle faq-icon"></i>
                          <i class="fas fa-plus-circle"></i>
                        @endif
                      </a>
                    </h4>
                  </div>
                  @if($topic->description || $topic->children)
                    <div id="collapse{{ $topic->id }}" class="panel-collapse collapse in">
                      <div class="card-block">
                        <p>{!! $topic->description !!}</p>
                        @if($topic->children)
                          @foreach($topic->children as $child)
                            <div class="card ">
                              <div class="card-header">
                                <h4 class="card-header">
                                  <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                                     href="#collapse{{ $child->id }}">{{ $child->name }}
                                    @if($child->description)
                                      <i class="fas fa-minus-circle faq-icon"></i>
                                      <i class="fas fa-plus-circle"></i>
                                    @endif
                                  </a>
                                </h4>
                              </div>
                              @if($child->description)
                                <div id="collapse{{ $child->id }}" class="panel-collapse collapse in">
                                  <div class="card-block">
                                    <p>{!! $child->description !!}</p>
                                  </div>
                                </div>
                              @endif
                            </div>
                          @endforeach
                        @endif
                      </div>
                    </div>
                  @endif
                </div>
              @endforeach
          </div>
        </div>
      </div>
    </div>
  </section>
  @endif

@endsection
