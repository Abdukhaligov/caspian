@extends('layouts.init')

@section('content')
    <div class="page-title-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-title-item text-center">
                        <h2 class="title">Contact Us</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home </a></li>
                                <li class="breadcrumb-item active" aria-current="page">Contact</li>
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
                                <p>+7 (800) 123 45 69</p>
                            </div>
                            <div class="contact-info-item text-center">
                                <i class="fal fa-envelope"></i>
                                <h5 class="title">Email Address</h5>
                                <p><a href="https://gizmoder.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dcb5b2bab39cabb9beb1bdb5b0f2bfb3b1">[email&#160;protected]</a></p>
                            </div>
                        </div>
                        <div class="contact-item-1">
                            <div class="contact-info-item text-center">
                                <i class="fal fa-map"></i>
                                <h5 class="title">Office Location</h5>
                                <p>12/A, London, UK</p>
                            </div>
                            <div class="contact-info-item text-center">
                                <i class="fal fa-globe"></i>
                                <h5 class="title">Social Network</h5>
                                <p>fb.com/example</p>
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
                        <img src="{{ asset('omnivus/images/contact-thumb.jpg') }}" alt="video play">
                        <a class="video-popup" href="www.youtube.com/watch05ac.html?v=TdSA7gkVYU0"><i class="fas fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <footer class="footer-area footer-area-2 bg_cover" style="background-image: url({{ asset('omnivus/images/footer-bg.jpg') }});">
        <div class="footer-overlay">
            <div class="container position-relative">
                <div class="row">
                    <div class="col-lg-4 col-md-7">
                        <div class="widget-item-1 mt-30">
                            <img src="{{ asset('omnivus/images/logo-1.1.png') }}" alt="">
                            <p>The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bring to our community onferences, books, and our membership added to the online magazine.</p>
                            <p>One thing that hasn’t changed is that we’re a small team — with most of us not working</p>
                        </div>
                    </div>
                    <div class="col-lg-3 offset-lg-1 col-md-5">
                        <div class="widget-item-2 mt-30">
                            <h4 class="title">Pages</h4>
                            <div class="footer-list">
                                <ul>
                                    <li><a href="#"><i class="fal fa-angle-right"></i> Home</a></li>
                                    <li><a href="#"><i class="fal fa-angle-right"></i> Services</a></li>
                                    <li><a href="#"><i class="fal fa-angle-right"></i> About</a></li>
                                    <li><a href="#"><i class="fal fa-angle-right"></i> Career</a></li>
                                    <li><a href="#"><i class="fal fa-angle-right"></i> Refund</a></li>
                                    <li><a href="#"><i class="fal fa-angle-right"></i> Terms</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#"><i class="fal fa-angle-right"></i> Details</a></li>
                                    <li><a href="#"><i class="fal fa-angle-right"></i> Contact</a></li>
                                    <li><a href="#"><i class="fal fa-angle-right"></i> Business</a></li>
                                    <li><a href="#"><i class="fal fa-angle-right"></i> Affiliate</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="widget-item-2 widget-item-3 mt-30">
                            <h4 class="title">Working Hours</h4>
                            <ul>
                                <li>Monday - Friday: 7:00 - 17:00</li>
                                <li>Saturday: 7:00 - 12:00</li>
                                <li>Sunday and holidays: 8:00 - 10:00</li>
                            </ul>
                            <p><span>For more then 30 years,</span> IT Service has been a reliable partner in the field of logistics and cargo forwarding.</p>
                            <a href="#"><i class="fal fa-angle-right"></i>Discover More</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-copyright">
                            <p>Copyright <a href="https://gizmoder.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4d0f340d">[email&#160;protected]</a> <span>tanvir82</span> - 2019</p>
                        </div>
                    </div>
                </div>
                <div class="shape-1"></div>
                <div class="shape-2"></div>
                <div class="shape-3"></div>
            </div>
        </div>
    </footer>


    <div class="back-to-top back-to-top-2">
        <a href="#">
            <i class="fas fa-arrow-up"></i>
        </a>
    </div>
@endsection
