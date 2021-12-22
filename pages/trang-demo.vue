<template>
  <div>
    <h1>{{ title }}</h1>
    <NuxtLink to="/" no-prefetch>Trang chủ</NuxtLink>
    <div>
      <div id="tu">ndhdfd</div>
</div>

  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
    const element = document.getElementById('tu')
    console.log(111,{element})
}},
  components: {
  },
}
</script>
