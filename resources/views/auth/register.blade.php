@extends('layouts.app')

@section('content')
  <?php $fake = false ? $fakeUser = factory(\App\User::class)->make() : ''?>

  <!-- Hero Section-->
  <section class="inner-hero inner-hero4">
    <div class="container">
      <div class="ih-content">
        <h1 class="wow fadeInUp" data-wow-delay=".4s">Registration</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb wow fadeInUp" data-wow-delay=".8s">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Registration</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <!-- /Hero Section-->

  <!--contact Us Section-->
  <section class="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="contact-details">
            <h2>{{ __('static.registration') }}</h2>
            <p>I have worls-class, flexible support via live chat, email and hone. I guarantee that you’ll be able to
              have any issue resolved within 24 hours.</p>
            <div class="single-contact-details">
              <h5>Phone:</h5>
              <p>8 800 2534 236</p>
              <p>8 800 2534 888</p>
            </div>
            <div class="single-contact-details">
              <h5>Send Email:</h5>
              <p>email@example.com</p>
              <p>email@yoursite.com</p>
            </div>
            <div class="single-contact-details">
              <h5>Address:</h5>
              <p>27 Division St, New York, NY 10002</p>
              <p>United States</p>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="contact-information">
            <form method="POST" action="{{ route('register') }}" enctype="multipart/form-data">
              @csrf

              <div class="form-group cfdb1" id="profile" style="display: none">
                <img style="width: 30%" alt="profile-image" />
              </div>

              <div class="form-group cfdb1">
                <input style="padding: 15px 15px 40px 15px;" type="file" id="avatar" class="form-control cp1 @error('avatar') is-invalid @enderror"
                       name="avatar" placeholder="avatar">
                @error('avatar')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1 @error('name') is-invalid @enderror"
                       name="name" placeholder="{{ __('static.full_name') }}"
                       value="{{ $fake ? $fakeUser->name : old('name') }}">
                @error('name')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1 @error('email') is-invalid @enderror"
                       name="email" placeholder="{{ __('static.e_mail_address') }}"
                       value="{{ $fake ? $fakeUser->email : old('email') }}">
                @error('email')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="password" class="form-control cp1 @error('password') is-invalid @enderror"
                       name="password" placeholder="{{ __('static.password') }}"
                       value="{{ $fake ? "123123" : '' }}">
                @error('password')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="password" class="form-control cp1 @error('password_confirmation') is-invalid @enderror"
                       name="password_confirmation" placeholder="{{ __('static.confirm_password') }}"
                       value="{{ $fake ? "123123" : '' }}">
                @error('password_confirmation')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1" style="float:left; width: 22%;">
                <label for="region" class="col-form-label text-md-right">{{ __('static.region') }}</label>
                <select style="height: 52px;font-size: 14px;"
                        class="selectpicker form-control cp1 @error('region') is-invalid @enderror"
                        name="region_id" id="region">
                  @foreach(\App\Region::scopeOrdered() as $region)
                    <option value="{{ $region->id }}" @if($region->id == 20) selected
                            @endif data-mask="{{ $region->mask }}"> {!! $region->name_en !!}</option>
                  @endforeach
                </select>
                @error('region')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1" style="float:right; width: 77%">
                <label for="phone" class="col-form-label text-md-right">{{ __('static.phone_number') }}</label>
                <input type="text" class="form-control cp1 @error('phone') is-invalid @enderror"
                       name="phone" id="phone" placeholder="{{ __('static.phone_number') }}"
                       value="+{{ $fake ? $fakeUser->phone : old('phone') }}">
                @error('phone')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1 @error('company') is-invalid @enderror"
                       name="company" placeholder="{{ __('static.company') }}"
                       value="{{ $fake ? $fakeUser->company : old('company') }}">
                @error('company')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1 @error('job_title') is-invalid @enderror"
                       name="job_title" placeholder="{{ __('static.job_title') }}"
                       value="{{ $fake ? $fakeUser->job_title : old('job_title') }}">
                @error('job_title')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <label for="degree_id" class="col-form-label text-md-right">{{ __('static.degree') }}</label>
                <select style="height: 52px;font-size: 14px;"
                        class="form-control cp1 @error('degree_id') is-invalid @enderror"
                        name="degree_id">
                  <option selected value="0">No degree</option>
                  @foreach(\App\Models\Degree::all() as $degree)
                    <option value="{{ $degree->id }}">{{ $degree->name }}</option>
                  @endforeach
                </select>
                @error('degree')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <label for="reference_id" class="col-form-label text-md-right">{{ __('static.referred_by') }}</label>
                <select style="height: 52px;font-size: 14px;"
                        class="form-control cp1 @error('reference_id') is-invalid @enderror"
                        name="reference_id">
                  @foreach($data['references'] as $reference)
                    <option @if(($fake ? $fakeUser->reference_id : old('reference_id')) == $reference->id) selected
                            @endif value="{{ $reference->id }}">{{ $reference->name }}</option>
                  @endforeach
                </select>
                @error('reference_id')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>

              @if($data["event"])
              <div class="form-group cfdb1" style="overflow: auto">
                <label for="membership_id" class="col-form-label text-md-right" style="float: left;">
                  Do u wanna join to event ?</label>
                <input class="form-control cp1" type="checkbox" name="join_to_event" id="join_to_event"
                       style="float: left;width: 25px;height: 30px; margin-left: 15px;"
                       @if(isset($_GET["speaker"])) checked @elseif(($fake ? $fakeUser->membership_id : old('membership_id'))) checked
                    @endif
                >
              </div>

              <div class="form-group cfdb1" id="membership">
                <label for="membership_id" class="col-form-label text-md-right">{{ __('static.member_as') }}</label>
                <select style="height: 52px;font-size: 14px;"
                        class="form-control cp1 @error('membership_id') is-invalid @enderror"
                        name="membership_id" id="membership_id">
                  <option disabled selected>Select</option>
                  <option disabled>Reporter</option>

                  @foreach($data['membership'] as $membership)

                    <option
                        reporter="{{ $membership->reporter }}"
                        @if(isset($_GET["speaker"]) && $_GET["speaker"] == $membership->id) selected
                        @elseif(($fake ? $fakeUser->membership_id : old('membership_id')) == $membership->id ) selected
                        @endif
                        value="{{ $membership->id }}"> @if($membership->reporter == true )
                        - {{ $membership->name }} @else {{ $membership->name }} @endif</option>
                  @endforeach
                </select>
                @error('membership_id')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div style="display: none" id="abstractForm">
                <div class="form-group cfdb1">
                  <label for="abstract_topic_id" class="col-form-label">Topic</label>
                  <select style="height: 52px;font-size: 14px;"
                          class="form-control cp1 @error('abstract_topic_id') is-invalid @enderror"
                          name="abstract_topic_id">
                    @foreach($data['topics'] as $topic)
                      @if($topic->hasChildren == true )
                        <option disabled>{{ $topic->name }}</option>
                      @else
                        <option
                            @if(old('abstract_topic_id') == $topic->id ) selected
                            @endif
                            value="{{ $topic->id }}">{{ $topic->name }}
                        </option>
                      @endif
                      @if($topic->hasChildren == true )
                        @foreach($topic->children as $child)
                          <option @if(old('abstract_topic_id') == $child->id ) selected @endif
                          value="{{ $child->id }}">— {{ $child->name }}
                          </option>
                        @endforeach
                      @endif
                    @endforeach
                  </select>
                  @error('abstract_topic_id')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
                <div class="form-group cfdb1">
                  <input type="text" class="form-control cp1 @error('abstract_name') is-invalid @enderror"
                         name="abstract_name" placeholder="Abstract title"
                         value="{{old('abstract_name') }}">
                  @error('abstract_name')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
                <div class="form-group cfdb1" style="margin-bottom: 10px">
                  <textarea rows="8" class="form-control cp1 @error('abstract_description') is-invalid @enderror"
                            name="abstract_description" id="abstract_description"
                            onkeyup="countChar(this)"
                            placeholder="Abstract description (max 300 words)"
                            maxlength="300">{{old('abstract_description') }}</textarea>
                  <div style="right: 0;position: absolute;" id="charNum">0/300</div>
                  @error('abstract_description')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
              </div>
              @endif
              <button style="margin-top: 15px" type="submit">{{ __('static.registration') }}</button>
              <div class="col-md-12 text-center">
                <div class="cf-msg"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>




