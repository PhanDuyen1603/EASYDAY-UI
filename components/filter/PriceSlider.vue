<template>
  <div class="price_slider">
    <div class="progess">
      <vue-slider v-model="rangePrice"></vue-slider>
    </div>
    <div class="price_slider_amount d-flex justify-content-between" data-step="10">
      <div class="price_label" style="">
        Price: <span class="from">£{{ min }}</span>
        —- <span class="to">£{{ max }}</span>
      </div>
      <b-link class="price_slider_filter" @click="applyFilters()">Filter</b-link>
    </div>
  </div>
</template>

<script>
  // import component
  import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
  import 'vue-slider-component/dist-css/vue-slider-component.css'

  // import theme
  import 'vue-slider-component/theme/default.css'
  export default {
    components: {
      VueSlider,
    },
    props: {
      minPrice: {
        type: Number,
        default: 0,
      },
      maxPrice: {
        type: Number,
        default: 100,
      },
    },
    data() {
      return {
        rangePrice: [0, 100],
        min: this.minPrice,
        max: this.maxPrice
      }
    },
    watch: {
      rangePrice(value) {
        this.min = (this.maxPrice - this.minPrice) * value[0] / 100
        this.max = (this.maxPrice - this.minPrice) * value[1] / 100
      }
    },
    methods: {
      applyFilters() {
        this.$emit('apply-filter', {
          min: this.min,
          max: this.max
        })
      },
    },
  }

</script>

<style lang="scss" scoped>
  .price_slider>div {
    margin: .75rem auto;
  }

  .price_label {
    font-size: $text-sm;

    .from,
    .to {
      font-weight: 800;
      font-size: $text-base;
      color: $primary-color;
    }
  }

  .price_slider_filter {
    font-size: $text-base;
    color: #000;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 1px solid #000;
  }
}
.price_slider_filter {
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  padding: 0;
  order: 3;
  margin-left: auto;
  border-bottom: 1px solid;
  line-height: 1;
  color: #2f3e30;
  text-transform: uppercase;
  border-radius: 0;
}
</style>
<style lang="scss">
  .vue-slider-process {
    background-color: $primary-color;
    height: 5px !important;
  }

  .vue-slider-dot-tooltip-inner {
    border-color: $secondary-color;
    background-color: $secondary-color;
  }

</style>
