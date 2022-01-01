<template>
  <nav class="header-top">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <NuxtLink to="/" class="navbar-brand">
          <img
            class="logo-foodmood"
            src="~/assets/images/logo.svg"
            alt="logo-foodmood"
          />
          <div class="logo-name">Easyday</div>
        </NuxtLink>

        <ul class="mb-0">
          <div class="d-flex" style="align-items: center; display: flex">
            <li class="dropdown">
              <a href="/" style="align-items: center; display: flex">
                <img
                  class="flash-sale-ani mr-1"
                  width="21"
                  src="~/assets/images/flastsaleani.svg"
                />
                <span class="ml-1" style="color: #5c9863; font-weight: 800">Flash Sales </span>
                <img
                  class="flash-sale-ani" style="margin-left: 5px"
                  width="21"
                  src="~/assets/images/flastsaleani.svg"
                />
              </a>
            </li>
            <li class="dropdown menu-link">
              <a href="/"><span>Home</span></a>
            </li>
            <li class="dropdown2 menu-link">
              <a href="/shop"><span>Shop</span></a>
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
                    fill="#000"
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                  ></path></svg
              ></span>
            </li>
            <li class="dropdown menu-link"><span>Foods Idea</span></li>
            <li class="dropdown menu-link"><span>Contact</span></li>
          </div>
        </ul>

        <div class="d-flex">
          <div class="wishlist">
            <img src="~/assets/images/heart9.png" />
            <span class="count" style="bottom: -4px">8</span>
          </div>
          <CartModal :items="items">
            <div class="shopping-list">
              <span class="qodef-m-icon">
                <svg
                  class="qodef-svg"
                  style="width: 27px; fill: black"
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
              <span class="count" style="bottom: -8px">{{
                items.length || 0
              }}</span>
              <bdi class="ic-fix"
                ><span class="woocommerce-Price-currencySymbol">£</span
                >{{ totalPrice || 0 }}</bdi
              >
            </div>
          </CartModal>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      items: 'modules/cart/items',
    }),
    ...mapGetters({
      totalPrice: 'modules/cart/totalPrice',
    }),
  },
}
</script>

<style lang="scss" scoped>
.menu-link {
  padding: 1.2rem;
  cursor: pointer;
  span:hover {
    color: $primary-color !important;
  }
}

.fix-ani {
  margin-right: 10p;
}

.fix-ani:hover {
  height: 18px;
}
</style>
