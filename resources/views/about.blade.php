@extends('layouts.init')

@section('content')
{{--{{ __('static.dashboard') }} {{ $data->name  }}--}}

<div class="page-title-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="page-title-item text-center">
                    <h2 class="title">About Us</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home </a></li>
                            <li class="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="about-experience-area pb-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div class="experience-item">
                    <span>25 Years Of Experience</span>
                    <h2 class="title">Not only explore for job done.</h2>
                </div>
            </div>
            <div class="col-lg-6 offset-lg-1">
                <div class="experience-item">
                    <p>Does any industry face a more complex audience journey and marketing sales process than B2B technology?
                        Consider the number of people who influence a sale, the length of the decision-making cycle, the competing
                        interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful
                        content here.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".2s">
                <div class="single-experience mt-30">
                    <img src="{{ asset('omnivus/images/experience-1.jpg') }}" alt="">
                    <div class="experience-overlay">
                        <h5 class="title">Design & Development</h5>
                        <p>The functional goal of technical content is to help people use a product.</p>
                        <a href="#">Read More</a>
                        <i class="fal fa-laptop-code"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <div class="single-experience mt-30">
                    <img src="{{ asset('omnivus/images/experience-2.jpg') }}" alt="">
                    <div class="experience-overlay">
                        <h5 class="title">Technical Support</h5>
                        <p>The functional goal of technical content is to help people use a product.</p>
                        <a href="#">Read More</a>
                        <i class="fal fa-headphones-alt"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".6s">
                <div class="single-experience mt-30">
                    <img src="{{ asset('omnivus/images/experience-3.jpg') }}" alt="">
                    <div class="experience-overlay">
                        <h5 class="title">Digital Marketing</h5>
                        <p>The functional goal of technical content is to help people use a product.</p>
                        <a href="#">Read More</a>
                        <i class="fal fa-analytics"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="about-intro-area pt-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="intro-thumb">
                    <img src="{{ asset('omnivus/images/about-intro-thumb.jpg') }}" alt="">
                    <a class="video-popup" href="www.youtube.com/watch05ac.html?v=TdSA7gkVYU0"><i class="fas fa-play"></i></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="intri-content">
                    <span>Intro Video</span>
                    <h2 class="title">How we growth <br> our business.</h2>
                    <p class="text-1">The introduction of cloud and mobile technologies into enterprise software.</p>
                    <p class="text-2">hether you are building an enterprise web portal or a state-of-the-art website, you always
                        need the right modern tools. Well-built and maintained PHP frameworks provide those tools in abundance,
                        allowing maintained PHP frameworks provide those tools in abundance, allowing developers to save time,
                        re-use code, and streamline the back end. As software development tools continuously.</p>
                    <a class="main-btn wow fadeInUp" href="#" data-wow-duration="1s" data-wow-delay=".4s">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="about-history-area">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
                <div class="section-title text-center">
                    <h2 class="title">Our History</h2>
                    <p>Does any industry face a more complex audience journey and marketing sales process than B2B technology.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="history-item  pt-240">
                    <div class="history-thumb wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                        <img src="{{ asset('omnivus/images/history-1.jpg') }}" alt="history">
                    </div>
                    <div class="history-content wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                        <span>1990 - Startup</span>
                        <h4 class="title">Technical content may have per suasive objectives.</h4>
                    </div>
                    <div class="number-box">
                        <span>02</span>
                    </div>
                </div>
                <div class="history-item">
                    <div class="history-thumb wow fadeInUp" data-wow-duration=".1s" data-wow-delay=".2s">
                        <img src="{{ asset('omnivus/images/history-2.jpg') }}" alt="history">
                    </div>
                    <div class="history-content wow fadeInUp" data-wow-duration=".1s" data-wow-delay=".2s">
                        <span>1990 - Startup</span>
                        <h4 class="title">Technical content may have per suasive objectives.</h4>
                    </div>
                    <div class="number-box">
                        <span>04</span>
                    </div>
                    <div class="number-box-2">
                        <i class="fal fa-plus"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="history-item history-item-2">
                    <div class="history-thumb wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                        <img src="{{ asset('omnivus/images/history-3.jpg') }}" alt="history">
                    </div>
                    <div class="history-content wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                        <span>1990 - Startup</span>
                        <h4 class="title">Technical content may have per suasive objectives.</h4>
                    </div>
                    <div class="number-box">
                        <span>01</span>
                    </div>
                </div>
                <div class="history-item history-item-2">
                    <div class="history-thumb wow fadeInUp" data-wow-duration=".1s" data-wow-delay=".2s">
                        <img src="{{ asset('omnivus/images/history-4.jpg') }}" alt="history">
                    </div>
                    <div class="history-content wow fadeInUp" data-wow-duration=".1s" data-wow-delay=".2s">
                        <span>1990 - Startup</span>
                        <h4 class="title">Technical content may have per suasive objectives.</h4>
                    </div>
                    <div class="number-box">
                        <span>03</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="about-faq-area pb-100 bg_cover" style="background-image: url({{ asset('omnivus/images/faq-bg.jpg') }});">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="about-faq-content">
                    <span>FAQ</span>
                    <h2 class="title">Get Every answer from here.</h2>
                </div>
                <div class="faq-accordion-3 mt-30">
                    <div class="accordion" id="accordionExample">
                        <div class="card wow fadeInLeft" data-wow-duration=".1.2s" data-wow-delay=".2s">
                            <div class="card-header" id="headingOne">
                                <a class="" href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                   aria-controls="collapseOne">
                                    <i class="fal fa-magic"></i>Technical content may have persuasive objectives
                                </a>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term
                                        Information Technology (IT) has ballooned to encompass is real.Today, the term Information
                                        Technology (IT) has ballooned to encompass is real. </p>
                                </div>
                            </div>
                        </div>
                        <div class="card wow fadeInLeft" data-wow-duration=".1.2s" data-wow-delay=".3s">
                            <div class="card-header" id="headingTwo">
                                <a class="collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                   aria-controls="collapseTwo">
                                    <i class="fal fa-magic"></i>Technical content may have persuasive objectives
                                </a>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term
                                        Information Technology (IT) has ballooned to encompass is real.Today, the term Information
                                        Technology (IT) has ballooned to encompass is real. </p>
                                </div>
                            </div>
                        </div>
                        <div class="card wow fadeInLeft" data-wow-duration=".1.2s" data-wow-delay=".4s">
                            <div class="card-header" id="headingThree">
                                <a class="collapsed" href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                   aria-controls="collapseThree">
                                    <i class="fal fa-magic"></i>Technical content may have persuasive objectives
                                </a>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term
                                        Information Technology (IT) has ballooned to encompass is real.Today, the term Information
                                        Technology (IT) has ballooned to encompass is real. </p>
                                </div>
                            </div>
                        </div>
                        <div class="card wow fadeInLeft" data-wow-duration=".1.2s" data-wow-delay=".5s">
                            <div class="card-header" id="headingFour">
                                <a class="collapsed" href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                   aria-controls="collapseFour">
                                    <i class="fal fa-magic"></i>Technical content may have persuasive objectives
                                </a>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term
                                        Information Technology (IT) has ballooned to encompass is real.Today, the term Information
                                        Technology (IT) has ballooned to encompass is real. </p>
                                </div>
                            </div>
                        </div>
                        <div class="card wow fadeInLeft" data-wow-duration=".1.2s" data-wow-delay=".6s">
                            <div class="card-header" id="headingFive">
                                <a class="collapsed" href="#" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false"
                                   aria-controls="collapseFive">
                                    <i class="fal fa-magic"></i>Technical content may have persuasive objectives
                                </a>
                            </div>
                            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term
                                        Information Technology (IT) has ballooned to encompass is real.Today, the term Information
                                        Technology (IT) has ballooned to encompass is real. </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <p>The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has
                            changed too, as have the things that we bring to our community onferences, books, and our membership added
                            to the online magazine.</p>
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
                        <p><span>For more then 30 years,</span> IT Service has been a reliable partner in the field of logistics and
                            cargo forwarding.</p>
                        <a href="#"><i class="fal fa-angle-right"></i>Discover More</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-copyright">
                        <p>Copyright <a href="https://gizmoder.com/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="45073c05">[email&#160;protected]</a> <span>tanvir82</span> - 2019</p>
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
