<template>
  <div>
    <h1>{{ title }}</h1>
    <NuxtLink to="/" no-prefetch>Trang chủ</NuxtLink>
    <div>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Trang demo nè',
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
}
</script>
