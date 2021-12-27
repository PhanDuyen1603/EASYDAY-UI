<template>
  <div class="content">
    <div v-if="product" class="product-detail">

      <div class="wrap-info">
        <Slide :active-img="`/images/products/image${product.id}.png`"></Slide>
        <BasicInfo :product="product"></BasicInfo>
      </div>
      <InfoTab></InfoTab>
      <SimilarProduct></SimilarProduct>
    </div>
  </div>
</template>

<script>
  import BasicInfo from '~/components/product-detail/BasicInfo.vue'
  import InfoTab from '~/components/product-detail/InfoTab.vue'
  import Slide from '~/components/product-detail/Slide.vue'
  import SimilarProduct from '~/components/product-detail/SimilarProduct.vue'
  export default {
    data() {
      return {
        title: 'Product detail',
        product: null
      }
    },
    async fetch() {
      const product = await this.$store.dispatch('modules/products/getProduct', {
        slug: this.$route.params.slug
      })
      this.product = product
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description',
          },
        ],
      }
    },

    components: {
      BasicInfo,
      InfoTab,
      Slide,
      SimilarProduct,
    },
  }

</script>
