<template>
  <div class="content">
    <div class="product-detail">
      <div class="wrap-info">
        <Slide></Slide>
        <BasicInfo></BasicInfo>
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
  components: {
    BasicInfo,
    InfoTab,
    Slide,
    SimilarProduct,
  },
}
</script>
