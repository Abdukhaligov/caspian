@extends('layouts.init')

@section('content')
    <div class="page-title-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-title-item text-center">
                        <h2 class="title">{{ __('static.contacts') }}</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="{{ route('home') }}">{{ __('static.home') }}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{ __('static.contacts') }}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-details-area pt-90 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="contact-info mr-30 mt-30">
                        <div class="contact-item-1">
                            <div class="contact-info-item text-center">
                                <i class="fal fa-phone"></i>
                                <h5 class="title">Phone Number</h5>
                                <p><a href="tel: {{ $data->phone }}">{{ $data->phone }}</a></p>
                            </div>
                            <div class="contact-info-item text-center">
                                <i class="fal fa-envelope"></i>
                                <h5 class="title">Email Address</h5>
                                <p><a href="mailto: {{ $data->email }}">{{ $data->email }}</a></p>
                            </div>
                        </div>
                        <div class="contact-item-1">
                            <div class="contact-info-item text-center">
                                <i class="fal fa-map"></i>
                                <h5 class="title">Office Location</h5>
                                <p>{{ $data->address }}</p>
                            </div>
                            <div class="contact-info-item text-center">
                                <i class="fal fa-globe"></i>
                                <h5 class="title">Social Network</h5>
                                @foreach($data->social_networks as $sn)
                                    <p><a href="{{ $sn->attributes->link }}">{{ $sn->attributes->title }}</a></p>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="map-area mt-30">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1569913375800!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="get-in-touch-area get-in-touch-area-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-title text-left">
                        <span>Get In Touch</span>
                        <h2 class="title">Estimate For Your Projects.</h2>
                    </div>
                    <div class="form-area">
                        <form id="contact-form" action="https://gizmoder.com/demo/html/omnivus/omnivus/assets/contact.php" method="post">
                            <div class="input-box mt-45">
                                <input type="text" name="name" placeholder="Enter your name">
                                <i class="fal fa-user"></i>
                            </div>
                            <div class="input-box mt-20">
                                <input type="email" name="email" placeholder="Enter your email">
                                <i class="fal fa-envelope"></i>
                            </div>
                            <div class="input-box mt-20">
                                <textarea name="message" id="#" cols="30" rows="10" placeholder="Enter your message"></textarea>
                                <i class="fal fa-edit"></i>
                                <button class="main-btn" type="submit">Submit Now</button>
                            </div>
                        </form>
                        <p class="form-message"></p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="get-map d-none d-lg-block mt-40">
                        <img src="{{ Storage::disk('public')->url($data->video_cover) }}" alt="video play">
                        <a class="video-popup" href="www.youtube.com/watch05ac.html?v={{ $data->video_url }}"><i class="fas fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>



@endsection
