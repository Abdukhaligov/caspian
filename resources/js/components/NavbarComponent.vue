<template>
  <header class="header-area header-area-2 header-area-4">
    <div class="header-top pl-30 pr-30 white-bg">
      <div class="row align-items-center">
        <div class="col-md-6 col-sm-7">
          <div class="header-left-side text-center text-sm-left">
            <ul>
              <li><a href="#"><i class="fal fa-envelope"></i> <span class="__cf_email__" data-cfemail="95fcfbf3fad5e2f0f7f8f4fcf9bbf6faf8">[email&#160;protected]</span></a></li>
              <li><a href="#"><i class="fal fa-phone"></i> 070 5564 238 44</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-sm-5">
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
    <div class="header-nav">
      <div class="navigation">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="index.html"><img :src="data.logo" alt=""></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item" v-for="route in routes" :key="route.id" :class="route.active">
                <a class="nav-link" :href="route.link">{{ route.title }}</a>
                <ul v-if="route.children" class="sub-menu">
                  <li class="active" v-for="child in route.children" :key="child.id">
                    <a :href="child.link">{{ child.title }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
<!--          <div class="bar-area d-none d-xl-block">-->
<!--            <ul>-->
<!--              <li><a href="#"><i class="fal fa-shopping-cart"></i></a></li>-->
<!--              <li><a href="#"><i class="fal fa-search"></i></a></li>-->
<!--              <li><a href="#"><i class="fal fa-bars"></i></a></li>-->
<!--            </ul>-->
<!--          </div>-->
          <div class="navbar-btn mr-100">
            <a class="main-btn" href="#">Free Consulting <i class="fal fa-long-arrow-right"></i></a>
          </div>
          <div class="country-flag d-none d-lg-block ml-3">
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
    props: ['routes','locale','data']
  }
</script>

<style scoped>

</style>