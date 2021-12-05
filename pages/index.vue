<template>
  <div class="main-home">
    <Banner></Banner>
    <Section1></Section1>
    <Section2></Section2>
    <Section5></Section5>
    <Section6></Section6>
    <Section7></Section7>
  </div>
</template>

<script>
import Banner from '~/components/home/Banner.vue'
import Section1 from '~/components/home/Section1.vue'
import Section2 from '~/components/home/Section2.vue'
import Section5 from '~/components/home/Section5.vue'
import Section6 from '~/components/home/Section6.vue'
import Section7 from '~/components/home/Section7.vue'
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
    Banner,
    Section1,
    Section2,
    Section5,
    Section6,
    Section7,
  },
}
</script>
