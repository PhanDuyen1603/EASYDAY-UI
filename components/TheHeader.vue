<template>
  <header class="">
    <div class="header-info d-flex">
      <div class="d-flex">
        <div class="header-info-item">
          <div>Welcome to our online store!</div>
        </div>
        <div class="language-switcher">
          <ul class="menu-language">
            <li class="item">
              <div class="language-switcher-head">
                <img
                  src="https://demothemedh.b-cdn.net/organey/wp-content/themes/organey/assets/images/language-switcher/en.png"
                  alt="WPML"
                />
                <span class="title"
                  >English
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
                      ></path></svg></span
                ></span>
                <i class="organey-icon-chevron-down"></i>
              </div>
              <ul class="sub-item-header-info">
                <li>
                  <a href="#">
                    <img
                      width="18"
                      height="12"
                      src="~/assets/images/VN.svg"
                      alt="WPML"
                    />
                    <span>Tiếng Việt</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      width="18"
                      height="12"
                      src="https://demothemedh.b-cdn.net/organey/wp-content/themes/organey/assets/images/language-switcher/de.png"
                      alt="WPML"
                    />
                    <span>German</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex">
        <div class="elementor-icon-list-item">
          <a href="mailto:contact@example">
            <span class="elementor-icon-list-icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-envelope fa-w-16 fa-2x"
                style="width: 17px; color: #5c9963"
              >
                <path
                  fill="currentColor"
                  d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                  class=""
                ></path>
              </svg>
            </span>
            <span class="elementor-icon-list-text">contact@example</span>
          </a>
        </div>
        <div class="elementor-widget-container">
          <div class="site-header-account">
            <a
              data-toggle="button-side"
              data-target=".site-account-side"
              href="#"
            >
              <span class="account-user">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="user"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="svg-inline--fa fa-user fa-w-14 fa-2x"
                  style="width: 17px; color: #5c9963"
                >
                  <path
                    fill="currentColor"
                    d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                    class=""
                  ></path>
                </svg>
              </span>
              <span class="account-content"> Login </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- NAVBAR -->
    <nav class="header-top">
      <div class="container">
        <div class="d-flex justify-content-between" style="margin-bottom: 30px">
          <NuxtLink to="/" class="navbar-brand"
            ><img
              class="logo-foodmood"
              src="~/assets/images/logo.svg"
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
              <span class="qodef-m-icon">
                <svg
                  class="qodef-svg"
                  style="width: 27px"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 500 500"
                  enable-background="new 0 0 500 500"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M448.2,292.3c-5.6-0.6-10.9,3.3-11.6,9l-21.8,168.6c-0.6,5.3-5,9.3-10.3,9.3h-310c-5.3,0-9.8-4-10.4-9.6
		L62.3,302.1c-0.7-5.7-6-9.7-11.6-9c-5.7,0.7-9.7,5.9-9,11.6l21.7,167.3c1.7,15.9,15,27.9,31,27.9h310c16,0,29.3-12,31-27.7
		L457.2,304C457.9,298.3,453.9,293.1,448.2,292.3z"
                    ></path>
                    <path
                      d="M166.3,447.8V323.4c0-5.7-4.6-10.4-10.4-10.4c-5.7,0-10.4,4.6-10.4,10.4v124.4c0,5.7,4.6,10.4,10.4,10.4
		C161.6,458.2,166.3,453.6,166.3,447.8z"
                    ></path>
                    <path
                      d="M353.3,447.8V323.4c0-5.7-4.6-10.4-10.4-10.4c-5.7,0-10.4,4.6-10.4,10.4v124.4c0,5.7,4.6,10.4,10.4,10.4
		C348.6,458.2,353.3,453.6,353.3,447.8z"
                    ></path>
                    <path
                      d="M290.9,447.8V323.4c0-5.7-4.6-10.4-10.4-10.4s-10.4,4.6-10.4,10.4v124.4c0,5.7,4.6,10.4,10.4,10.4
		S290.9,453.6,290.9,447.8z"
                    ></path>
                    <path
                      d="M228.6,447.8V323.4c0-5.7-4.6-10.4-10.4-10.4c-5.7,0-10.4,4.6-10.4,10.4v124.4c0,5.7,4.6,10.4,10.4,10.4
		C224,458.2,228.6,453.6,228.6,447.8z"
                    ></path>
                    <path
                      d="M468.4,188.4h-43.6L278.7,46.1c1.8-3.9,2.8-8.1,2.8-12.7c0-16.8-13.8-30.5-30.7-30.5s-30.7,13.7-30.7,30.5
		c0,4.5,1,8.8,2.8,12.7L76.9,188.4H32.1C15,188.4,1,202.4,1,219.5v20.8c0,17.2,14,31.2,31.2,31.2h436.3c17.2,0,31.2-14,31.2-31.2
		v-20.8C499.6,202.4,485.6,188.4,468.4,188.4z M250.9,23.7c5.5,0,9.9,4.4,9.9,9.8c0,2.6-1.1,5-2.8,6.8c0,0,0,0-0.1,0.1
		c0,0,0,0.1-0.1,0.1c-1.8,1.8-4.2,2.8-7,2.8c-2.7,0-5.2-1.1-7-2.8c0,0,0-0.1-0.1-0.1c0,0,0,0-0.1-0.1c-1.7-1.8-2.8-4.1-2.8-6.8
		C241,28,245.4,23.7,250.9,23.7z M237.5,60.9c4,1.9,8.5,3.1,13.3,3.1c4.8,0,9.3-1.1,13.3-3.1L395,188.4H106.7L237.5,60.9z
		 M478.8,240.3c0,5.7-4.7,10.4-10.4,10.4H32.1c-5.7,0-10.4-4.7-10.4-10.4v-20.8c0-5.7,4.7-10.4,10.4-10.4h436.3
		c5.7,0,10.4,4.7,10.4,10.4V240.3z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span class="count">6</span>
              <bdi
                ><span class="woocommerce-Price-currencySymbol">£</span
                >0.00</bdi
              >
            </div>
          </div>
        </div>
      </div>
      <div class="header-main">
        <div class="d-flex center height-header">
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
                  <li class="dropdown menu-link">
                    <a href="/">
                    <span>Home</span>
                    </a>
                  </li>
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
                  <li class="dropdown3 menu-link">
                    <span>Category</span>
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
                <div class="elementor-icon-list-item">
                  <a class="d-flex fix-ic">
                    <span class="elementor-icon-list-icon fix-ic-item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="headset"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="svg-inline--fa fa-headset fa-w-16 fa-2x"
                        style="width: 17px; color: #5c9963"
                      >
                        <path
                          fill="currentColor"
                          d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                          class=""
                        ></path>
                      </svg>
                    </span>
                    <h3 class="elementor-icon-box-title">
                      <a href="tel:1-800-234-5678"> 1-800-234-5678 </a>
                    </h3>
                  </a>
                </div>
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
