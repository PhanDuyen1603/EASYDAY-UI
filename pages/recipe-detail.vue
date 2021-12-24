<template>
  <div class="">
    <breadcrumb></breadcrumb>
    <Section1></Section1>
    <Section2></Section2>
    <div class="bg-shadow-while">
      <Section3></Section3>
      <Section4></Section4>
    </div>
  </div>
</template>

<script>
import Section1 from '~/components/recipe/Section1.vue'
import Section2 from '~/components/recipe/Section2.vue'
import Section4 from '~/components/recipe/Section4.vue'
export default {
  data() {
    return {
      title: 'Trang Chủ',
    }
  },
  mounted() {},

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
    Section1,
    Section2,
    Section4,
  },
}
</script>