@endsection

@section('scripts')
  <script>

    $("#avatar").change(function(){
      $('#profile').show();
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

      let membership = $("#membership_id");
      let abstractForm = $("#abstractForm");
      let membershipContainer = $("#membership");


      let joinEvent = $("#join_to_event");

      if (joinEvent.prop("checked")) {
        membershipContainer.show();

        if(membership[0]){
          if (membership[0].options[membership[0].selectedIndex].getAttribute('reporter') === "1") {
            abstractForm.show();
            console.log("reporter selected")
          } else {
            abstractForm.hide();
            console.log("not reporter selected");
          }


          membership.on('change', function () {
            if (this.options[this.selectedIndex].getAttribute('reporter') === "1") {
              abstractForm.show();
              console.log("reporter selected")
            } else {
              abstractForm.hide();
              console.log("not reporter selected")
            }
          });
        }
      } else {
        membershipContainer.hide();
      }

      joinEvent.change(function () {
        if (joinEvent.prop("checked")) {
          membershipContainer.show();

          if(membership[0]){
            if (membership[0].options[membership[0].selectedIndex].getAttribute('reporter') === "1") {
              abstractForm.show();
              console.log("reporter selected")
            } else {
              abstractForm.hide();
              console.log("not reporter selected");
            }

            membership.on('change', function () {
              if (this.options[this.selectedIndex].getAttribute('reporter') === "1") {
                abstractForm.show();
                console.log("reporter selected")
              } else {
                abstractForm.hide();
                console.log("not reporter selected")
              }
            });
          }
        } else {
          membershipContainer.hide();
          abstractForm.hide();
        }
      })

      //Timer Js//
      $('#region').change(function () {
        let mask = this.options[this.selectedIndex].getAttribute('data-mask');
        let temp = "";
        for (let i = 0; i < mask.length; i++) {
          if (mask.charAt(i) === "9") {
            temp = temp.concat("\\" + mask.charAt(i));
          } else {
            temp = temp.concat(mask.charAt(i));
          }
        }
        $('#phone').inputmask((temp.toString()));
      })
      $('#phone').inputmask("+\\9\\94 (99) ###-##-##");
    }(jQuery));
  </script>
@endsection