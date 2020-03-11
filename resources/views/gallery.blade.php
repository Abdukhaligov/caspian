@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ __('static.dashboard') }}</div>

                    <div class="card-body">

                        @foreach($data as $image)

                            <div class="temp">
                                <img alt=""
                                     src="{{ Storage::disk('mediaFiles')->url($image->id."/".$image->file_name) }}">
                            </div>
                        @endforeach

                    </div>
                </div>
            </div>


        </div>
    </div>
@endsection
