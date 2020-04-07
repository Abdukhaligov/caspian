<template>
  <header class="header-area-2">
    <div class="header-top pl-30 pr-30">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="header-left-side text-center text-sm-left">
              <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="header-right-social text-center text-sm-right">
              <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-behance"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav">
      <div class="navigation">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="index-2.html"><img src="http://caspian/omnivus/images/logo-2.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <a class="nav-link" :href="routes.home.link">{{ routes.home.title }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :href="routes.about.link">{{ routes.about.title }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Media</a>
                <ul class="sub-menu">
                  <li><a :href="routes.gallery.link">{{ routes.gallery.title }}</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" :href="routes.contacts.link">{{ routes.contacts.title }}</a>
              </li>
            </ul>
          </div>
          <div class="navbar-btn mr-100">
            <a class="main-btn" href="#">Get A Quote</a>
          </div>
          <div class="country-flag d-none d-lg-block">
            <a :href="locale.link"><img :src="locale.img" alt="flag"></a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "NavbarComponent",
    props: ['routes','locale']
  }
</script>

<style scoped>

</style>