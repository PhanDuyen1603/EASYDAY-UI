/* eslint-disable prefer-const */
<template>
  <section>
    <div class="" style="margin-top: 70px">
      <div class="elementor-posts margin-page">
        <h2 class="title-posts">New Products</h2>
        <div class="bottom-title"></div>
      </div>
      <div>
        <div class="tab-prods">
          <b-tabs content-class="mt-2 tab-prod" align="center">
            <b-tab class="tab-prod-item" title="All" active>
              <b-container class="bv-example-row d-flex list-prod no-pad">
                <div class="mt-3 row" style="margin: 0 auto">
                  <div
                    v-for="(product, index) in products_list"
                    :key="index"
                    class="col-2 mb-3 card-home"
                    style="padding-left: 0px; padding-right: 0px"
                  >
                    <CardMain-Homepage img-height="280px" img-width="280px" :product="product"></CardMain-Homepage>
                  </div>
                </div>
              </b-container>
            </b-tab>
             <b-tab class="tab-prod-item" title="Vegetables">
              <b-container class="bv-example-row d-flex list-prod no-pad">
                <div class="mt-3 row" style="margin: 0 auto">
                  <div
                    v-for="(product, index) in products_veget"
                    :key="index"
                    class="col-2 mb-3 card-home"
                    style="padding-left: 0px; padding-right: 0px"
                  >
                    <CardMain-Homepage img-height="280px" img-width="280px" :product="product"></CardMain-Homepage>
                  </div>
                </div>
              </b-container>
            </b-tab>
            <b-tab class="tab-prod-item" title="Fruits">
              <b-container class="bv-example-row d-flex list-prod no-pad">
                <div class="mt-3 row" style="margin: 0 auto">
                  <div
                    v-for="(product, index) in products_fruits"
                    :key="index"
                    class="col-2 mb-3 card-home"
                    style="padding-left: 0px; padding-right: 0px"
                  >
                    <CardMain-Homepage img-height="280px" img-width="280px" :product="product"></CardMain-Homepage>
                  </div>
                </div>
              </b-container>
            </b-tab>
            <b-tab class="tab-prod-item" title="Bread">
              <b-container class="bv-example-row d-flex list-prod no-pad">
                <div class="mt-3 row" style="margin: 0 auto">
                  <div
                    v-for="(product, index) in products_bread"
                    :key="index"
                    class="col-2 mb-3 card-home"
                    style="padding-left: 0px; padding-right: 0px"
                  >
                    <CardMain-Homepage img-height="280" img-width="280" :product="product"></CardMain-Homepage>
                  </div>
                </div>
              </b-container>
            </b-tab>
            <b-tab class="tab-prod-item" title="Meat">
              <b-container class="bv-example-row d-flex list-prod no-pad">
                <div class="mt-3 row" style="margin: 0 auto">
                  <div
                    v-for="(product, index) in products_meat"
                    :key="index"
                    class="col-2 mb-3 card-home"
                    style="padding-left: 0px; padding-right: 0px"
                  >
                    <CardMain-Homepage img-height="280px" img-width="280px" :product="product"></CardMain-Homepage>
                  </div>
                </div>
              </b-container>
            </b-tab>
            
          </b-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      rangeValue: 20,
      categories: [
        {
          name: 'Bread',
          count: 2,
          subCategories: [],
        },
        {
          name: 'Fruits',
          count: 10,
          subCategories: [
            {
              name: 'Fresh Nuts',
              count: 1,
            },
            {
              name: 'Millk Cream',
              count: 0,
            },
          ],
        },
        {
          name: 'Meat',
          count: 16,
          subCategories: [],
        },
        {
          name: 'Uncategorized',
          count: 37,
          subCategories: [],
        },
        {
          name: 'Vegetables',
          count: 14,
          subCategories: [],
        },
      ],
      products_flash_sale: [
        {
          name: 'Kale Brunch',
          id: 18,
          price: '782.92',
          rating: 3,
          sale: '',
        },
        {
          name: 'Sweetcorn 4 Pack',
          id: 1,
          price: '220.20',
          rating: 4,
          sale: '',
        },
        {
          name: 'Mixed Chillies150g',
          id: 2,
          price: '546.04',
          rating: 4,
          sale: '-25%',
        },
        {
          name: 'Beef Potjiekos Per kg',
          id: 3,
          price: '535.40',
          rating: 3,
          sale: '',
        },
        {
          name: 'Wrapped Red Cabbage',
          id: 4,
          price: '500.91',
          rating: 4,
          sale: '',
        },
        {
          name: 'Farmer’s Choice',
          id: 17,
          price: '725.47',
          rating: 3,
          sale: '',
        },
        {
          name: 'Packham’s Triumph',
          id: 6,
          price: '323.00',
          rating: 4,
          sale: '-27%',
        },
        {
          name: 'Frozen Angelfish Per kg',
          id: 7,
          price: '647.32',
          rating: 4,
          sale: '',
        },
        {
          name: 'Steers Tomato 75ml',
          id: 8,
          price: '91.38',
          rating: 3,
          sale: '',
        },
        {
          name: 'Large Queen Pineapple',
          id: 9,
          price: '78.09',
          rating: 3,
          sale: '-48%',
        },
      ],
    }
  },
  computed: {

    products_list() {
      const list = this.products.slice(1, 10)
      return list
    },    
    products_veget() {
      return this.products.filter(item => item.categories.includes('Vegetables'))
    },
    products_bread() {
      return this.products.filter(item => item.categories.includes('Bread'))
    },
    products_fruits() {
      return this.products.filter(item => item.categories.includes('Fruits'))
    },
    products_meat() {
      return this.products.filter(item => item.categories.includes('Meat'))
    },
  },
}
</script>

<style>
/* .tab-prod-item {
  padding: 9px 20px;
  font-weight: 600;
} */
.card-home {
  width: 20% !important;
}

.no-pad {
  padding-left: 62px !important;
  padding-right: 62px !important;
}
</style>
