<template>
  <b-col class="product-item">
    <div class="product-item-bg"></div>
    <a class="img-prod">
      <span v-if="product.sale && product.sale.length > 0" class="onsale">{{ product.sale }}</span>
      <img
        width="234"
        height="234"
        class="img-radius"
        :src="`/images/products/image${product.id}.png` || '~/assets/images/pro-2.jpeg'"
      />
      <div class="product-reactions">
        <div class="reaction">
          <span class="icon">
            <i class="fas fa-redo"></i>
          </span>
        </div>
        <div class="reaction">
          <span class="icon">
            <i class="far fa-eye"></i>
          </span>
        </div>
        <div class="reaction">
          <span class="icon">
            <i class="far fa-heart"></i>
          </span>
        </div>
      </div>
    </a>
    <div class="product-caption">
      <div>
        <b-form-rating v-model="rating" readonly></b-form-rating>
      </div>
      <div class="woocommerce-loop-product__title">
        <a href="/">{{ product.name }}</a>
      </div>
      <span class="price">
        <del v-if="product.sale && product.sale.length > 0" aria-hidden="true"
          ><span class="woocommerce-Price-amount amount">
            <bdi
              ><span class="woocommerce-Price-currencySymbol">£</span
              >{{ product.price }}</bdi
            ></span
          >
        </del>
        <ins style="text-decoration: none">
          <span class="woocommerce-Price-amount amount">
            <bdi
              ><span class="woocommerce-Price-currencySymbol">£</span
              >527.32</bdi
            >
          </span>
        </ins>
      </span>
      <div class="add-to-cart-wrap">
        <a v-if="loadingButton">
          <b-spinner style="width: 1.25rem; height: 1.25rem; margin: 0 .3rem" label="medium Spinner" type="grow"></b-spinner>
          <b-spinner style="width: 1.25rem; height: 1.25rem; margin: 0 .3rem" label="medium Spinner" type="grow"></b-spinner>
          <b-spinner style="width: 1.25rem; height: 1.25rem; margin: 0 .3rem" label="medium Spinner" type="grow"></b-spinner>
        </a>
        <a  v-else @click="addToCart(product)" data-quantity="1" class="">
          <span
            ><svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 500 500"
              enable-background="new 0 0 500 500"
              xml:space="preserve"
              class="qodef-svg"
              style="width: 22px; margin-right: 10px"
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
              </g></svg
          ></span>
          Add to cart</a
        >
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rating: this.product.rating || 1,
      loadingButton: false
    }
  },
  methods: {
    async addToCart(product) {
      this.loadingButton = true
      await this.$store.dispatch('modules/cart/addProductToCart', { product })
      this.loadingButton = false
    }
  },
}
</script>

<style lang="scss" scoped>
.add-to-cart-wrap {
  position: relative;
  transition: all 0.3s ease-in-out;
}
.product-reactions {
  z-index: 7;
}
.product-reactions {
  opacity: 0;
  width: 100%;
  position: absolute;
  left: 0;
  top: -10%;
  display: flex;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  background: rgba(205, 206, 255, 0.1);
}
.reaction {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: $primary-hover;
  margin: 0.5rem;
  position: relative;
  cursor: pointer;
  .icon {
    position: absolute;
    top: 13px;
    left: 12px;
    i {
      font-size: 14px;
      color: #fff;
    }
  }
}
.product-item-bg {
  width: 100%;
  height: 100%;
}
.product-item {
  position: relative;
  transition: all 1s ease;
  .product-item-bg {
    &::before {
      content: '';
      width: 200px;
      height: 200px;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s ease-in-out;
      border-radius: 16px;
    }
  }
  &:hover {
    .product-reactions {
      transform: translateY(-50%);
      opacity: 1;
    }
    .product-item-bg::before {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 24px rgb(0 0 0 / 10%);
    }
    .add-to-cart-wrap {
      a {
        background: $primary-hover;
        color: #fff;
      }
      .qodef-svg {
        fill: #fff;
      }
    } 
  }
}
</style>
