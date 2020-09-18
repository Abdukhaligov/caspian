@extends('layouts.app')

@section('content')
  <?php $fake = false ? $fakeUser = factory(\App\User::class)->make() : ''?>

  <section class="hero" style="background-image: url('{{asset('assets/img/auditory.jpg')}}')">
    <div class="container">
      <h1 class="wow fadeInUp" data-wow-delay=".3s">
        <span data-text="Registration">Registration</span>
      </h1>
      <nav aria-label="breadcrumb">
        <ul class="breadcrumb text-size-35 wow fadeInUp" data-wow-delay=".5s">
          <li><a href="{{ route('home') }}">Home</a><span aria-hidden="true">|</span></li>
          <li class="active" aria-current="page">Registration</li>
        </ul>
      </nav>
    </div>
  </section>

  <section class="section-registration">
    <div class="container">
      <div class="section-title split wow fadeIn">
        <div class="section-title-left">
          <h2 class="text-size-35">Registration</h2>
          <p>I have worls-class, flexible support via live chat, email and hone. I guarantee that you’ll be able to have
            any issue resolved within 24 hours.</p>
        </div>
        <div class="section-title-right">
          <div>
            <h3 class="text-size-25">Phone:</h3>
            <p><a href="tel:{{$data["initial"]->phone}}">{{$data["initial"]->phone}}</a>
            </p>
          </div>
          <div>
            <h3 class="text-size-25">Send E-mail:</h3>
            <p><a href="mailto:{{$data["initial"]->email}}">{{$data["initial"]->email}}</a></p>
          </div>
          <div>
            <h3 class="text-size-25">Visa policy:</h3>
            <p><a href="https://www.azerbaijantourism.az/visa" target="_blank">Republic of Azerbaijan Ministry of
                Foreign Affairs. Visa to Azerbaijan</a></p>
          </div>
          <div>
            <h3 class="text-size-25">Address:</h3>
            <p>Raiffeisen St, 12/A, Baku, Azerbaijan</p>
          </div>
        </div>
      </div>
      <div class="form two-cols wow fadeIn">
        <form method="POST" action="{{ route('register') }}" enctype="multipart/form-data" autocomplete="off">
          <div class="flex-row">
            <div class="form-col">
              <h4 class="form-title">Avatar</h4>
              <div class="form-group file">
                <img src="{{asset('assets/img/svg/icons/user.svg')}}" alt=""/>
                <label for="avatar" class="file-input"
                       data-image-placeholder="{{asset('assets/img/svg/icons/user.svg')}}">
                  <input type="file" id="avatar" name="avatar" data-file-upload="image"/>
                  <span class="btn btn-blue">Choose file</span>
                  <span class="file-name"></span>
                  <span class="no-file">No file chosen</span>
                  <span class="delete">
                        <span>Delete</span>
                        <i class="icon-delete" aria-hidden="true"></i>
                      </span>
                </label>
              </div>
              <div class="form-group">
                @csrf
                <input type="text" placeholder="Full Name"
                       value="{{ $fake ? $fakeUser->name : old('name') }}" name="name"
                       class="@error('name') error @enderror"/>
                @error('name')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
              <div class="form-group">
                <input type="email" placeholder="E-mail Address"
                       value="{{ $fake ? $fakeUser->email : old('email') }}" name="email"
                       class="@error('email') error @enderror"/>
                @error('email')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
              <div class="form-group">
                <input type="password" placeholder="Password"
                       value="{{ $fake ? "123123" : '' }}" name="password"
                       class="@error('password') error @enderror"/>
                @error('password')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
              <div class="form-group">
                <input type="password" placeholder="Confirm Password"
                       value="{{ $fake ? "123123" : '' }}" name="password_confirmation"
                       class="@error('password_confirmation') error @enderror"/>
                @error('password_confirmation')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
            </div>
            <div class="form-col">
              <h4 class="form-title">Phone</h4>
              <div class="form-group-double">
                <div class="form-group select">
                  <select name="region_id" class="@error('region_id') error @enderror">
                    @foreach(\App\Region::scopeOrdered() as $region)
                      <option value="{{ $region->id }}"
                              @if($region->id == old('region_id')) selected @endif >{!! $region->name_en !!}</option>
                    @endforeach
                  </select>
                  @error('region_id')
                  <span class="helper">{{ $message }}</span>
                  @enderror
                </div>
                <div class="form-group">
                  <input type="text" placeholder="Phone Number" value="{{ $fake ? $fakeUser->phone : old('phone') }}"
                         name="phone" class="@error('phone') error @enderror"/>
                  @error('phone')
                  <span class="helper">{{ $message }}</span>
                  @enderror
                </div>
              </div>
              <h4 class="form-title">Company</h4>
              <div class="form-group">
                <input type="text" placeholder="Working Place" value="{{ $fake ? $fakeUser->company : old('company') }}"
                       name="company" class="@error('company') error @enderror"/>
                @error('company')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
              <div class="form-group">
                <input type="text" placeholder="Position" value="{{ $fake ? $fakeUser->job_title : old('job_title') }}"
                       name="job_title" class="@error('job_title') error @enderror"/>
                @error('job_title')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
              <h4 class="form-title">Degree</h4>
              <div class="form-group select">
                <select name="degree_id" class="@error('degree_id') error @enderror">
                  @foreach(\App\Models\Degree::all() as $degree)
                    <option value="{{ $degree->id }}">{{ $degree->name }}</option>
                  @endforeach
                </select>
                @error('degree_id')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
              <h4 class="form-title">How did you know about the event?</h4>
              <div class="form-group select">
                <select name="reference_id" class="@error('reference_id') error @enderror">
                  @foreach($data['references'] as $reference)
                    <option @if(($fake ? $fakeUser->reference_id : old('reference_id')) == $reference->id) selected
                            @endif value="{{ $reference->id }}">{{ $reference->name }}</option>
                  @endforeach
                </select>
                @error('reference_id')
                <span class="helper">{{ $message }}</span>
                @enderror
              </div>
              @if(!$data["event"])
                <button type="submit" class="btn btn-outline-blue pull-right">Submit</button>
              @endif
            </div>
          </div>
          @if($data["event"])
            <div class="flex-row">
              <div class="form-col has-hidden-inputs">
                <h4 class="form-title">Do you want to join event?</h4>
                <div class="form-group select">
                  <select name="membership_id" @error('membership_id') class="error" @enderror>
                    @foreach($data['membership'] as $membership)
                      @if(!$membership->reporter)
                        <option
                            @if(($fake ? $fakeUser->membership_id : old('membership_id')) == $membership->id ) selected
                            @endif value="{{ $membership->id }}">{{ $membership->name }}</option>
                      @endif
                    @endforeach
                    <optgroup label="Reporter">
                      @foreach($data['membership'] as $membership)
                        @if($membership->reporter)
                          <option
                              @if(($fake ? $fakeUser->membership_id : old('membership_id')) == $membership->id ) selected
                              @endif value="{{ $membership->id }}"
                              data-if-selected="is-speaker">{{ $membership->name }}</option>
                        @endif
                      @endforeach
                    </optgroup>
                  </select>
                  @error('membership_id')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                  @enderror
                </div>
                <h4 class="form-title" data-show-if="is-speaker" style="display: none;">Category</h4>
                <div class="form-group select" data-show-if="is-speaker" style="display: none;">
                  <select name="category">
                    @foreach($data['categories'] as $category)
                      <option value="{{ $category->id }}">{{ $category->name }}</option>
                    @endforeach
                  </select>
                </div>
                <h4 class="form-title" data-show-if="is-speaker" style="display: none;">Topic</h4>
                <div class="form-group select" data-show-if="is-speaker" style="display: none;">
                  <select name="abstract_topic_id">
                    @foreach($data['topics'] as $topic)
                      <option value="{{ $topic->id }}">{{ $topic->name }}</option>
                      @foreach($topic->children as $child)
                        <option value="{{ $child->id }}">- {{ $child->name }}</option>
                      @endforeach
                    @endforeach
                  </select>
                </div>
              </div>
              <div class="form-col has-hidden-inputs">
                <div class="form-group" data-show-if="is-speaker" style="display: none;">
                  <input type="text" placeholder="Abstract Title" name="abstract_name"
                         @error('abstract_name') class="error" @enderror value="{{old('abstract_name') }}"/>
                  @error('abstract_name')
                  <span class="helper">{{ $message }}</span>
                  @enderror
                </div>
                <div class="form-group" data-show-if="is-speaker" style="display: none;">
                  <textarea placeholder="Abstract description (max 500 characters)" name="abstract_description"
                            @error('abstract_name') class="error" @enderror
                            maxlength="500">{{old('abstract_description') }}</textarea>
                  @error('abstract_description')
                  <span class="helper">{{ $message }}</span>
                  @enderror
                </div>
                <button type="submit" class="btn btn-outline-blue pull-right">Submit</button>
              </div>
            </div>
          @endif
        </form>
      </div>
    </div>
  </section>
@endsection