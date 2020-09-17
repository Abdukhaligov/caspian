@extends('layouts.app')

@section('content')
  <section class="section-pwd-reset">
    <div class="container">
      <div class="form wow fadeIn">
        <h2>Reset your password</h2>
        <br>
        <form method="POST" action="{{ route('password.update') }}" autocomplete="off">
          @csrf
          <input type="hidden" name="token" value="{{ $token }}">
          <div class="form-group">
            <input type="text" value="{{ $email ?? old('email') }}" name="email"
                   class="@error('email') error @enderror"/>
            @error('email')
            <span class="helper">{{ $message }}</span>
            @enderror
          </div>
          <div class="form-group">
            <input type="password" value="" placeholder="New password" name="password"
                   class="@error('password') error @enderror"/>
            @error('password')
            <span class="helper">{{ $message }}</span>
            @enderror
          </div>
          <div class="form-group">
            <input type="password" value="" placeholder="Confirm password" name="password_confirmation"
                   class="@error('password_confirmation') error @enderror"/>
            @error('password_confirmation')
            <span class="helper">{{ $message }}</span>
            @enderror
          </div>
          <button type="submit" class="btn btn-blue pull-center">Reset</button>
        </form>
      </div>
    </div>
  </section>
@endsection
