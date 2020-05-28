@extends('layouts.app')

@section('content')
    <section class="contact-us"  id="app">
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
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                            <form method="POST" action="{{ route('password.email') }}">
                                @csrf

                            <div class="form-group cfdb1">
                                <input type="text" class="form-control cp1 @error('email') is-invalid @enderror"
                                       name="email" id="email" placeholder="{{ __('static.e_mail_address') }}"
                                       autocomplete="email"
                                       onfocus="this.placeholder = ''" onblur="this.placeholder ='{{ __('static.e_mail_address') }}'">
                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <button style="float:left; margin-right: 15px" type="submit" id="submit">{{ __('Send Password Reset Link') }}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
