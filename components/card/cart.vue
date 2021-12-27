<template>
  <div class="card card-horizontal mb-3" style="max-width: 540px">
    <div class="row g-0 align-items-center">
      <div class="col-3 card-horizontal-img">
        <img height="100" width="100" :src="buildImgUrl(item.id)" alt="">
      </div>
      <div class="col-9">
        <div class="card-body row">
          <div class="col-10 text-left">
            <b-link>
              <h5 class="card-title">{{ item.name }}</h5>
            </b-link>
            <p><span class="quantity">{{ item.quantity }}</span> x <span class="card-text price">£{{ item.price }}</span></p>
          </div>
          <div class="col-2">
            <p class="card-icon-delete" @click="deleteItem(item)"><img class="delete" src="images/icons/icon-trash.svg" alt=""></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: () => ({
          name: 'Thinly Sliced Beef Brisket',
          price: '985.97',
          quantity: 1,
          id: 1
        })
      }
    },
    methods: {
        buildImgUrl(id) {
            return `/images/products/image${id}.png`
        },
        deleteItem(product) {
          this.$store.commit('modules/cart/DELETE_PRODUCT', product)
        }
    },
  }

</script>

<style lang="scss" scoped>
  .card-horizontal {
    border: none;

    .card-horizontal-img {
      border-radius: 1rem;
      overflow: hidden;
    }

    h5 {
      font-size: 1rem;
    }

    .price {
      font-size: 14px;
      font-weight: 700;
      color: #5c9963;
      margin-top: 10px;
    }
  }

  .card-title {
    color: #000;
    font-weight: 600;
  }

  .quantity {
    font-size: .8rem;
  }

  .card-icon-delete img {
      filter: opacity(.5);
  }

</style>
