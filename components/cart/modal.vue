<template>
  <div>
    <div @click="showModal">
      <slot>
        <b-button id="show-btn" @click="showModal">
            Open Modal
        </b-button>
      </slot>
    </div>
    <!-- <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button> -->

    <b-modal id="cart-modal" ref="cart-modal" hide-footer title="SHOPPING CART" content-class="modal-wrapper" title-class="modal-title">
      <div class="d-block text-center">
        <li v-for="item in items" :key="item.id" class="list-group-item">
          <CardCart :item="item"></CardCart>
        </li>
      </div>
      <div class="b-block text-center">
        <div class="d-flex justify-content-between p-3">
          <h2 class="total-title">Subtotal</h2>
          <h2 class="total-price">£440.40</h2>
        </div>
        <div class="p-2 row">
          <button class="btn-checkout checked"><a href="/checkout">Checkout</a></button>
          <button class="btn-checkout" @click="moveToCart()">View Cart</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    props: {
      items: {
        type: Array,
        default:() => []
      }
    },
    computed: {
      ...mapGetters({
        cartModal: 'modules/cart/cartModal',
      }),
    },
    methods: {
      showModal() {
        this.$store.commit('modules/products/SET_CART_MODAL_STATUS', true)
        this.$refs['cart-modal'].show()
      },
      hideModal() {
        this.$store.commit('modules/products/SET_CART_MODAL_STATUS', false)
        this.$refs['cart-modal'].hide()
      },
      toggleModal() {
        this.$refs['cart-modal'].toggle('#toggle-btn')
      },
      moveToCart() {
        this.$router.push('/shop_cart')
      }
    }
  }
</script>
<style lang="scss">
#cart-modal {
    overflow: hidden;
  .modal-wrapper {
      height: 100vh;
      overflow-y: auto;
  }
  .modal-dialog {
      margin-top: 0;
      margin-left: calc(100% - 500px);
  }
  .list-group-item {
    border: none;
  }
  .btn-checkout{
    margin: .5rem 0;
    color: $text-color;
    border: 2px solid $border-color;
    padding: calc(.9rem - 2px) 2.2rem;
    font-weight: 500;
    border-radius: 24px;
    line-height: 1.4;
    background: #fff;
    &.checked {
      color: #fff;
      border-color: $primary-color;
      background: $primary-color;
    }
    &:not(.checked):hover {
      color: $primary-color;
      border-color: $primary-color;
      background: #fff;
    }
  }
   .btn-checkout a{
     color: #fff;
     &:hover{
       color: #fff;
     }
   }
  .modal-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .total-title, .total-price, .modal-header {
    font-weight: 700;
    font-size: 1.5rem;
  }
  .total-price {
    color: $primary-color
  }
  .modal-header {
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  button.close {
    border: none;
    background: inherit;
    font-size: 3rem;
  }
}

</style>