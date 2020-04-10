<template>
  <header class="header-area header-area-2" :class="data.currentPage === data.domain ? 'header-area-4': 'header-area-2'">
    <div class="header-top pl-30 pr-30 white-bg">
      <div class="row align-items-center">
        <div class="col-md-6 col-sm-7">
          <div class="header-left-side text-center text-sm-left">
            <ul>
              <li><a :href="'mailto:' + data.email"><i class="fal fa-envelope"></i> {{ data.email }}</a></li>
              <li><a :href="'tel:' + data.phone "><i class="fal fa-phone"></i>{{ data.phone }}</a></li>
            </ul>
          </div>
        </div>

        <div class="col-md-6 col-sm-5">
          <div class="header-right-social text-center text-sm-right">
            <ul>
              <li v-for="network in data.socialNetworks" :key="network.key">
                <a target="_blank" :href="network.attributes.link"><i :class="'fab ' + network.attributes.network"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav">
      <div class="navigation">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="/"><img :src="data.logo" alt=""></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item" v-for="route in routes" :key="route.id" :class="route.active ? 'active' : ''">
                <a class="nav-link" :href="route.link">{{ route.title }}</a>
                <ul v-if="route.children" class="sub-menu">
                  <li v-for="child in route.children" :key="child.id">
                    <a :class="child.active ? 'sub-menu-active' : ''" :href="child.link">{{ child.title }}</a>
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
            <a class="main-btn" :href="data.cabinet.url">
              {{ data.cabinet.title }}
<!--              <i class="fal fa-long-arrow-right"></i>-->
            </a>
          </div>

          <ul v-show="data.cabinet.loggedIn" class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" :href="data.cabinet.logoutUrl" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                {{ data.cabinet.logoutTitle }}
              </a>
            </li>
          </ul>

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
  .sub-menu-active {
    background-color: #0c59db;
    color: #fff!important;
  }
</style>