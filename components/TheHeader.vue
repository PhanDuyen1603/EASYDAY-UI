<template>
  <header class="header-top">
    <!-- NAVBAR -->
    <nav class="">
      <div class="container">
        <div class="d-flex justify-content-between" style="margin-bottom: 30px">
          <NuxtLink to="/" class="navbar-brand"
            ><img
              class="logo-foodmood"
              src="~/assets/images/logo2.png"
              alt="logo-foodmood"
          /></NuxtLink>
          <div class="search-header">
            <form action="" class="form-search">
              <input
                class="search-feild"
                type="search"
                name="search-feild"
                id=""
                placeholder="Search products..."
              />
              <button class="btn-search" type="submit" value="Search">
                Search
              </button>
            </form>
          </div>
          <div class="d-flex">
            <div class="wishlist">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="heart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-heart fa-w-16 fa-2x icon-size"
              >
                <path
                  fill="currentColor"
                  d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  class=""
                ></path>
              </svg>
              <span class="count">8</span>
            </div>
            <div class="shopping-list">
              <NuxtLink to="/" class="navbar-brand"
                ><img
                  class="icon-size"
                  src="~/assets/images/shopping-bag.svg"
                  alt="logo-foodmood"
              /></NuxtLink>
              <span class="count">0</span>
              <bdi
                ><span class="woocommerce-Price-currencySymbol">£</span
                >0.00</bdi
              >
            </div>
          </div>
        </div>
      </div>
      <div class="header-main">
        <div class="d-flex">
          <div class="all-menu">
            <div class="vertical-navigation-header">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-bars fa-w-14 fa-2x icon-header"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  class=""
                ></path>
              </svg>
              <span class="vertical-navigation-title">All Departments</span>
            </div>
          </div>
          <div class="header-item-all">
            <div class="primary-navigation d-flex">
              <ul class="mb-0">
                <div class="d-flex">
                  <li class="dropdown menu-link"><span>Home</span></li>
                  <li class="dropdown2 menu-link">
                    <span>Product</span>
                    <span
                      ><svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="svg-inline--fa icon-header-menu"
                      >
                        <path
                          fill="currentColor"
                          d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                          class=""
                        ></path></svg
                    ></span>
                    <ul class="dropdown-content">
                      <li href="#">Link 1</li>
                      <li href="#">Link 2</li>
                      <li href="#">Link 3</li>
                    </ul>
                  </li>
                  <li class="dropdown3 menu-link"><span>Category</span>
                    <span class="ml-2"
                      ><svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="svg-inline--fa icon-header-menu"
                      >
                        <path
                          fill="currentColor"
                          d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                          class=""
                        ></path></svg
                    ></span>
                    <ul class="dropdown-content">
                      <li href="#">Link 1</li>
                      <li href="#">Link 2</li>
                      <li href="#">Link 3</li>
                    </ul>
                  </li>
                  <li class="dropdown menu-link"><span>Detail</span></li>
                  <li class="dropdown menu-link"><span>Contact</span></li>
                </div>
              </ul>
              <div class="contact d-flex">
                <span class="icon-contact"
                  ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="headphones"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="svg-inline--fa icon-header"
                  >
                    <path
                      fill="currentColor"
                      d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"
                      class=""
                    ></path></svg
                ></span>
                <h3 class="elementor-icon-box-title">
                  <a href="tel:1-800-234-5678"> 1-800-234-5678 </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /container -->
    </nav>
    <!-- <Login v-if="showLoginModal" @close-modal="showLoginModal = false" @switch-modal="switchModal"/>
    <Signup v-if="showSignupModal" @close-modal="showSignupModal = false" @switch-modal="switchModal"/> -->
  </header>
</template>

<script>
export default {
  components: {
    // Login,
    // Signup
  },
  data() {
    return {
      showLoginModal: false,
      showSignupModal: false,
      first_name: '',
      last_name: '',
      email_address: '',
      gender: '',
      number: '',
      age: '',
      language: '',
      state: '',
    }
  },
  methods: {
    switchModal(value) {
      if (value === 'login') {
        this.showLoginModal = true
        this.showSignupModal = false
      } else {
        this.showLoginModal = false
        this.showSignupModal = true
      }
    },
  },
}
</script>
