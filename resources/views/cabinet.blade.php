@extends('layouts.init')

@section('content')

  <page-banner-component :title="{{ json_encode($data->title) }}"></page-banner-component>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <span>{{ __('static.personal_cabinet') }}</span>
            <div class="float-right">
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#editUser">
                Edit
              </button>
              <div class="modal fade" id="editUser" tabindex="-1" role="dialog"
                   aria-labelledby="editUserLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="editUserLabel">Edit User</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form method="POST" action="{{ route('register') }}">
                      <div class="modal-body">
                        @csrf
                        <div class="form-group">
                          <label for="name @error('name') is-invalid @enderror" class="col-form-label text-md-right">{{ __('Name') }}</label>
                          <input id="name" type="text" class="form-control" name="name" value="{{$data["user"]->name}}"
                                 autocomplete="name">
                          @error('name')
                          <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                          @enderror
                        </div>
                        <div class="form-group">
                          <label for="email"
                                 class="col-form-label text-md-right">{{ __('E-Mail Address') }}</label>
                          <input id="email" type="email" class="form-control" name="email"
                                 value="{{$data["user"]->email}}"
                                 autocomplete="email">
                        </div>
                        <div class="form-group">
                          <label for="name" class="col-form-label text-md-right">{{ __('Phone Number') }}</label>
                          <input v-mask="'+\\9\\94 (99) 999-99-99'" id="phone" type="text" class="form-control"
                                 name="phone" value="+{{$data["user"]->phone}}" autocomplete="phone">
                        </div>
                        <div class="form-group">
                          <label for="name" class="col-form-label text-md-right">{{ __('Company') }}</label>
                          <input id="company" type="text" class="form-control" name="company"
                                 value="{{$data["user"]->company}}"
                                 autocomplete="company">
                        </div>
                        <div class="form-group">
                          <label for="name" class="col-form-label text-md-right">{{ __('Job Title') }}</label>
                          <input id="job_title" type="text" class="form-control" name="job_title"
                                 value="{{$data["user"]->job_title}}"
                                 autocomplete="job_title">
                        </div>
                        <div class="form-group">
                          <label for="name" class="col-form-label text-md-right">{{ __('Member as') }}</label>
                          <select id="membership_id" type="text" class="form-control" name="membership_id"
                                  autocomplete="membership_id">
                            @foreach($data['membership'] as $membership)
                              <option @if($membership->hasChildren == true ) disabled @endif
                              @if($data["user"]->membership_id == $membership->id )selected
                                      @endif value="{{ $membership->id }}">{{ $membership->name }}</option>
                              @if($membership->hasChildren == true )
                                @foreach($membership->children as $child)
                                  <option
                                      @if($data["user"]->membership_id == $child->id ) selected
                                      @endif
                                      value="{{ $child->id }}">— {{ $child->name }}
                                  </option>
                                @endforeach
                              @endif
                            @endforeach
                          </select>
                        </div>
                        <div class="form-group">
                          <label class="col-form-label text-md-right">{{ __('Referred by') }}</label>
                          <input type="text" disabled class="form-control" value="{{$data["user"]->reference}}">
                        </div>
                        <div class="form-group">
                          <label class="col-form-label text-md-right">Joined At:</label>
                          <input type="text" disabled class="form-control" value="{{$data["user"]->joined}}">
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <strong>Name: </strong><span>{{$data["user"]->name}}</span>
            </div>
            <div class="mb-3">
              <strong>E-mail: </strong><span>{{$data["user"]->email}}</span>
            </div>
            <div class="mb-3">
              <strong>Phone Number: </strong><span v-mask="'+\\9\\94 (99) 999-99-99'">+{{$data["user"]->phone}}</span>
            </div>
            <div class="mb-3">
              <strong>Company: </strong><span>{{$data["user"]->company}}</span>
            </div>
            <div class="mb-3">
              <strong>Job: </strong><span>{{$data["user"]->job_title}}</span>
            </div>
            <div class="mb-3">
              <strong>Member As: </strong><span>{{$data["user"]->membership_id}}</span>
            </div>
            <div class="mb-3">
              <strong>Joined At: </strong><span>{{$data["user"]->joined}}</span>
            </div>
            @if($data["reports"]->count() > 0)
              <h3>Reports: </h3>
            @endif
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
                          <label for="name" class="col-form-label">{{ __('Topic') }}:</label>
                          <select id="topic_id" type="text" class="form-control @error('topic_id') is-invalid @enderror"
                                  name="topic_id" required autocomplete="topic_id">
                            <option selected disabled value="">Select topic</option>
                            @foreach($data['topics'] as $topic)
                              @if($topic->hasChildren == true )
                                <option disabled>{{ $topic->name }}</option>
                              @else
                                <option
                                    @if(old('topic_id') == $topic->id ) selected
                                    @endif
                                    value="{{ $topic->id }}">{{ $topic->name }}
                                </option>
                              @endif
                              @if($topic->hasChildren == true )
                                @foreach($topic->children as $child)
                                  <option @if(old('topic_id') == $child->id ) selected @endif
                                  value="{{ $child->id }}">— {{ $child->name }}
                                  </option>
                                @endforeach
                              @endif
                            @endforeach
                          </select>
                          @error('topic_id')
                          <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                          @enderror
                        </div>
                        <div class="form-group">
                          <label for="report-name" class="col-form-label">Name:</label>
                          <input required name="name" type="text" class="form-control" id="report-name">
                        </div>
                        <div class="form-group">
                          <label for="report-description" class="col-form-label">Description:</label>
                          <textarea minlength="200" maxlength="600" required name="description"
                                    class="form-control" id="report-description"></textarea>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            @endif
            @if($data["reports"])
              @foreach($data["reports"] as $report)
                <div class="card text-center mb-3">
                  <div class="card-header">
                    <div class="nav nav-tabs card-header-tabs">
                      <div class="nav-item float-left"><a class="nav-link active">{{ $report->name }}</a></div>
                      <div class="nav-item" style="right: 20px;position: absolute;">
                        @if($report->status == "pending")
                          <span class="badge badge-primary">{{ $report->status }}</span>
                          <button type="button" class="btn btn-danger btn-sm"
                                  data-toggle="modal" data-target="#removeReport">X
                          </button>
                          <div class="modal fade" id="removeReport" tabindex="-1"
                               role="dialog" aria-labelledby="removeReportLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="removeReportLabel">Confirmation</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">Are you sure you want to remove this report</div>
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
                        <a href="{{Storage::disk('reports')->url($report->file)}}">Download</a>
                      @else
                        <form method="POST" action="{{ route('report_update') }}" enctype="multipart/form-data">
                          @csrf
                          <input name="report_id" style="display: none" type="text" value="{{ $report->id }}">
                          <input name="file" type="file">
                          <button type="submit">Send</button>
                        </form>
                      @endif
                    @endif
                  </div>
                </div>
              @endforeach
            @endif
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
