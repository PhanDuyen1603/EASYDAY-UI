<template>
  <div class="card card-horizontal mb-3" style="max-width: 540px">
    <div class="row g-0 align-items-center">
      <div class="col-3 card-horizontal-img" style="width: 89px">
        <img height="100" width="100" src="~/assets/images/small1.jpeg" alt="">
      </div>
      <div class="col-8">
        <div class="card-body">
          <b-link>
            <h5 class="card-title">Thinly Sliced Beef Brisket</h5>
          </b-link>
          <div class="d-flex justify-content-between align-items-center">
            <div class="ratings">
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
          <p class="card-text price">£985.97</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="scss" scoped>
.card-horizontal {
  border: none;
  .card-horizontal-img {
    border-radius: 1rem;
    overflow: hidden;
  }
  h5 {
    font-size: 1rem;
  }
  .price {
    font-size: 14px;
    font-weight: 700;
    color: #5c9963;
    margin-top: 10px;
  }
 .card-body {
   padding-left: 1.5rem;
 }
}
.fa-star {
  color: #e4e4e4;
}
.ratings {
  .fa-star {
    &.rating-color {
      color: #f5b400;
    }
    font-size: 13px;
  }
}
</style>
