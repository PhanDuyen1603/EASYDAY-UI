<template>
  <div class="bread-crumb-wrapper">
    <b-container>
      <h1 class="cur-page">
        <slot>
          {{ crumbs[0] }}
        </slot>
      </h1>
      <b-breadcrumb v-if="crumbs" class="">
        <b-breadcrumb-item href="/">
          Home
        </b-breadcrumb-item>
        <b-breadcrumb-item v-for="(crumb, index) in crumbs" :key="index" :href="`/${crumbs[0]}`">{{ crumb }}</b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',

    }
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      return params.filter(param => param.length > 0)
    }
  },
}
</script>

<style lang="scss" scoped>
.bread-crumb-wrapper {
  padding: 80px 60px;
  background-image: url('/images/breadcrumb.jpg');
  background-position: center center;
  background-size: cover;
  .cur-page {
    font-size: 40px;
    font-weight: 900;
    color: #2F3E30;
    margin-bottom: 15px;
    line-height: 1.1;
  }
  .breadcrumb-item:not(:first-child)::before {
    content: '>'
  }
  .breadcrumb-item  {
    a {
      color: #2F3E30;
      font-weight: 500;
    }
  }
}
</style>