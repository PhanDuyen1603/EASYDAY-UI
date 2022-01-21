<template>
  <b-col class="product-item">
    <div class="product-item-bg"></div>
    <a class="img-prod" href="/product-detail/kiwi-fruit-single">
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
        <a v-else @click="addToCart(product)" data-quantity="1" class="d-flex align-items-center">
          <span
            >
             <svg 
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 483.1 483.1"
                    style="enable-background: new 0 0 483.1 483.1; width: 22px; margin-right: 10px"
                    xml:space="preserve" 
                    class="qodef-svg"
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
          <div>Add to cart</div>
          </a
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
