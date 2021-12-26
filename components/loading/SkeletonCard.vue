<template>
  <b-skeleton-wrapper :loading="loading">
    <template #loading>
      <b-card class="justify-content-center">
        <b-skeleton no-aspect height="240px"></b-skeleton>
        <div class="d-flex mt-2 justify-content-center">
          <b-skeleton width="50%"></b-skeleton>
        </div>
        <div class="d-flex my-1 justify-content-center">
          <b-skeleton width="70%"></b-skeleton>
        </div>
        <div class="d-flex mt-2 justify-content-center">
          <b-skeleton width="50%"></b-skeleton>
        </div>
        <div class="d-flex mt-4 justify-content-center">
          <b-skeleton height="40px" width="90%"></b-skeleton>
        </div>
      </b-card>
    </template>

    <b-card>
      <slot></slot>
    </b-card>
  </b-skeleton-wrapper>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
</style>