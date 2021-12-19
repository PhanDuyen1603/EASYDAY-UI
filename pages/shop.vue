<template>
  <div>
    <ThemeBreadcrumb></ThemeBreadcrumb>
    <b-container class="mt-5">
      <section class="row">
        <div class="col-3">
          <BaseFilterCard>
            <template #card-title>PRODUCT CATEGORIES</template>
            <ul class="list-group list-group-flush">
              <li
                v-for="(category, index) in categories"
                :key="index"
                class="list-group-item"
              >
                <b-link
                  v-b-toggle="category.name"
                  class="d-flex justify-content-between"
                >
                  <span class="cat-name">{{ category.name }}</span>
                  <span class="cat-count">{{ category.count }}</span>
                </b-link>
                <b-collapse
                  v-if="
                    category.subCategories && category.subCategories.length > 0
                  "
                  :id="category.name"
                >
                  <b-card>I should start open!</b-card>
                </b-collapse>
              </li>
            </ul>
          </BaseFilterCard>
          <BaseFilterCard>
            <template #card-title>Filter by price</template>
            <FilterPriceSlider :max-price="990"></FilterPriceSlider>
          </BaseFilterCard>
          <BaseFilterCard>
            <template #card-title>PRODUCT CATEGORIES</template>
            <ul class="list-group list-group-flush">
              <li
                v-for="(brand, index) in brands"
                :key="index"
                class="list-group-item"
              >
                <b-link class="d-flex justify-content-between">
                  <span class="cat-name">{{ brand.name }}</span>
                  <span class="cat-count">{{ brand.count }}</span>
                </b-link>
              </li>
            </ul>
          </BaseFilterCard>
          <BaseFilterCard>
            <template #card-title>Product tags</template>
            <div class="d-flex flex-wrap">
              <span
                v-for="(tag, index) in tags"
                :key="index"
                class="
                  px-3
                  py-2
                  me-3
                  my-2
                  tag-badge
                  badge
                  bg-light
                  text-dark
                  rounded-pill
                "
                >{{ tag }}</span
              >
            </div>
          </BaseFilterCard>
          <BaseFilterCard>
            <template #card-title>FEATURED PRODUCTS </template>
            <ul class="list-group list-group-flush">
              <li class="list-group-item no-padding">
                <CardSmall></CardSmall>
                <CardSmall></CardSmall>
                <CardSmall></CardSmall>
                <CardSmall></CardSmall>
              </li>
            </ul>
          </BaseFilterCard>
        </div>
        <div class="col-9">
          <div class="organey-sorting section-header justify-content-between">
            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-light btn-circle  ic-shop">
                <i class="fas fa-list "  style="font-size: 13px"></i>
              </button>
              <button type="button" class="btn btn-light btn-circle active ic-shop">
                <i class="fas fa-th-large" style="font-size: 13px"></i>
              </button>
              <b-dropdown
                toggle-class="rounded-lg "
                text="Default sorting"
                variant="ligth"
                class="m-2 btn-sort"
              >
                <b-dropdown-item href="#">Sort by popularity</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Sort by average rating</b-dropdown-item
                >
                <b-dropdown-item href="#">Sort by latest</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="" style="font-size: 14px">
              <span>Showing 1–16 of 40 results</span>
            </div>
          </div>
          <div class="mt-4 row" style="margin: 0 auto">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="col-3"
              style="padding-left: 0px; padding-right: 0px"
            >
              <CardMain :product="product"></CardMain>
            </div>
          </div>
          <div
            class="organey-sorting mt-4 d-flex justify-content-center"
            style="width: 100%"
          >
            <a v-for="p in totalPage" :key="p" 
              class="page-numbers" :class="{current : page === p}"
              @click="changePage(p)"
            >{{ p }}</a>
            <nuxt-link to="" class="page-numbers next-page">></nuxt-link>
          </div>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      page: 1,
      offset: 16,
      rangeValue: 20,
      brands: [
        {
          name: 'Biona',
          count: 2,
        },
        {
          name: 'Borough Broth',
          count: 1,
        },
        {
          name: 'Clearspring',
          count: 3,
        },
        {
          name: 'Daylesford Organic',
          count: 3,
        },
        {
          name: 'Biona',
          count: 2,
        },
        {
          name: 'Biona',
          count: 2,
        },
        {
          name: 'Biona',
          count: 2,
        },
      ],
      tags: [
        'bread',
        'fruits',
        'healthy',
        'juices',
        'meat',
        'natural',
        'vegetables',
      ],
    }
    
  },
  computed: {
    ...mapGetters({products: 'modules/products/products'}),
    ...mapGetters({categories: 'modules/products/categories'}),
    ...mapGetters({productsCount: 'modules/products/productsCount'}),
    totalPage() {
      return Math.ceil(+this.productsCount / +this.offset)
    }
  },
  mounted() {
    this.$store.dispatch('modules/products/getProducts', {page: this.page, offset: this.offset})
  },
  methods: {
    changePage(p) {
      this.page = p
      this.$store.dispatch('modules/products/getProducts', {page: this.page, offset: this.offset})
    }
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

.ratings {
  .fa-star {
    &.rating-color {
      color: #f5b400;
    }

    font-size: 13px;
  }
}

.no-padding{
  padding: 0px !important;
}

.btn-circle {
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &.active,
  &:hover {
    background: $primary-color;

    i {
      color: #fff;
    }
  }
}

.ic-shop{
  width: 30px;
  height: 30px;
  padding: 2px 8px;
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
  padding: 5px 15px;
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
  color: $primary-color;
  border-color: $primary-color;

  &:hover {
    color: $primary-color;
  }
}

.list-group-item > div:not(:last-child) {
  border-bottom: 1px solid #e4e4e4;
}

.btn-sort {
  color: #656766 !important;
  border: 0;
  padding: 3px 15px !important;
  background-color: #fff;
  border-radius: 30px;
  font-size: 14p !important;
  font-weight: 500;
  text-align: left;
}

.rounded-lg {
    color: #656766 !important;
    border: 0;
    padding: 3px 15px !important;
    background-color: #fff;
    border-radius: 30px;
    font-size: 14px !important;
    font-weight: 500;
    text-align: left;
}
</style>
