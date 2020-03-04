@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Personal cabinet</div>

                    <div class="card-body">

                        <div class="mb-3">
                            <strong>Name: </strong><span>{{$user->name}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>E-mail: </strong><span>{{$user->email}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Phone Number: </strong><span>{{$user->phone_number}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Company: </strong><span>{{$user->company}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Job: </strong><span>{{$user->job_title}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Member As: </strong><span>{{$user->member_as}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Topic: </strong><span>{{$user->topic}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Joined At: </strong><span>{{$user->joined}}</span>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    </div>
@endsection
