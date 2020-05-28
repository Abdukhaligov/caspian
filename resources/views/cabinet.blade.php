@extends('layouts.app')

@section('content')



  <!--Pricing Section-->
  <section id="ticket" class="pricing" style="height: 0; width: 0;margin: 0;">
    <div class="pp-2-bg">
      <!-- The Modal -->
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Abstract</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <!--contact Us Section-->
            <section class="contact-us no-mar">
              <div class="contact-information">
                <form method="POST" action="{{ route('report_create') }}">
                  @csrf
                  <div class="form-group cfdb1 text-left">
                    <label for="name" class="col-form-label" style="padding-left: 10px;margin-top: 10px;">Topic</label>
                    <select style="height: 52px;font-size: 14px;" class="form-control cp1 @error('topic_id') is-invalid @enderror"
                            name="topic_id" id="topic_id" autocomplete="topic_id">
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

                  <div class="form-group cfdb1">
                    <input type="text" class="form-control cp1" name="name" id="name" placeholder="Title of the abstract"
                           onfocus="this.placeholder = ''" onblur="this.placeholder ='Name'">
                  </div>

                  <div class="form-group cfdb1">
                  <textarea rows="8" class="form-control cp1" name="description" id="description"
                            placeholder="Abstract body (max 250 words)"
                            onfocus="this.placeholder =''" onblur="this.placeholder ='Comment'"></textarea>
                  </div>
                  <button type="submit" id="submit">Create</button>
                  <div class="col-md-12 text-center">
                    <div class="cf-msg"></div>
                  </div>
                </form>
              </div>
            </section>
            <!--/contact Us Section-->

          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-us"  id="app" style="margin-top: 150px">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="contact-details">
            <h2>{{ __('static.personal_cabinet') }}</h2>
            <div class="single-contact-details">
              <span><strong>Name: </strong>{{$data["user"]->name}}</span>
            </div>
            <div class="single-contact-details">
              <span><strong>E-mail: </strong>{{$data["user"]->email}}</span>
            </div>
            <div class="single-contact-details">
              <span><strong>Phone Number: </strong> <span v-mask="'+\\9\\94 (99) 999-99-99'">+{{$data["user"]->phone}}</span> </span>
            </div>
            <div class="single-contact-details">
              <span><strong>Company: </strong> {{$data["user"]->company}}</span>
            </div>
            <div class="single-contact-details">
              <span><strong>Job: </strong> {{$data["user"]->job_title}}</span>
            </div>
            <div class="single-contact-details">
              <span><strong>Member As: </strong> {{$data["user"]->membership_id}}</span>
            </div>
            <div class="single-contact-details">
              <span><strong>Joined At:</strong> {{$data["user"]->joined}}</span>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="contact-information">
            @if($data["reports"]->count() > 0)
              <h3>Abstracts: </h3>
            @endif
            @if( $data["user"]->canAddReport )

              <a style="padding: 12px;margin-top: 10px;" href="#" class="btn-3" data-toggle="modal" data-target="#myModal">New abstract</a>

            @endif
            @if($data["reports"])
              @foreach($data["reports"] as $report)
                  <div class="nav-item float-left"><a class="nav-link active">Ut molestias et nemo asperiores consequa</a></div>
                <div class="card text-center mb-3">

                  <div class="card-header">

                    <div class="nav nav-tabs card-header-tabs">
                      <div class="nav-item float-left"><a class="nav-link active">{{ substr($report->name,0,40) }}</a></div>
                      <div class="nav-item" style="right: 20px;position: absolute;">
                        @if($report->status == "pending")
                          <div class="badge badge-primary" style="display: block;float: left;font-size: 14px;margin-top: 5px;margin-right: 10px;">{{ $report->status }}</div>
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
                          <div  style="display: block;float: left;font-size: 14px;margin-top: 5px;margin-right: 10px;" class="badge badge-success">{{ $report->status }}</div>
                        @else
                          <div  style="display: block;float: left;font-size: 14px;margin-top: 5px;margin-right: 10px;" class="badge badge-danger">{{ $report->status }}</div>
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
  </section>


@endsection
