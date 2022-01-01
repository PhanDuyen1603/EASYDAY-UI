<template>
  <div class="content">
    <div class="product-detail">

        {{ product }}
      <div class="wrap-info">
        <Slide></Slide>
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
  scrollToTop: true,
  data() {
    return {
      title: 'Product detail',
    }
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
  computed: {
      product() {
          return this.$store.dispatch('modules/products/getProduct', {
              slug: this.$route.params.slug
          })
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
