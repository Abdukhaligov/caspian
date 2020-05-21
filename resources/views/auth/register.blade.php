@extends('layouts.app')

@section('content')

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

  <?php $fake = false ? $fakeUser = factory(\App\User::class)->make() : ''?>
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
            <form method="POST" action="{{ route('register') }}">
              @csrf
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1 @error('name') is-invalid @enderror"
                       name="name" id="name" placeholder="{{ __('static.full_name') }}"
                       value="{{ $fake ? $fakeUser->name : old('name') }}" autocomplete="name"
                       onfocus="this.placeholder = ''" onblur="this.placeholder ='{{ __('static.full_name') }}'">
                @error('name')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1 @error('email') is-invalid @enderror"
                       name="email" placeholder="{{ __('static.e_mail_address') }}"
                       value="{{ $fake ? $fakeUser->email : old('email') }}" autocomplete="email"
                       onfocus="this.placeholder = ''" onblur="this.placeholder ='{{ __('static.e_mail_address') }}'">
                @error('email')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="password" class="form-control cp1 @error('password') is-invalid @enderror"
                       name="password" placeholder="{{ __('static.password') }}"
                       value="{{ $fake ? "123123" : '' }}" autocomplete="new-password">
                @error('password')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="password" class="form-control cp1 @error('password_confirmation') is-invalid @enderror"
                       name="password_confirmation" id="password-c" placeholder="{{ __('static.confirm_password') }}"
                       value="{{ $fake ? "123123" : '' }}" autocomplete="new-password">
                @error('password_confirmation')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1 @error('phone') is-invalid @enderror"
                       name="phone" id="phone" placeholder="{{ __('static.phone_number') }}"
                       value="+{{ $fake ? $fakeUser->phone : old('phone') }}" autocomplete="phone">
                @error('phone')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1 @error('company') is-invalid @enderror"
                       name="company" id="" placeholder="{{ __('static.company') }}"
                       value="{{ $fake ? $fakeUser->company : old('company') }}" autocomplete="company">
                @error('company')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="text" class="form-control cp1 @error('job_title') is-invalid @enderror"
                       name="job_title" id="job_title" placeholder="{{ __('static.job_title') }}"
                       value="{{ $fake ? $fakeUser->job_title : old('job_title') }}" autocomplete="job_title">
                @error('job_title')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <label for="degree" class="col-form-label text-md-right">{{ __('static.degree') }}</label>
                <select style="height: 52px;font-size: 14px;"
                        class="form-control cp1 @error('degree') is-invalid @enderror"
                        name="degree" id="degree" autocomplete="degree">
                  <option selected value="0">No degree</option>
                  <option value="1">PhD</option>
                  <option value="2">Doctor</option>
                  <option value="3">Corresponding member</option>
                  <option value="5">Academician</option>
                </select>
                @error('degree')
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
                        reporter="{{ $membership->reporter }}"
                        @if(isset($_GET["speaker"]) && $_GET["speaker"] == $membership->id) selected @elseif(($fake ? $fakeUser->membership_id : old('membership_id')) == $membership->id ) selected @endif
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
                          name="abstract_topic_id" id="abstract_topic_id" autocomplete="abstract_topic_id">
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
                         name="abstract_name" id="abstract_name" placeholder="Title of the abstract"
                         onfocus="this.placeholder = ''" onblur="this.placeholder ='Name'"
                         value="{{old('abstract_name') }}">
                  @error('abstract_name')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
                <div class="form-group cfdb1">
                  <textarea rows="8" class="form-control cp1 @error('abstract_description') is-invalid @enderror"
                            name="abstract_description" id="abstract_description"
                            placeholder="Abstract body (max 250 words)"
                            onfocus="this.placeholder =''"
                            onblur="this.placeholder ='Comment'">{{old('abstract_description') }}</textarea>
                  @error('abstract_description')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
              </div>

              <div class="form-group cfdb1">
                <label for="reference_id" class="col-form-label text-md-right">{{ __('static.referred_by') }}</label>
                <select style="height: 52px;font-size: 14px;"
                        class="form-control cp1 @error('reference_id') is-invalid @enderror"
                        name="reference_id" id="reference_id" autocomplete="reference_id">
                  @foreach($data['references'] as $reference)
                    <option @if(($fake ? $fakeUser->reference_id : old('reference_id')) == $reference->id) selected
                            @endif value="{{ $reference->id }}">{{ $reference->name }}</option>
                  @endforeach
                </select>
                @error('reference_id')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>

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
