@extends('layouts.init')

@section('content')

  <section class="mb-5 mt-5" style="margin-top: 50px">
    <div id="lgx-photo-gallery" class="lgx-photo-gallery">
      <div class="lgx-inner">
        <div class="container">
          <div id="lgx-memorisinner" class="lgx-memorisinner">
            <div class="container-fluid text-center">
              <div class="row">
                @if($data["photos"])
                  <div style="overflow: auto">
                    {{--                                        <h3>Photos</h3>--}}
                    @foreach($data["photos"] as $image)
                      <div class="lgx-single">
                        <figure style="margin: 0">
                          <img title="Memories One"
                               src="{{ Storage::disk('mediaFiles')->url($image->id."/".$image->file_name) }}"
                               alt="Memories one"/>
                          <figcaption class="lgx-figcaption">
                            <div class="lgx-hover-link">
                              <div class="lgx-vertical">
                                <a title="Memories One"
                                   href="{{ Storage::disk('mediaFiles')->url($image->id."/".$image->file_name) }}">
                                  <i class="fa fa-search fa-2x"></i>
                                </a>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    @endforeach
                  </div>
                @endif
              </div>
            </div> <!--//.CONAINER-->
          </div><!--//.lgx CONTACT INNER-->
        </div>
        <!-- //.CONTAINER -->
      </div>
    </div>
  </section>

@endsection
