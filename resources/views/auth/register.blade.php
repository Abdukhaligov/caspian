@extends('layouts.init')

@section('content')

  <page-banner-component :title="{{ json_encode(__('static.registration')) }}"></page-banner-component>

  <?php $fake = TRUE ? $fakeUser = factory(\App\User::class)->make() : ''?>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">{{ __('static.registration') }}</div>
          <div class="card-body">
            <form method="POST" action="{{ route('register') }}">
              @csrf
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('static.full_name') }}</label>
                <div class="col-md-6">
                  <input id="name" type="text"
                         class="form-control @error('name') is-invalid @enderror" name="name"
                         value="{{ $fake ? $fakeUser->name : old('name') }}" autocomplete="name" autofocus>
                  @error('name')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('static.e_mail_address') }}</label>
                <div class="col-md-6">
                  <input id="email" type="email"
                         class="form-control @error('email') is-invalid @enderror" name="email"
                         value="{{ $fake ? $fakeUser->email : old('email') }}" autocomplete="email">
                  @error('email')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('static.password') }}</label>
                <div class="col-md-6">
                  <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                         value="{{ $fake ? "123123" : '' }}" name="password" autocomplete="new-password">
                  @error('password')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
              </div>
              <div class="form-group row">
                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">
                  {{ __('static.confirm_Password') }}
                </label>
                <div class="col-md-6">
                  <input id="password-confirm" type="password" class="form-control" value="{{ $fake ? "123123" : '' }}"
                         name="password_confirmation" autocomplete="new-password">
                </div>
              </div>
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('static.phone_number') }}</label>
                <div class="col-md-6">
                  <input v-mask="'+\\9\\94 (99) 999-99-99'" id="phone" type="text"
                         class="form-control @error('phone') is-invalid @enderror" name="phone"
                         value="+{{ $fake ? $fakeUser->phone : old('phone') }}" autocomplete="phone">
                  @error('phone')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
              </div>
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('static.company') }}</label>
                <div class="col-md-6">
                  <input id="company" type="text"
                         class="form-control @error('company') is-invalid @enderror" name="company"
                         value="{{ $fake ? $fakeUser->company : old('company') }}" autocomplete="company">
                  @error('company')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
              </div>
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('static.job_title') }}</label>
                <div class="col-md-6">
                  <input id="job_title" type="text" class="form-control @error('job_title') is-invalid @enderror"
                         name="job_title" value="{{ $fake ? $fakeUser->job_title : old('job_title') }}"
                         autocomplete="job_title">
                  @error('job_title')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
              </div>
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('static.referred_by') }}</label>
                <div class="col-md-6">
                  <select id="reference_id" type="text" class="@error('reference_id') is-invalid @enderror"
                          name="reference_id" autocomplete="reference_id">
                    @foreach($data['references'] as $reference)
                      <option @if(($fake ? $fakeUser->reference_id : old('reference_id')) == $reference->id) selected
                              @endif value="{{ $reference->id }}">{{ $reference->name }}</option>
                    @endforeach
                  </select>
                  @error('reference_id')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
              </div>
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('static.member_as') }}</label>
                <div class="col-md-6">
                  <select id="membership_id" type="text"
                          class="@error('membership_id') is-invalid @enderror" name="membership_id"
                          autocomplete="membership_id">
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
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">{{ __('static.registration') }}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
