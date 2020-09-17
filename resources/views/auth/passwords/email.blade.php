@extends('layouts.app')

@section('content')
  <section class="section-pwd-reset">
    <div class="container">
      @if (session('status'))
        <div class="section-title wow fadeIn">
          <h2>{{ session('status') }}</h2>
        </div>
      @else
        <div class="section-title wow fadeIn">
          <h2>Forgot your password?</h2>
          <p>Enter your email address and we'll send you a link to reset your password.</p>
        </div>
        <div class="form wow fadeIn">
          <form method="POST" action="{{ route('password.email') }}" autocomplete="off">
            @csrf
            <div class="form-group">
              <input type="email" placeholder="Your E-mail here *" value="" name="email"
                     class="@error('email') error @enderror"/>
              @error('email')
              <span class="helper">{{ $message }}</span>
              @enderror
            </div>
            <button type="submit" class="btn btn-blue pull-center">Submit</button>
          </form>
        </div>
      @endif
    </div>
  </section>
@endsection
