<template>
  <section class="banner-home">
    <slick
      ref="slickone"
      :options="slickOptions"
      class="slider-slick-home-top flex-view"
    >
      <div class="item">
        <div class="image">
          <img class="img-response" src="~/assets/images/slider-2.png" />
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img class="img-response" src="~/assets/images/slider-2.png" />
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img class="img-response" src="~/assets/images/slider-2.png" />
        </div>
      </div>
    </slick>
  </section>
</template>
<script>
import Slick from 'vue-slick'
export default {
  data() {
    return {
      slickOptions: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    }
  },
  mounted() {
    // $('.slider-slick-home-top').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 300,
    //   slidesToShow: 1,
    //   centerMode: true,
    //   variableWidth: true,
    // })
  },
  components: {
    slick: Slick,
  },
}
</script>
