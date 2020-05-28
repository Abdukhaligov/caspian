@extends('layouts.app')

@section('content')

  <section class="contact-us" id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="contact-details">
            <h2>Some kind of title</h2>
            <p>I have worls-class, flexible support via live chat, email and hone. I guarantee that you’ll be able to
              have any issue resolved within 24 hours.</p>
          </div>
        </div>
        <div class="col-md-7">
          <div class="contact-information">
            <form method="POST" action="{{ route('password.update') }}">
              @csrf
              <input type="hidden" name="token" value="{{ $token }}">
                <div class="form-group cfdb1">
                    <input type="text" class="form-control cp1 @error('email') is-invalid @enderror"
                           name="email" id="email" placeholder="{{ __('static.e_mail_address') }}"
                           autocomplete="email"
                           value="{{ $email ?? old('email') }}"
                           onfocus="this.placeholder = ''" onblur="this.placeholder ='{{ __('static.e_mail_address') }}'">
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                </div>
              <div class="form-group cfdb1">
                <input type="password" class="form-control cp1 @error('password') is-invalid @enderror"
                       name="password" id="password" placeholder="{{ __('static.password') }}"
                       autocomplete="password"
                       onfocus="this.placeholder = ''" onblur="this.placeholder ='{{ __('static.password') }}'">
                  @error('password')
                  <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                  @enderror
              </div>
              <div class="form-group cfdb1">
                <input type="password" class="form-control cp1 @error('password') is-invalid @enderror"
                       name="password_confirmation" id="password_confirmation" placeholder="{{ __('static.confirm_password') }}"
                       autocomplete="password_confirmation"
                       onfocus="this.placeholder = ''" onblur="this.placeholder ='{{ __('static.confirm_password') }}'">
              </div>
              <button style="float:left; margin-right: 15px" type="submit" id="submit">{{ __('Reset Password') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

@endsection
