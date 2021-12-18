<template>
  <div class="card card-filter">
    <div class="card-header card-filter-header">
      <slot name="card-title"></slot>
    </div>
    <div class="card-body card-filter-body">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-filter {
  margin-bottom: 30px;
  border: none;
  .card-filter-header {
    padding: 15px 17px;
    background: $primary-color;
    color: #fff;
    border-radius: 12px 12px 0 0;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .card-filter-body {
    border: 2px solid var(--bs-gray-400);
    border-radius: 0 0 12px 12px;
  }
}
</style>

<style lang="scss">
.card-filter .card-body {
  ul li {
    border: none;
    a {
      font-size: 0.9rem;
      font-weight: 600;
      color: $text-color;
      .cat-count {
        background: $border-color;
        font-size: 0.8rem;
        font-weight: 600;
        border-radius: 11px;
        min-width: 21px;
        text-align: center;
        padding: 2px 1px;
      }
    }
    &:hover {
      a {
        color: $primary-color;
        .cat-count {
          background: $primary-color;
          color: #fff;
        }
      }
    }
  }
}
</style>