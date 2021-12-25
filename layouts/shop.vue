<template>
  <div class="wrap__body">
    <TheHeader />
    <main class="main">
      <div>
        <ThemeBreadcrumb></ThemeBreadcrumb>
        <b-container class="mt-5">
          <section class="row">
            <div class="col-3">
              <BaseFilterCard>
                <template #card-title>PRODUCT CATEGORIES</template>
                <ul class="list-group list-group-flush">
                  <li v-for="(category, index) in categories" :key="index" class="list-group-item">
                    <b-link v-b-toggle="category.name" class="d-flex justify-content-between">
                      <span class="cat-name">{{ category.name }}</span>
                      <span class="cat-count">{{ category.count }}</span>
                    </b-link>
                    <b-collapse v-if="category.subCategories && category.subCategories.length > 0" :id="category.name">
                      <b-card>I should start open!</b-card>
                    </b-collapse>
                  </li>
                </ul>
              </BaseFilterCard>
              <BaseFilterCard>
                <template #card-title>Filter by price</template>
                <FilterPriceSlider :max-price="990" @apply-filter="priceFilter"></FilterPriceSlider>
              </BaseFilterCard>
              <BaseFilterCard>
                <template #card-title>PRODUCT CATEGORIES</template>
                <ul class="list-group list-group-flush">
                  <li v-for="(brand, index) in brands" :key="index" class="list-group-item">
                    <b-link class="d-flex justify-content-between">
                      <span class="cat-name">{{ brand.name }}</span>
                      <span class="cat-count">{{ brand.count }}</span>
                    </b-link>
                  </li>
                </ul>
              </BaseFilterCard>
              <BaseFilterCard>
                <template #card-title>FEATURED PRODUCTS</template>
                <div class="d-flex flex-wrap">
                  <span v-for="(tag, index) in tags" :key="index"
                    class="px-3 py-2 me-3 my-2 tag-badge badge bg-light text-dark rounded-pill">{{ tag }}</span>
                </div>
              </BaseFilterCard>
              <BaseFilterCard>
                <template #card-title>Product tags</template>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <CardSmall></CardSmall>
                    <CardSmall></CardSmall>
                    <CardSmall></CardSmall>
                    <CardSmall></CardSmall>
                  </li>
                </ul>
              </BaseFilterCard>
            </div>
            <div class="col-9">
              <Nuxt />
            </div>
          </section>
        </b-container>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        brands: [{
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
      ...mapGetters({
        categories: 'modules/products/categories'
      }),
    },
    methods: {
      priceFilter($event) {
        this.$store.dispatch('modules/products/filterProducts', {
         filters: {
            minPrice: $event.min,
            maxPrice: $event.max
         } 
        })
      }
    },
  }

</script>
