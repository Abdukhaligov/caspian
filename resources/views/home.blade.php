@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                        <passport-authorized-clients>
                        </passport-authorized-clients>
                    You are logged in!
                        <br>

                </div>
            </div>
        </div>

        <div class="col-md-12 mt-4">
            <passport-clients></passport-clients>
        </div>

        <div class="col-md-12 mt-4">
            <passport-personal-access-tokens></passport-personal-access-tokens>
        </div>
    </div>
</div>
@endsection
