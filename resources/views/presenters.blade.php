@extends('layouts.init')

@section('content')

  <page-banner-component :title="{{ json_encode($data->title) }}"></page-banner-component>


  <section>
    <div id="lgx-speakers" class="lgx-speakers">
      <div class="lgx-inner">
        <div class="container">
          <div class="row" style="padding-top: 50px;">
            @foreach($data["presenters"] as $presenter)
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="lgx-single-speaker lgx-single-speaker-sm">
                  <figure>
                    <a class="profile-img" href=""><img src="{{ Storage::disk('public')->url($presenter->photo) }}" alt="speaker"/></a>
                    <figcaption>
                      @foreach(json_decode($presenter["social_networks"]) as $network)
                        <a class="sp-tw" href="{{ $network->attributes->link }}"><i class="fab {{ $network->attributes->network }}"></i></a>
                      @endforeach
                    </figcaption>
                  </figure>
                  <div class="speaker-info">
                    <h3 class="title"><a href="">Jhon Soumen</a></h3>
                    <h4 class="subtitle">Ceo of LogicHunt</h4>
                  </div>
                </div>
              </div>
            @endforeach
          </div>
          <!--//.ROW-->
        </div>
        <!-- //.CONTAINER -->
      </div>
      <!-- //.INNER -->
    </div>
  </section>

@endsection
