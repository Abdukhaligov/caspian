@extends('layouts.app')

@section('content')
  <style>
    .badge {
      display: block;
      float: left;
      font-size: 11px;
      margin-top: 5px;
      margin-right: 4px;
      font-weight: 100;
    }

    .form-group img {
      width: 30%;
      max-height: 200px;
    }
  </style>

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
                    <select style="height: 52px;font-size: 14px;"
                            class="form-control cp1 @error('topic_id') is-invalid @enderror"
                            name="topic_id" id="topic_id" autocomplete="topic_id">
                      @foreach($data['topics'] as $topic)
                        <option value="{{ $topic->id }}">{{ $topic->name }}</option>
                        @foreach($topic->children as $child)
                          <option value="{{ $child->id }}">- {{ $child->name }}</option>
                        @endforeach
                      @endforeach
                    </select>
                    @error('topic_id')
                    <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                    @enderror
                  </div>

                  <div class="form-group cfdb1">
                    <input type="text" class="form-control cp1" name="name" id="name" placeholder="Abstract title"
                           onfocus="this.placeholder = ''" onblur="this.placeholder ='Abstract title'">
                  </div>

                  <div class="form-group cfdb1">
                  <textarea rows="8" class="form-control cp1" name="description" id="description"
                            placeholder="Abstract description (max 300 words)"
                            onkeyup="countChar(this)"
                            maxlength="300"
                            onfocus="this.placeholder =''"
                            onblur="this.placeholder ='Abstract description (max 300 words)'"></textarea>
                    <div style="right: 0;position: absolute;" id="charNum">0/300</div>
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


  <section class="contact-us" id="app" style="margin-top: 150px">
    <div class="container">
      <div class="row">
        <div class="col-md-6">

          @if(session('pill'))
            @php $pill = session('pill') @endphp
          @else
            @php $pill = "main" @endphp
          @endif


          <h2>{{ __('static.account_details') }}</h2>
          <ul style="margin-top: 15px" class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a class="nav-link @if($pill == "main") active @endif" id="pills-main-tab" data-toggle="pill"
                 href="#pills-main" role="tab"
                 aria-controls="pills-main" aria-selected="true">Main</a>
            </li>
            <li class="nav-item">
              <a class="nav-link @if($pill == "info") active @endif" id="pills-info-tab" data-toggle="pill"
                 href="#pills-info" role="tab"
                 aria-controls="pills-info" aria-selected="false">Change info</a>
            </li>
            <li class="nav-item">
              <a class="nav-link @if($pill == "password") active @endif" id="pills-password-tab" data-toggle="pill"
                 href="#pills-password" role="tab"
                 aria-controls="pills-password" aria-selected="false">Change Password</a>
            </li>
            <li class="nav-item">
              <a class="nav-link @if($pill == "links") active @endif" id="pills-links-tab" data-toggle="pill"
                 href="#pills-links" role="tab"
                 aria-controls="pills-links" aria-selected="false">Usefull Links</a>
            </li>
            <li class="nav-item">
              <a class="nav-link @if($pill == "events") active @endif" id="pills-events-tab" data-toggle="pill"
                 href="#pills-events" role="tab"
                 aria-controls="pills-events" aria-selected="false">Events</a>
            </li>
          </ul>
          <div class="tab-content pt-2 pl-1" id="pills-tabContent">
            <div class="tab-pane fade @if($pill == "main") show active @endif" id="pills-main" role="tabpanel"
                 aria-labelledby="pills-main-tab">
              <div class="contact-information" style="margin-top: 10px;">
                <div class="form-group cfdb1">
                  <label class="col-form-label text-md-right">{{ __('static.full_name') }}</label>
                  <input type="text" disabled class="form-control cp1" value="{{$data["user"]->name}}">
                </div>
                <div class="form-group cfdb1">
                  <label class="col-form-label text-md-right">{{ __('static.e_mail_address') }}</label>
                  <input type="text" disabled class="form-control cp1" value="{{$data["user"]->email}}">
                </div>
                <div class="form-group cfdb1" style="float:left; width: 22%;">
                  <label for="region" class="col-form-label text-md-right">{{ __('static.region') }}</label>
                  <select disabled style="height: 52px;font-size: 14px;"
                          class="selectpicker form-control cp1" id="region">
                    @foreach(\App\Region::scopeOrdered() as $region)
                      <option value="{{ $region->id }}" @if($region->id == $data["user"]->region_id) selected
                              @endif data-mask="{{ $region->mask }}"> {!! $region->name_en !!}</option>
                    @endforeach
                  </select>
                </div>
                <div class="form-group cfdb1" style="float:right; width: 77%">
                  <label for="phone" class="col-form-label text-md-right">{{ __('static.phone_number') }}</label>
                  <input type="text" class="form-control cp1"
                         disabled
                         value="+{{$data["user"]->phone}}"
                         name="phone" id="phone" placeholder="{{ __('static.phone_number') }}">
                </div>
              </div>
            </div>
            <div class="tab-pane fade @if($pill == "info") show active @endif" id="pills-info" role="tabpanel"
                 aria-labelledby="pills-info-tab">
              <div class="contact-information" style="margin-top: 10px;">
                <form method="POST" action="{{ route('user_update') }}" enctype="multipart/form-data">
                  @csrf

                  <div class="form-group cfdb1" id="profile" @if(!$data["user"]->avatar) style="display: none" @endif>
                    @if($data["user"]->avatar)
                      {{ $data["user"]->avatar }}
                    @else
                      <img style="display: none"/>
                    @endif
                    <button style="padding: 5px 15px;" type="button" id="removeAvatar" class="btn-danger">x</button>
                    <input type="checkbox" name="isAvatarRemoved" id="isAvatarRemoved" style="display: none">
                  </div>

                  <div class="form-group cfdb1">
                    <input style="padding: 15px 15px 40px 15px;" type="file" id="avatar"
                           class="form-control cp1 @error('avatar') is-invalid @enderror"
                           name="avatar" placeholder="avatar">
                    @error('avatar')
                    <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                    @enderror
                  </div>

                  <div class="form-group cfdb1">
                    <label class="col-form-label text-md-right">{{ __('static.company') }}</label>
                    <input type="text" class="form-control cp1 @error('company') is-invalid @enderror"
                           name="company" placeholder="{{ __('static.company') }}"
                           value="{{$data["user"]->company}}">
                    @error('company')
                    <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                    @enderror
                  </div>
                  <div class="form-group cfdb1">
                    <label class="col-form-label text-md-right">{{ __('static.job_title') }}</label>
                    <input type="text" class="form-control cp1 @error('job_title') is-invalid @enderror"
                           name="job_title" id="job_title" placeholder="{{ __('static.job_title') }}"
                           value="{{$data["user"]->job_title}}" autocomplete="job_title">
                    @error('job_title')
                    <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                    @enderror
                  </div>
                  <div class="form-group cfdb1">
                    <label for="degree_id" class="col-form-label text-md-right">{{ __('static.degree') }}</label>
                    <select style="height: 52px;font-size: 14px;"
                            class="form-control cp1 @error('degree_id') is-invalid @enderror"
                            name="degree_id" id="degree_id" autocomplete="degree">
                      <option selected value="0">No degree</option>
                      @foreach(\App\Models\Degree::all() as $degree)
                        <option value="{{ $degree->id }}"
                                @if($data["user"]->degree_id == $degree->id) selected @endif
                        >{{ $degree->name }}</option>
                      @endforeach
                    </select>
                    @error('degree_id')
                    <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                    @enderror
                  </div>
                  <button style="margin-top: 15px" type="submit">{{ __('static.user_update') }}</button>
                  <div class="col-md-12 text-center">
                    <div class="cf-msg"></div>
                  </div>
                </form>
              </div>
            </div>
            <div class="tab-pane fade @if($pill == "password") show active @endif" id="pills-password" role="tabpanel"
                 aria-labelledby="pills-password-tab">
              <div class="contact-information" style="margin-top: 10px;">
                <form method="POST" action="{{ route('user_update_password') }}">
                  @csrf
                  <div class="form-group cfdb1">
                    <label class="col-form-label text-md-right">{{ __('static.current_password') }}</label>
                    <input type="password" class="form-control cp1 @error('current_password') is-invalid @enderror"
                           name="current_password" placeholder="{{ __('static.current_password') }}">
                    @error('current_password')
                    <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                    @enderror
                  </div>
                  <div class="form-group cfdb1">
                    <label class="col-form-label text-md-right">{{ __('static.new_password') }}</label>
                    <input type="password" class="form-control cp1 @error('password') is-invalid @enderror"
                           name="password" placeholder="{{ __('static.new_password') }}">
                    @error('password')
                    <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                    @enderror
                  </div>
                  <div class="form-group cfdb1">
                    <input type="password" class="form-control cp1 @error('password_confirmation') is-invalid @enderror"
                           name="password_confirmation" placeholder="{{ __('static.confirm_password') }}">
                    @error('password_confirmation')
                    <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                    @enderror
                  </div>
                  <button style="margin-top: 15px" type="submit">{{ __('static.password_update') }}</button>
                  <div class="col-md-12 text-center">
                    <div class="cf-msg"></div>
                  </div>
                </form>
              </div>
            </div>
            <div class="tab-pane fade @if($pill == "links") show active @endif" id="pills-links" role="tabpanel"
                 aria-labelledby="pills-links-tab">
              <div class="contact-information" style="margin-top: 10px;">
                @foreach($data["broadcastVouchers"] as $voucher)
                  <strong>{{$voucher->name}}</strong>: <a href="{{ route('vouchers',$voucher->id) }}" target="_blank">Download</a></br>
                @endforeach

                @foreach($data["vouchers"] as $voucher)
                  <strong>{{$voucher->name}}</strong>: <a href="{{ route('vouchers',$voucher->id) }}" target="_blank">Download</a></br>
                @endforeach
              </div>
            </div>
            <div class="tab-pane fade @if($pill == "events") show active @endif" id="pills-events" role="tabpanel"
                 aria-labelledby="pills-events-tab">
              <div class="contact-information" style="margin-top: 10px;">

                @if($data["events"] && $data["events"]->count() > 0)
                  <section class="faq" style="margin-top: 0;">
                    <div id="accordion">
                      <div class="card ">
                        <div class="card-header">
                          <h4 class="card-header">
                            <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                               href="#collapseHistory" aria-expanded="false">
                              History
                              <i class="fas fa-minus-circle faq-icon"></i>
                              <i class="fas fa-plus-circle"></i></a>
                          </h4>
                        </div>
                        <div id="collapseHistory" class="panel-collapse in collapse" style="">
                          <div class="card-block">
                            <p>
                            @foreach($data["events"] as $event)
                              @php
                                switch ($event->pivot->status){
                                  case 1: $status = "In progress"; break;
                                  case 2: $status = "Denied"; break;
                                  default: $status = "Approved";}
                              @endphp
                              <p>Event: {{ $event->name }}</p>
                              <p>Member As: {{ \App\Models\Membership::find($event->pivot->membership_id)->name }}</p>
                              <p>Status: {{ $status }}</p>
                              @if($event->userReports(Auth::user()->id)->count() > 0)
                                <div id="accordion">
                                  <div class="card">
                                    <div class="card-header">
                                      <h4 class="card-header">
                                        <a class="accordion-toggle collapsed" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapse{{$event->id}}"
                                           aria-expanded="false">
                                          Reports
                                          <i class="fas fa-minus-circle faq-icon"></i>
                                          <i class="fas fa-plus-circle"></i></a>
                                      </h4>
                                    </div>
                                    <div id="collapse{{$event->id}}" class="panel-collapse collapse in">
                                      <div class="card-block">
                                        @foreach($event->userReports(Auth::user()->id) as $report)
                                          @php
                                            switch ($report->status){
                                              case 1: $report->status = "In progress"; break;
                                              case 2: $report->status = "Denied"; break;
                                              default: $report->status = "Approved";}
                                          @endphp
                                          <p>Name: {{ $report->name }}</p>
                                          <p>Topic: {{ $report->topic->name }}</p>
                                          <p>Status: {{ $report->status }}</p>
                                          @if($report->file)
                                            <p>File: <a target="_blank"
                                                        href="{{ Storage::disk('reports')->url($report->file) }}">Download</a>
                                            </p>
                                          @endif
                                        @endforeach
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              @endif
                              <br>
                              @endforeach
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                @endif

                @if($data["user"]->currentMembership)
                  @php $currentMembership = $data["user"]->currentMembership;
                      switch ($currentMembership->status){
                        case 1: $status = "In progress"; break;
                        case 2: $status = "Denied"; break;
                        default: $status = "Approved";
                      }
                  @endphp
                  Your participation in current Event is: {{ $currentMembership->name }} ({{ $status }}) <br>
                  Do u wanna change your participation ? <br>
                  <form method="POST" action="{{ route('user_update_membership') }}">
                    @csrf
                    <div class="form-group cfdb1">
                      <label for="membership_id"
                             class="col-form-label text-md-right">{{ __('static.member_as') }}</label>
                      <select style="height: 52px;font-size: 14px;"
                              class="form-control cp1 @error('membership_id') is-invalid @enderror"
                              name="membership_id" id="membership_id" autocomplete="membership_id">
                        <option disabled selected>Select</option>
                        <option disabled>Reporter</option>
                        @foreach($data['memberships'] as $membership)
                          <option
                              value="{{ $membership->id }}"
                              @if($currentMembership->id == $membership->id ?? '') selected @endif>

                            @if($membership->reporter == true )
                              - {{ $membership->name }}
                            @else
                              {{ $membership->name }}
                            @endif
                          </option>
                        @endforeach
                      </select>
                      @error('membership_id')
                      <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                      @enderror
                      <span>
                        <strong>
                          If you change your participation, all your current reports will be denied
                        </strong>
                      </span>
                    </div>
                    <button style="margin-top: 15px" type="submit">{{ __('static.user_update') }}</button>
                    <div class="col-md-12 text-center">
                      <div class="cf-msg"></div>
                    </div>
                  </form>
                @elseif($data["event"])
                  You have no participation in Active Event <br>
                  Do u wanna join to event ?
                  <form method="POST" action="{{ route('user_update_membership') }}">
                    @csrf
                    <div class="form-group cfdb1">
                      <label for="membership_id"
                             class="col-form-label text-md-right">{{ __('static.member_as') }}</label>
                      <select style="height: 52px;font-size: 14px;"
                              class="form-control cp1 @error('membership_id') is-invalid @enderror"
                              name="membership_id" id="membership_id" autocomplete="membership_id">
                        <option disabled selected>Select</option>
                        <option disabled>Reporter</option>
                        @foreach($data['memberships'] as $membership)
                          <option
                              value="{{ $membership->id }}">

                            @if($membership->reporter == true )
                              - {{ $membership->name }}
                            @else
                              {{ $membership->name }}
                            @endif
                          </option>
                        @endforeach
                      </select>
                      @error('membership_id')
                      <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                      @enderror
                      {{--                      <span><strong>If you change</strong></span>--}}
                    </div>
                    <button style="margin-top: 15px" type="submit">{{ __('static.membership_update') }}</button>
                    <div class="col-md-12 text-center">
                      <div class="cf-msg"></div>
                    </div>
                  </form>
                @endif


              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="contact-information">

            @if( $data["user"]->canAddReport )
              <a style="padding: 12px;margin-top: 10px;" href="#" class="btn-3" data-toggle="modal"
                 data-target="#myModal">New abstract</a>
            @endif

            @if($data["reports"]->count() > 0)
              <h3>Abstracts: </h3>
              @foreach($data["reports"] as $report)
                Topic:
                <div class="card p-3 mb-3">
                  @if($report->topic->parent)
                    {{ $report->topic->parent->name}}<br>
                    —{{ $report->topic->name}}
                  @else
                    {{ $report->topic->name}}
                  @endif

                </div>
                <div class="card text-center mb-3">

                  <div class="card-header">

                    <div class="nav nav-tabs card-header-tabs">
                      <div class="nav-item float-left"><a class="nav-link active">{{ substr($report->name,0,40) }}</a>
                      </div>
                      <div class="nav-item" style="right: 20px;position: absolute;">
                        @if($report->status == 1)
                          <div class="badge badge-primary">
                            In progress
                          </div>
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
                        @elseif($report->status == 3)
                          <div class="badge badge-success">Approved
                          </div>
                        @else
                          <div class="badge badge-danger">Denied
                          </div>
                        @endif
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="card-text text-justify">{{ $report->description }}</p>
                    @if($report->status == 3)
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

@section('scripts')
  <script>
    $("#removeAvatar").on('click', function () {
      $('#profile').hide();
      $('#isAvatarRemoved').prop('checked', true);
    })

    $("#avatar").change(function () {
      $('#isAvatarRemoved').prop('checked', false);
      $('#profile').show();
      $('#profile img').show();

      if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('#profile img').attr('src', e.target.result);
        }

        reader.readAsDataURL(this.files[0]);
      }
    });

    function countChar(val) {
      var len = val.value.length;
      if (len >= 500) {
        val.value = val.value.substring(0, 300);
      } else {
        $('#charNum').text(len + "/300");
      }
    }

    $(function () {
      let region = $('#region');

      //Timer Js//
      function changeMask(e) {
        let mask = e.options[e.selectedIndex].getAttribute('data-mask');
        let temp = "";
        for (let i = 0; i < mask.length; i++) {
          if (mask.charAt(i) === "9") {
            temp = temp.concat("\\" + mask.charAt(i));
          } else {
            temp = temp.concat(mask.charAt(i));
          }
        }
        $('#phone').inputmask((temp.toString()));
      }

      region.change(function () {
        changeMask(this)
      })

      changeMask(region[0])


    }(jQuery));

  </script>
@endsection