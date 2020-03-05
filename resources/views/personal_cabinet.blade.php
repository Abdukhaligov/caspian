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


                        @if( $data["user"]->canAddReport )
                            <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target="#newReport">
                                New report
                            </button>

                            <div class="modal fade" id="newReport" tabindex="-1" role="dialog"
                                 aria-labelledby="newReportLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="newReportLabel">New Report</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form method="POST" action="{{ route('report_create') }}">
                                            <div class="modal-body">
                                                @csrf
                                                <div class="form-group">
                                                    <label for="report-name" class="col-form-label">Name:</label>
                                                    <input name="name" type="text" class="form-control" id="report-name">
                                                </div>
                                                <div class="form-group">
                                                    <label for="report-description"
                                                           class="col-form-label">Description:</label>
                                                    <textarea name="description" class="form-control" id="report-description"></textarea>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
                                                </button>
                                                <button type="submit" class="btn btn-primary">Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        @endif

                        @foreach($data["reports"] as $report)
                            <div class="card text-center mb-3">
                                <div class="card-header">
                                    <div class="nav nav-tabs card-header-tabs">
                                        <div class="nav-item float-left">
                                            <a class="nav-link active">{{ $report->name }}</a>
                                        </div>
                                        <div class="nav-item" style="right: 20px;position: absolute;">

                                            @if($report->status == "pending")
                                                <span class="badge badge-primary">{{ $report->status }}</span>

                                                <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#removeReport">
                                                    X
                                                </button>

                                                <div class="modal fade" id="removeReport" tabindex="-1" role="dialog" aria-labelledby="removeReportLabel" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="removeReportLabel">Confirmation</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                Are you sure you want to remove this report
                                                                {{ $report->id }}
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                <form method="POST" action="{{ route('report_remove') }}">
                                                                    @csrf
                                                                    <input style="display: none" type="text" name="id" value="{{ $report->id }}">
                                                                    <button type="submit" class="btn btn-danger">Remove</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            @elseif($report->status == "accepted")
                                                <span class="badge badge-success">{{ $report->status }}</span>
                                            @else
                                                <span class="badge badge-danger">{{ $report->status }}</span>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p class="card-text text-justify">{{ $report->description }}</p>

                                    @if($report->status == "accepted")

                                        @if($report->file != null)
                                            <a href="{{$report->file_url}}">Download</a>
                                        @else
                                            <form method="POST" action="{{ route('report_update') }}"
                                                  enctype="multipart/form-data">
                                                @csrf
                                                <input name="report_id" style="display: none" type="text"
                                                       value="{{ $report->id }}">
                                                <input name="file" type="file">
                                                <button type="submit">Send</button>
                                            </form>
                                        @endif

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
