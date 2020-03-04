@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Personal cabinet</div>

                    <div class="card-body">

                        <div class="mb-3">
                            <strong>Name: </strong><span>{{$data["user"]->name}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>E-mail: </strong><span>{{$data["user"]->email}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Phone Number: </strong><span>{{$data["user"]->phone_number}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Company: </strong><span>{{$data["user"]->company}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Job: </strong><span>{{$data["user"]->job_title}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Member As: </strong><span>{{$data["user"]->member_as}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Topic: </strong><span>{{$data["user"]->topic}}</span>
                        </div>
                        <div class="mb-3">
                            <strong>Joined At: </strong><span>{{$data["user"]->joined}}</span>
                        </div>

                        <h3>Reports: </h3>


                        @foreach($data["reports"] as $report)
                            <div class="card text-center mb-3">
                                <div class="card-header">
                                    <ul class="nav nav-tabs card-header-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active">Details</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{{ $report->name }}</h5>
                                    <p class="card-text text-justify">{{ $report->description }}</p>
                                    @if($report->status == "pending")
                                        <span class="badge badge-primary">{{ $report->status }}</span>
                                    @elseif($report->status == "accepted")
                                        <span class="badge badge-success">{{ $report->status }}</span>
                                        <br>


                                        @if($report->file != null)
                                            <a href="{{$report->file_url}}">Download</a>
                                        @else
                                            <form method="POST" action="{{ route('report_update') }}" enctype="multipart/form-data">
                                                @csrf
                                                <input name="report_id" style="display: none" type="text" value="{{ $report->id }}">
                                                <input name="file" type="file">
                                                <button type="submit">Send</button>
                                            </form>
                                        @endif


                                    @else
                                        <span class="badge badge-danger">{{ $report->status }}</span>
                                    @endif

                                </div>
                            </div>
                        @endforeach

                    </div>
                </div>
            </div>


        </div>
    </div>
@endsection
