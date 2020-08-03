@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
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
  <!-- FAQ Section-->
  <section class="faq">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="accordion">
            @foreach($data["categories"] as $category)
            <div class="card ">
              <div class="card-header">
                <h4 class="card-header">
                  <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                     href="#collapseCategory{{ $category->id }}">{{ $category->name }}
                    @if($category->topics)
                      <i class="fas fa-minus-circle faq-icon"></i>
                      <i class="fas fa-plus-circle"></i>
                    @endif
                  </a>
                </h4>
              </div>
              <div id="collapseCategory{{ $category->id }}" class="panel-collapse collapse in">
                <div class="card-block">
                  @if($category->topics)
                    @foreach($category->topics as $topic)
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
                  @endif
                </div>
              </div>
            </div>
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </section>


@endsection
