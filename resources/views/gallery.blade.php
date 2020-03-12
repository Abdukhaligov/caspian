@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ __('static.dashboard') }}</div>

                    <div class="card-body">
                        @if($data["photos"])
                        <div style="overflow: auto">
                            <h3>Photos</h3>
                                @foreach($data["photos"] as $image)
                                    <div class="temp">
                                        <img alt=""
                                             src="{{ Storage::disk('mediaFiles')->url($image->id."/".$image->file_name) }}">
                                    </div>
                                @endforeach
                        </div>
                        @endif
                        <br>
                        @if($data["videos"])
                            <div>
                                <h3>Videos</h3>
                                    @foreach($data["videos"] as $video)
                                        <div class="temp">
                                            <img alt=""
                                                 src="{{ Storage::disk('public')->url($video->attributes->cover) }}">
                                            <iframe width="75" height="75"
                                                    src="https://www.youtube.com/embed/{{ $video->attributes->url }}">
                                            </iframe>
                                        </div>
                                    @endforeach
                            </div>
                        @endif
                    </div>
                </div>
            </div>


        </div>
    </div>
@endsection
