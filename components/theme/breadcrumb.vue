<template>
  <div class="bread-crumb-wrapper">
    <b-container>
      <h1 class="cur-page">Shop</h1>
      <b-breadcrumb class="">
        <b-breadcrumb-item href="#home">
          Home
        </b-breadcrumb-item>
        <b-breadcrumb-item active>Shop</b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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