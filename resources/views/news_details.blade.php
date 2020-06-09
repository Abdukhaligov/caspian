@extends('layouts.app')

@section('content')

  <!-- Hero Section-->
  <section class="inner-hero inner-hero3">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Blog</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Blog</li>
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
                <a href="#">
                  <div class="sb-img">
                    @if($data["news"]->getFirstMedia('preview'))
                      {{ $data["news"]->getFirstMedia('preview') }}
                    @else
                      <img src="{{ asset('eventdia/img/blog/blog-'.rand(1,8).'.jpg') }}" alt="">
                    @endif
                  </div>
                </a>
                <div class="sb-content sbc-details">
                  <span>{{ date('M d, Y', strtotime($data["news"]->created_at)) }}</span>
                  <a href="#">
                    <h2>{{ $data["news"]->title }}</h2>
                  </a>
                  {!! $data["news"]->description !!}
                </div>
              </div>

              <div class="sbd-info">
                <p>This presentation will describe seven essential actions that could unleash challenge authority.
                  Challenge yourself. Evolve. Change forever. Become who you say you always will. Keep moving. Don’t
                  stop. Start the revolution. Become a freedom fighter. Randomised words which don't look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                  dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate
                  Lorem Ipsum which looks reasonable. </p>
                <p>Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
                  nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede
                  semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                  gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.</p>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="sbd-info-img"><img src="{{ asset('/eventdia/img/blog/blog-details7.jpg') }}" alt=""></div>
                </div>
                <div class="col-md-6">
                  <div class="sbd-info-img"><img src="{{ asset('/eventdia/img/blog/blog-details8.jpg') }}" alt=""></div>
                </div>
              </div>
              <div class="sbd-info">
                <p>Kevin tail cow pancetta beef landjaeger ham turkey strip steak. Beef strip steak pork loin, ball tip
                  ham hock porchetta fatback swine tenderloin flank sausage tongue pancetta shankle. Andouille t-bone
                  salami, brisket flank picanha pancetta. Hamburger corned beef frankfurter, beef ribs kevin strip steak
                  cow. Pork loin ball tip venison turkey, pork belly landjaeger ribeye. </p>
                <p>Limited-edition broadsides, created by artist Kage Mawson, Pork ham pork loin shoulder t-bone,
                  pancetta turkey sirloin leberkas fatback venison filet mignon short loin. Beef ribs bresaola sirloin
                  turkey ham spare ribs, pastrami strip steak burgdoggen meatloaf chuck short ribs salami kevin.
                  Turducken venison kielbasa beef ribs spare ribs drumstick.</p>
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
