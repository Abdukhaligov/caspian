@extends('layouts.app')

@section('content')
  <section class="section-cabinet">
    <div class="container">
      <div class="flex-row">
        <div class="cabinet-sidebar">
          <h2 class="text-size-25">My profile</h2>
          <nav class="font-poppins">
            <button data-tab-target="user-profile" class="btn btn-outline-blue">User Profile</button>
            <button data-tab-target="change-password" class="btn btn-outline-blue">Change Password</button>
            <button data-tab-target="invitations" class="btn btn-outline-blue">My Invitations</button>
            <button data-tab-target="abstracts" class="btn btn-outline-blue">Abstracts</button>
          </nav>
        </div>
        <div class="cabinet-content">
          <div data-tab="user-profile">
            <div class="form wow fadeIn">
              <form method="POST" action="{{ route('user_update') }}" enctype="multipart/form-data" autocomplete="off">
                @csrf
                <h4 class="form-title">Avatar</h4>
                <div class="form-group file">
                  @if($data["user"]->avatar)
                    {{ $data["user"]->avatar }}
                  @endif
                  <label for="avatar" class="file-input @if($data["user"]->avatar) chosen @endif"
                         data-image-placeholder="/assets/img/svg/icons/user.svg">
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
                  <input type="text" placeholder="Full Name" value="{{$data["user"]->name}}" name="name" disabled/>
                </div>
                <div class="form-group">
                  <input type="email" placeholder="E-mail Address" value="{{$data["user"]->email}}" name="email"
                         disabled/>
                </div>
                <h4 class="form-title">Phone</h4>
                <div class="form-group-double">
                  <div class="form-group select">
                    <select name="country" disabled>
                      @foreach(\App\Region::scopeOrdered() as $region)
                        <option value="{{ $region->id }}" @if($region->id == $data["user"]->region_id) selected @endif>
                          {!! $region->name_en !!}
                        </option>
                      @endforeach
                    </select>
                  </div>
                  <div class="form-group">
                    <input type="text" placeholder="Phone Number" value="+{{$data["user"]->phone}}" name="phone"
                           disabled/>
                  </div>
                </div>
                <h4 class="form-title">Company</h4>
                <div class="form-group">
                  <input type="text" placeholder="Working Place" value="{{$data["user"]->company}}" name="company"/>
                </div>
                <div class="form-group">
                  <input type="text" placeholder="Position" value="{{$data["user"]->job_title}}" name="job_title"/>
                </div>
                <h4 class="form-title">Degree</h4>
                <div class="form-group select">
                  <select name="degree_id">
                    @foreach(\App\Models\Degree::all() as $degree)
                      <option value="{{ $degree->id }}" @if($data["user"]->degree_id == $degree->id) selected @endif>
                        {{ $degree->name }}
                      </option>
                    @endforeach
                  </select>
                </div>
                <button type="submit" class="btn btn-outline-blue pull-right">Update Details</button>
              </form>
            </div>
          </div>
          <div data-tab="change-password">
            <div class="form wow fadeIn">
              <form method="POST" action="{{ route('user_update_password') }}" autocomplete="off">
                @csrf
                <h4 class="form-title">Current Password</h4>
                <div class="form-group">
                  <input type="password" placeholder="Current Password" value="" name="current_password"
                         class="@error('current_password') error @enderror"
                         autocomplete="current-password"/>
                  @error('current_password')
                  <span class="helper">{{ $message }}</span>
                  @enderror
                </div>
                <h4 class="form-title">New Password</h4>
                <div class="form-group">
                  <input type="password" placeholder="New Password" value="" name="password"
                         class="@error('password') error @enderror"
                         autocomplete="new-password"/>
                  @error('password')
                  <span class="helper">{{ $message }}</span>
                  @enderror
                </div>
                <div class="form-group">
                  <input type="password" placeholder="Confirm Password" value="" name="password_confirmation"
                         class="@error('password_confirmation') error @enderror"
                         autocomplete="new-password"/>
                  @error('password_confirmation')
                  <span class="helper">{{ $message }}</span>
                  @enderror
                </div>
                <button type="submit" class="btn btn-outline-blue pull-right">Update Password</button>
              </form>
            </div>
          </div>
          <div data-tab="invitations">
            <div class="invitations wow fadeIn">
              @foreach($data["broadcastVouchers"] as $voucher)
                <div class="download-pdf">
                  <h4>{{$voucher->name}}</h4>
                  <a href="{{ route('vouchers',$voucher->id) }}">Download
                    <i class="icon-download" aria-hidden="true"></i>
                  </a>
                </div>
              @endforeach

              @foreach($data["vouchers"] as $voucher)
                <div class="download-pdf">
                  <h4>{{$voucher->name}}</h4>
                  <a href="{{ route('vouchers',$voucher->id) }}">Download
                    <i class="icon-download" aria-hidden="true"></i>
                  </a>
                </div>
              @endforeach
            </div>
          </div>
          <div data-tab="abstracts">
            @if( $data["user"]->canAddReport )
              <button class="btn btn-outline-blue" data-fancybox data-src="#new-abstract" data-hash="false"
                      data-touch="false">New Abstract
              </button>
            @endif
            @if(count($data["reports"]) > 0)
              <h3 class="text-size-25">Abstracts:</h3>
              <div class="abstracts-list">
                @foreach($data["reports"] as $report)
                  <div class="abstract wow fadeIn">
                    <p>Topic:</p>
                    <div class="abstract-body">
                      <div class="abstract-topic">
                        @if($report->topic->parent)
                          <h4>{{ $report->topic->name}}</h4>
                          <p>- {{ $report->topic->name}}</p>
                        @else
                          <h4>{{ $report->topic->name}}</h4>
                        @endif
                      </div>
                      <div class="abstract-status">
                        <h4>{{ $report->name }}</h4>
                        <div class="status">
                          @if($report->status == 1)
                            <span class="badge in-progress">In progress</span>
                            <span class="badge in-progress" style="cursor: pointer"
                                  onclick="if(confirm('Are you sure ?')){document.getElementById('remove-abstract').submit();}">
                              <i class="icon-close" aria-hidden="true"></i>
                            </span>
                            <form id="remove-abstract" method="POST" action="{{ route('report_remove') }}">
                              @csrf
                              <input style="display: none" type="text" name="id" value="{{ $report->id }}">
                            </form>
                          @elseif($report->status == 2)
                            <span class="badge rejected">Rejected</span>
                          @else
                            <span class="badge approved">Approved</span>
                          @endif
                        </div>
                      </div>
                      <div class="abstract-data">
                        <p>{{ $report->description }}</p>
                        @if($report->status == 3)
                          @if($report->file)
                            <div style="display: flex;justify-content: center;margin: 20px 0 8px;">
                              <a target="_blank" href="{{Storage::disk('reports')->url($report->file)}}">Download</a>
                            </div>
                          @else
                            <form method="POST" action="{{ route('report_update') }}" enctype="multipart/form-data"
                                  autocomplete="off">
                              @csrf
                              <input name="report_id" style="display: none" type="text"
                                     value="{{ $report->id }}">
                              <div class="form-group file">
                                <label for="document" class="file-input">
                                  <input name="file" type="file" id="document" data-file-upload="document"/>
                                  <span class="btn btn-blue">Choose file</span>
                                  <span class="file-name"></span>
                                  <span class="no-file">No file chosen</span>
                                  <span class="delete">
                                <span>Delete</span>
                                <i class="icon-delete" aria-hidden="true"></i>
                              </span>
                                </label>
                              </div>
                              <button type="submit" class="btn btn-blue">Send</button>
                            </form>
                          @endif
                        @endif
                      </div>
                    </div>
                  </div>
                @endforeach
              </div>
            @endif

            @if( $data["user"]->canAddReport )
              <div id="new-abstract" style="display:none;">
                <h2 class="text-size-25">Abstract</h2>
                <div class="form wow fadeIn">
                  <form method="POST" action="{{ route('report_create') }}" autocomplete="off">
                    @csrf
                    <h4 class="form-title">Category</h4>
                    <div class="form-group select">
                      <select name="abstract_category_id"  data-set-options="topic" @error('abstract_category_id') class="error" @enderror>
                        @foreach($data['categories'] as $category)
                          <option  @if(old('abstract_category_id') == $category->id ) selected @endif value="{{ $category->id }}">{{ $category->name }}</option>
                        @endforeach
                      </select>
                      @error('abstract_category_id')
                      <span class="helper">{{ $message }}</span>
                      @enderror
                    </div>
                    <h4 class="form-title">Topic</h4>
                    <div class="form-group select">
                      <select name="topic_id" data-get-options="topic" @error('topic_id') class="error" @enderror>
                        @foreach($data['topics'] as $topic)
                          <option @if(old('topic_id') == $topic->id ) selected @endif
                                  data-topic="{{$topic->category_id}}" value="{{ $topic->id }}">{{ $topic->name }}</option>
                          @foreach($topic->children as $child)
                            <option @if(old('topic_id') == $child->id ) selected @endif
                                    data-topic="{{$topic->category_id}}" value="{{ $child->id }}"> - {{ $child->name }}</option>
                          @endforeach
                        @endforeach
                      </select>
                      @error('topic_id')
                      <span class="helper">{{ $message }}</span>
                      @enderror
                    </div>
                    <div class="form-group">
                      <input type="text" placeholder="Abstract Title" name="name" value="{{ old('name') }}"
                             @error('name') class="error" @enderror/>
                      @error('name')
                      <span class="helper">{{ $message }}</span>
                      @enderror
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Abstract description (max 300 words)" name="description"
                                  @error('description') class="error" @enderror
                                  maxlength="300">{{ old('description') }}</textarea>
                      @error('description')
                      <span class="helper">{{ $message }}</span>
                      @enderror
                    </div>
                    <button type="submit" class="btn btn-blue pull-right">Create</button>
                  </form>
                </div>
              </div>
            @endif
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection
