@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ __('static.dashboard') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif


                        <div class="text-center">
                            <img class="w-25" src="{{ Storage::disk('local')->url($data->logo) }}" alt="">
                        </div>
                        <div class="text-center">
                            <h2>{{ $data->name }}</h2>
                        </div>
                        <Timer
                            starttime="{{ date('m d, Y, h:i:s') }}"
                            endtime="{{ $data->date }}"
                            trans='{
                                     "day":"Day",
                                     "hours":"Hours",
                                     "minutes":"Minuts",
                                     "seconds":"Seconds",
                                     "expired":"Event has been expired.",
                                     "running":"Till the end of event.",
                                     "upcoming":"Till start of event.",
                                     "status": {
                                        "expired":"Expired",
                                        "running":"Running",
                                        "upcoming":"Future"
                                       }}'
                        >
                        </Timer>


                    </div>
                </div>
            </div>


        </div>
    </div>
@endsection
