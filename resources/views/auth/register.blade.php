@extends('layouts.app')

@section('content')

  <script src="{{ asset('js/app.js') }}" defer></script>
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
  <section class="contact-us"  id="app">
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
                       name="email" id="email" placeholder="{{ __('static.e_mail_address') }}"
                       value="{{ $fake ? $fakeUser->email : old('email') }}" autocomplete="email"
                       onfocus="this.placeholder = ''" onblur="this.placeholder ='{{ __('static.e_mail_address') }}'">
                @error('email')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="password" class="form-control cp1 @error('password') is-invalid @enderror"
                       name="password" id="password" placeholder="{{ __('static.password') }}"
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
                       value="+{{ $fake ? $fakeUser->phone : old('phone') }}" autocomplete="phone"
                       v-mask="'+\\9\\94 (99) 999-99-99'">
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
                <label for="name" class="col-form-label text-md-right">{{ __('static.referred_by') }}</label>
                <select style="height: 52px;font-size: 14px;" class="form-control cp1 @error('reference_id') is-invalid @enderror"
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
              <div class="form-group cfdb1">
                <label for="membership_id" class="col-form-label text-md-right">{{ __('static.member_as') }}</label>
                <select style="height: 52px;font-size: 14px;" class="form-control cp1 @error('membership_id') is-invalid @enderror"
                        name="membership_id" id="membership_id" autocomplete="membership_id">
                  @foreach($data['membership'] as $membership)
                    <option @if($membership->hasChildren == true ) disabled @endif
                    @if(($fake ? $fakeUser->membership_id : old('membership_id')) == $membership->id )selected
                            @endif value="{{ $membership->id }}">{{ $membership->name }}</option>
                    @if($membership->hasChildren == true )
                      @foreach($membership->children as $child)
                        <option
                            @if(($fake ? $fakeUser->membership_id : old('membership_id')) == $child->id ) selected
                            @endif
                            value="{{ $child->id }}">— {{ $child->name }}
                        </option>
                      @endforeach
                    @endif
                  @endforeach
                </select>
                @error('membership_id')
                <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                @enderror
              </div>
              <button type="submit" id="submit">{{ __('static.registration') }}</button>
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
