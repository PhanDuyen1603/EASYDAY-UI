<template>
  <section class="banner-home" style="height: 600px">
    <slick
      ref="slickone"
      :options="slickOptions"
      class="slider-slick-home-top flex-view"
    >
      <div class="item">
        <div class="image" style="position: relative">
          <img class="img-response" src="~/assets/images/banner1.2.png" />
          <div class="title-sub-banners">
            <div class="title-sub-banner">Get Upto 30% Off this Product!</div>
            <div class="title-banner">
              Fisher & Paykel <br />
              Kitchen Packages
            </div>
            <div class="shop-now-wrap">
              <div class="shop-now-banner">Shop now</div>
            </div>
          </div>
        </div>
      </div>
      <div class="item" style="position: relative">
        <div class="image">
          <img class="img-response" src="~/assets/images/banner2.3.png" />
          <div class="title-sub-banners">
            <div class="title-sub-banner title-sub-banner-2">Farm Market</div>
            <div class="title-banner-2">Happy Summer Combo Super Discount</div>
            <div class="title-sub-banner title-sub-banner-3">Sale 30% Off</div>
            <div class="shop-now-wrap" style="top: 502px; left: 282px">
              <div class="shop-now-banner">Shop now</div>
            </div>
          </div>
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

<style>
.title-sub-banner {
  z-index: 3;
  text-transform: uppercase;
  height: auto;
  width: auto;
  color: rgb(92, 153, 99);
  text-decoration: none;
  white-space: normal;
  min-height: 0px;
  min-width: 0px;
  max-height: none;
  max-width: none;
  text-align: left;
  line-height: 36px;
  letter-spacing: 4px;
  font-weight: 500;
  font-size: 16px;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  position: absolute;
  top: 132px;
}

.title-banner {
  position: absolute;
  top: 187px;
  z-index: 4;
  display: inline-block;
  height: auto;
  color: rgb(20, 21, 20);
  text-decoration: none;
  white-space: normal;
  width: 561px;
  min-height: 0px;
  min-width: 0px;
  max-height: none;
  max-width: none;
  text-align: left;
  line-height: 60px;
  letter-spacing: 0px;
  font-weight: bolder;
  font-size: 52px;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  visibility: visible;
}

.title-banner-2 {
  z-index: 5;
  display: inline-block;
  height: auto;
  width: auto;
  color: rgb(92, 153, 99);
  text-decoration: none;
  white-space: normal;
  min-height: 0px;
  min-width: 0px;
  max-height: none;
  max-width: none;
  text-align: center;
  line-height: 74px;
  letter-spacing: 0px;
  font-weight: bolder;
  font-size: 54px;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  visibility: visible;
  max-width: 630px;
  left: 52px;
  top: 190px;
  position: absolute;
}

.title-sub-banner-2 {
  margin-left: 194px !important;
}

.title-sub-banner-3 {
  top: 427px !important;
  line-height: 36px !important;
  letter-spacing: 0px;
  font-weight: 500;
  font-size: 30px !important;
  left: 274px !important ;
  text-transform: capitalize;
}

.shop-now-wrap {
  display: inline-block;
  width: 100%;
  transform-origin: 50% 50%;
  overflow: hidden;
  transform: translate(0px, 0px);
  position: absolute;
  top: 333px;
}

.shop-now-banner {
  cursor: pointer;
  z-index: 6;
  background-color: rgb(92, 153, 99);
  display: inline-block;
  height: auto;
  width: auto;
  color: rgb(255, 255, 255);
  text-decoration: none;
  white-space: normal;
  min-height: 0px;
  min-width: 0px;
  max-height: none;
  max-width: none;
  text-align: left;
  line-height: 56px;
  letter-spacing: 0px;
  font-weight: 500;
  font-size: 14px;
  padding-left: 45px;
  border-radius: 30px;
  padding-right: 45px;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  visibility: visible;
  border-width: 0px;
}

.title-sub-banners {
  padding: 90px;
}
</style>
