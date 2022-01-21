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
              <a href="#top-flash-sales" style="align-items: center; display: flex">
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
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 483.1 483.1"
                    style="enable-background: new 0 0 483.1 483.1; width: 26px;"
                    xml:space="preserve" 
                  >
                    <g>
                      <path
                        d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6
		c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3
		C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z
		 M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1
		c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"
                      />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
              </span>
              <span class="count" style="bottom: -7px">{{
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
