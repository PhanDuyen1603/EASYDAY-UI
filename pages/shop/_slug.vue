<template>
  <div>
    <div class="organey-sorting section-header justify-content-between">
      <div class="d-flex align-items-center">
        <button type="button" class="btn mr-1 btn-light btn-circle ">
          <i class="fas fa-list fix-ic-shop"></i>
        </button>
        <button type="button" class="btn btn-light btn-circle active">
          <i class="fas fa-th-large fix-ic-shop"></i>
        </button>
        <b-dropdown toggle-class="rounded-lg " text="Outline Danger" variant="ligth" class="m-2 btn-sort">
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="count-prod-shop">
        <span>Showing {{ page === 1 ? 1 : (page - 1) * offset + 1 }}–{{
            offset * page
          }}
          of {{ productsCount }} results</span>
      </div>
    </div>
    <div v-if="loading" class="mt-4 row" style="margin: 0 auto;">
      <div v-for="i in 8" :key="i" class="col-3 mb-3">
        <LoadingSkeletonCard></LoadingSkeletonCard>
      </div>
    </div>
    <div  class="mt-4 row" style="margin: 0 auto;">
      <div v-for="(product, index) in products" :key="index" class="col-3" style="padding: 0px; margin-bottom: 10px;">
        <CardMain :product="product"></CardMain>
      </div>
    </div>
    <div class="organey-sorting mt-4 d-flex justify-content-center" style="width: 100%">
      <a v-for="p in totalPage" :key="p" class="page-numbers" :class="{ current: page === p }"
        @click="changePage(p)">{{ p }}</a>
      <nuxt-link to="" class="page-numbers next-page">></nuxt-link>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    layout: 'shop',
    data() {
      return {
        page: 1,
        offset: 16,
        rangeValue: 20,
        filters: {
          category: '',
          tags: '',
          price: [],
        },
      }
    },
    computed: {
      ...mapGetters({
        products: 'modules/products/products',
      }),
      ...mapGetters({
        productsCount: 'modules/products/productsCount',
      }),
      ...mapGetters({
        loading: 'modules/products/loading',
      }),
      totalPage() {
        return Math.ceil(+this.productsCount / +this.offset)
      },
    },
    watch: {
      loading() {
        if (process.client) {
          window.scrollTo({
            top: 200,
            behavior: 'smooth',
          })
        }
      },
    },
    mounted() {
      if (this.$route.params && this.$route.params.slug) {
        this.$store.dispatch('modules/products/filterProducts', {
          filters: {
            searchString: this.$route.params.slug,
          },
        })
      } else {
        this.$store.dispatch('modules/products/getProducts')
      }
    },

    methods: {
      changePage(p) {
        this.page = p
        this.$store.dispatch('modules/products/getProducts', {
          page: this.page,
          offset: this.offset,
        })
      },
    },
  }

</script>

<style lang="scss" scoped>
  .tag-badge {
    border: 1px solid var(--bs-gray-400);

    &:hover {
      background: $primary-color;
      border: 1px solid $primary-color;
    }
  }

  .fa-star {
    color: #e4e4e4;
  }

  .fix-ic {
    height: 30px !important;
    width: 30px !important;
    position: relative;
  }

  .ic-shop {
    font-size: 12px;
    position: absolute;
    top: 9px;
    left: 9px;
  }

  .rounded-lg{
    color: #656766;
    border: 0;
    padding: 3px 15px;
    background-color: #fff;
    border-radius: 30px;
  }

  .btn-sort {
    background-color: #fff;
    border-radius: 30px;
  }

  .ratings {
    .fa-star {
      &.rating-color {
        color: #f5b400;
      }

      font-size: 13px;
    }
  }

  button#__BVID__324__BV_toggle_ {
    font-size: 14px !important;
    border: 0px;
    color: #656766 !important;
    font-weight: 600 !important;
  }

  .fix-padding {
    padding: 0 12px !important;
    height: 60px;
  }

  .pagination-page-title {
    font-size: 14px;
    font-weight: 500;
    color: #656766;
  }

  li.list-group-item a,
  .tagcloud a {
    color: #656766;
    font-weight: 600;
  }

  .fix-ic-shop{
    font-size: 12px;
    position: absolute;
    top: 9px;
    right: 7px;
  }

  .btn-circle {
    position: relative;
    border-radius: 50%;
    width: 30px;
    height: 30px;

    &.active,
    &:hover {
      background: $primary-color;

      i {
        color: #fff;
      }
    }
  }

  .count-prod-shop{
    font-size: 14px;
    color: #656766;
    font-weight: 500;
  }

  .card-product {
    border: none;
    border-radius: $border-xl;

    .card-product-img {
      border-radius: $border-xl;
      overflow: hidden;
    }

    .btn-product {
      padding: 0.6em;
      transition: all ease-in-out 0.3s;
      border: 1px solid;
      border-color: #e4e4e4;
      font-size: 1rem;
      text-transform: uppercase;
      border-radius: 24px;

      .cart-icon {
        width: 1.5rem;
        margin-right: 1rem;
      }
    }
  }

  .organey-sorting {
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 7px 15px;
    border-radius: 12px;
    background: #f5f5f5;
  }

  .page-numbers {
    display: inline-block;
    margin: 0 2px;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    background: #eee;
    color: #000;
    font-size: 12px;
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;

    &.current {
      background: $primary-hover;
      color: #fff;
    }
  }

</style>
<style lang="scss">
  .rounded-lg {
    border-radius: 20px;
    width: 180px;
  }

  .dropdown-toggle {
    color: #656766;
    border: 0;
    padding: 3px 15px;
    background-color: #fff;
    border-radius: 30px;

  }

  .list-group-item>div:not(:last-child) {
    border-bottom: 1px solid #e4e4e4;
  }

</style>
