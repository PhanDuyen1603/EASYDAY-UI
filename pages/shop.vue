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
            <template #card-title>FEATURED PRODUCTS</template>
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
          <div class="organey-sorting section-header justify-content-between">
            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-light btn-circle active">
                <i class="fas fa-list"></i>
              </button>
              <button type="button" class="btn btn-light btn-circle">
                <i class="fas fa-th-large"></i>
              </button>
              <b-dropdown
                toggle-class="rounded-lg "
                text="Outline Danger"
                variant="ligth"
                class="m-2 btn-sort"
              >
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="">
              <span>Showing 1–16 of 40 results</span>
            </div>
          </div>
          <div class="mt-5 row">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="col-3"
            >
              <CardMain :product="product"></CardMain>
            </div>
          </div>
          <div
            class="organey-sorting mt-4 d-flex justify-content-center"
            style="width: 100%"
          >
            <nuxt-link to="" class="page-numbers current">1</nuxt-link>
            <nuxt-link to="" class="page-numbers">2</nuxt-link>
            <nuxt-link to="" class="page-numbers">3</nuxt-link>
            <nuxt-link to="" class="page-numbers next-page">></nuxt-link>
          </div>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
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
      products: [
        {
          name: 'Wrapped Cabbage',
          id: 0,
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
          name: 'Mixed Chillies Pack 150g',
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
          name: 'Farmer’s Choice Chicken Wings',
          id: 5,
          price: '725.47',
          rating: 3,
          sale: '',
        },
        {
          name: 'Packham’s Triumph Pears Bag',
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
          name: 'Steers Tomato Sauce 375ml',
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
        {
          name: 'Peppered Mackerel Fillets 200g',
          id: 10,
          price: '14.84',
          rating: 4,
          sale: '',
        },
        {
          name: 'Cut Queen Pumpkin Per kg',
          id: 11,
          price: '910.53',
          rating: 3,
          sale: '',
        },
        {
          name: 'Smokies Vienna’s Per kg',
          id: 12,
          price: '101.64',
          rating: 3,
          sale: '',
        },
        {
          name: 'Papaya Single',
          id: 13,
          price: '546.04',
          rating: 4,
          sale: '-27%',
        },
        {
          name: 'White Mushrooms Sliced 250g',
          id: 14,
          price: '161.44',
          rating: 4,
          sale: '',
        },
        {
          name: 'Beef Club & T-Bone Per kg',
          id: 15,
          price: '814.96',
          rating: 4,
          sale: '',
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
  padding: 0.75rem 2rem;
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
</style>
