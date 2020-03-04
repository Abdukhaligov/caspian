@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ __('Register') }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('register') }}">
                            @csrf

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                                <div class="col-md-6">
                                    <input id="name" type="text"
                                           class="form-control @error('name') is-invalid @enderror" name="name"
                                           value="{{ old('name') }}" autocomplete="name" autofocus>

                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email"
                                       class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                                <div class="col-md-6">
                                    <input id="email" type="email"
                                           class="form-control @error('email') is-invalid @enderror" name="email"
                                           value="{{ old('email') }}" autocomplete="email">

                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                                <div class="col-md-6">
                                    <input id="password" type="password"
                                           class="form-control @error('password') is-invalid @enderror" name="password"
                                           autocomplete="new-password">

                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control"
                                           name="password_confirmation" autocomplete="new-password">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">
                                    {{ __('Phone Number') }}
                                </label>

                                <div class="col-md-6">
                                    <input v-mask="'+\\9\\94 (99) 999-99-99'" id="phone_number" type="text"
                                           class="form-control @error('phone_number') is-invalid @enderror"
                                           name="phone_number"
                                           value="{{ old('phone_number') }}" autocomplete="phone_number">

                                    @error('phone_number')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">
                                    {{ __('Company') }}
                                </label>

                                <div class="col-md-6">
                                    <input id="company" type="text"
                                           class="form-control @error('company') is-invalid @enderror" name="company"
                                           value="{{ old('company') }}" autocomplete="company">

                                    @error('company')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">
                                    {{ __('Job Title') }}
                                </label>

                                <div class="col-md-6">
                                    <input id="job_title" type="text"
                                           class="form-control @error('job_title') is-invalid @enderror"
                                           name="job_title"
                                           value="{{ old('job_title') }}" autocomplete="job_title">

                                    @error('job_title')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">
                                    {{ __('Referred by') }}
                                </label>

                                <div class="col-md-6">
                                    <select id="referred_by" type="text"
                                            class="form-control @error('referred_by') is-invalid @enderror"
                                            name="referred_by"
                                            autocomplete="referred_by">
                                        @foreach($data['references'] as $reference)
                                            <option @if(old('referred_by') == $reference->id ) selected
                                                    @endif value="{{ $reference->id }}">{{ $reference->name }}</option>
                                        @endforeach
                                    </select>

                                    @error('referred_by')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">
                                    {{ __('Member as') }}
                                </label>

                                <div class="col-md-6">
                                    <select id="member_as" type="text"
                                            class="form-control @error('member_as') is-invalid @enderror"
                                            name="member_as"
                                            autocomplete="member_as">
                                        @foreach($data['membership'] as $membership)
                                            <option
                                                @if($membership->hasChildren == true ) disabled @endif
                                            @if(old('member_as') == $membership->id ) selected @endif
                                                value="{{ $membership->id }}">{{ $membership->name }}
                                            </option>

                                            @if($membership->hasChildren == true )
                                                @foreach($membership->children as $child)
                                                    <option
                                                        @if(old('member_as') == $child->id ) selected @endif
                                                    value="{{ $child->id }}">—  {{ $child->name }}
                                                    </option>
                                                @endforeach
                                            @endif

                                        @endforeach
                                    </select>

                                    @error('member_as')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">
                                    {{ __('Topics') }}
                                </label>

                                <div class="col-md-6">
                                    <select id="topic_id" type="text"
                                            class="form-control @error('topic_id') is-invalid @enderror"
                                            name="topic_id"
                                            autocomplete="topic_id">
                                        <option selected value="">Select topic</option>
                                        @foreach($data['topics'] as $topic)
                                            <option

                                            @if(old('topic_id') == $topic->id ) selected @endif
                                                value="{{ $topic->id }}">{{ $topic->name }}
                                            </option>

                                            @if($topic->hasChildren == true )
                                                @foreach($topic->children as $child)
                                                    <option
                                                        @if(old('topic_id') == $child->id ) selected @endif
                                                    value="{{ $child->id }}">—  {{ $child->name }}
                                                    </option>
                                                @endforeach
                                            @endif

                                        @endforeach
                                    </select>

                                    @error('topic_id')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Register') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
