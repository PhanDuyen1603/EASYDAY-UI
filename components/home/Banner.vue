<template>
  <section class="banner-home" style="height: 600px">
    <slick
      ref="slickone"
      :options="slickOptions"
      class="slider-slick-home-top flex-view"
    >
      <div class="item">
        <div class="image">
          <img class="img-response" src="~/assets/images/rev_home1_1.jpeg" />
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img class="img-response" src="~/assets/images/rev_home8_2.jpeg" />
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img class="img-response" src="~/assets/images/rev_home1_1.jpeg" />
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
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 6000,
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
