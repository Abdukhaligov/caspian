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
                    <select style="height: 52px;font-size: 14px;"
                            class="form-control cp1 @error('topic_id') is-invalid @enderror"
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
              <a class="nav-link @if($pill == "main") active @endif" id="pills-main-tab" data-toggle="pill" href="#pills-main" role="tab"
                 aria-controls="pills-main" aria-selected="true">Main</a>
            </li>
            <li class="nav-item">
              <a class="nav-link @if($pill == "info") active @endif" id="pills-info-tab" data-toggle="pill" href="#pills-info" role="tab"
                 aria-controls="pills-info" aria-selected="false">Change info</a>
            </li>
            <li class="nav-item">
              <a class="nav-link @if($pill == "password") active @endif" id="pills-password-tab" data-toggle="pill" href="#pills-password" role="tab"
                 aria-controls="pills-password" aria-selected="false">Change Password</a>
            </li>
          </ul>
          <div class="tab-content pt-2 pl-1" id="pills-tabContent">
            <div class="tab-pane fade @if($pill == "main") show active @endif" id="pills-main" role="tabpanel" aria-labelledby="pills-main-tab">
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
                          class="selectpicker form-control cp1" id="region" >
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
            <div class="tab-pane fade @if($pill == "info") show active @endif" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab">
              <div class="contact-information" style="margin-top: 10px;">
                <form method="POST" action="{{ route('user_update') }}">
                  @csrf
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
                  <div class="form-group cfdb1">
                    <label for="membership_id" class="col-form-label text-md-right">{{ __('static.member_as') }}</label>
                    <select style="height: 52px;font-size: 14px;"
                            class="form-control cp1 @error('membership_id') is-invalid @enderror"
                            name="membership_id" id="membership_id" autocomplete="membership_id">
                      <option disabled selected>Select</option>
                      <option disabled>Reporter</option>

                      @foreach($data['membership'] as $membership)
                        <option
                            value="{{ $membership->id }}"
                            @if($data["user"]->membership_id == $membership->id) selected @endif>

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
                    <span class="invalid-feedback"><strong>If you change</strong></span>
                  </div>
                  <button style="margin-top: 15px" type="submit">{{ __('static.user_update') }}</button>
                  <div class="col-md-12 text-center">
                    <div class="cf-msg"></div>
                  </div>
                </form>
              </div>
            </div>
            <div class="tab-pane fade @if($pill == "password") show active @endif" id="pills-password" role="tabpanel" aria-labelledby="pills-password-tab">
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
          </div>
        </div>
        <div class="col-md-6">
          <div class="contact-information">
            @if($data["reports"]->count() > 0)
              <h3>Abstracts: </h3>
            @endif
            @if( $data["user"]->canAddReport )

              <a style="padding: 12px;margin-top: 10px;" href="#" class="btn-3" data-toggle="modal"
                 data-target="#myModal">New abstract</a>

            @endif
            @if($data["reports"])
              @foreach($data["reports"] as $report)
                <div class="card text-center mb-3">

                  <div class="card-header">

                    <div class="nav nav-tabs card-header-tabs">
                      <div class="nav-item float-left"><a class="nav-link active">{{ substr($report->name,0,40) }}</a>
                      </div>
                      <div class="nav-item" style="right: 20px;position: absolute;">
                        @if($report->status == "pending")
                          <div class="badge badge-primary"
                               style="display: block;float: left;font-size: 14px;margin-top: 5px;margin-right: 10px;">{{ $report->status }}</div>
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
                          <div style="display: block;float: left;font-size: 14px;margin-top: 5px;margin-right: 10px;"
                               class="badge badge-success">{{ $report->status }}</div>
                        @else
                          <div style="display: block;float: left;font-size: 14px;margin-top: 5px;margin-right: 10px;"
                               class="badge badge-danger">{{ $report->status }}</div>
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

@section('scripts')
  <script>
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