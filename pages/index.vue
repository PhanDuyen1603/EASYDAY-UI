<template>
  <div class="main-home">
    <Banner></Banner>
    <Section1></Section1>
    <Section2></Section2>
  </div>
</template>

<script>
import Banner from "~/components/home/Banner.vue";
import Section1 from "~/components/home/Section1.vue";
import Section2 from "~/components/home/Section2.vue";
export default {
  data() {
    return {
      title: 'Trang Chủ',
    }
  },
  mounted() {
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
    Banner,
    Section1,
    Section2,
  }
}
</script>
