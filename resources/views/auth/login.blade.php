@extends('layouts.app')

@section('content')
  <section class="section-login">
    <div class="container">
      <div class="section-title wow fadeIn">
        <h2>Welcome Back!</h2>
        <p>Please, enter your login details</p>
      </div>
      <div class="form wow fadeIn">
        <form method="POST" action="{{ route('login') }}" autocomplete="off">
          @csrf
          <div class="form-group">
            <input type="email" placeholder="E-mail Address" value="{{ $email ?? old('email') }}" name="email"
                   @error('email') class="error" @enderror/>
            @error('email')
            <span class="helper">{{ $message }}</span>
            @enderror
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" value="" name="password"
                   @error('password') class="error" @enderror
                   autocomplete="current-password"/>
            @error('password')
            <span class="helper">{{ $message }}</span>
            @enderror
          </div>
          <button type="submit" class="btn btn-blue pull-center">Login</button>
          <div class="text-center">
            <a href="{{ route('register') }}">Registration</a><br/>
            @if (Route::has('password.request'))
              <a href="{{ route('password.request') }}">Forgot your password?</a>
            @endif
          </div>
        </form>
      </div>
    </div>
  </section>
@endsection
