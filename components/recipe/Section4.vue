<template>
  <section>
    <div class="container">
      <div class="">
        <h2 data-v-538c8a20="" class="container recom-food-more" style="color: #4f4f4f !important;">You may be interested in…</h2>
        <div class="content-items dish">
          <slick
            ref="slick"
            :options="v2slickOptions"
            class="content-blog-items slick-blog-slider-3 items-4"
          >
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                    height="300" width="300"
                    src="~/assets/images/re-8-r.png"
                    class=""
                    alt="image-31"
                /></a>
                <div class="recommend-food-content"><div class="title-idea">
Yangzhou fried rice</div> </div>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
             
            </div>
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                    height="300" width="300"
                    src="~/assets/images/re-7-r.png"
                    class=""
                    alt="image-31"
                /></a>
                <div class="recommend-food-content"><div class=" title-idea">
Roasted Squid</div> </div>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
              
            </div>
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                  
                    height="300" width="300"
                    src="~/assets/images/re-1-r.png"
                    class=""
                    alt="image-31"
                /></a>
                <div class="recommend-food-content"><div class=" title-idea">
Minced meat wonton</div> </div>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
              
            </div>
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
               
                    height="300" width="300"
                    src="~/assets/images/re-3-r.png"
                    class=""
                    alt="image-31"
                /></a>
                <div class="recommend-food-content"><div class="title-idea">
Fried dumpling dish</div> </div>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
             
            </div>
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                
                    height="300" width="300"
                    src="~/assets/images/re-4-r.png"
                    class=""
                    alt="image-31"
                /></a>
                <div class="recommend-food-content"><div class="title-idea">
Fried Crayfish in camy</div> </div>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
              
            </div>
            <div class="item-content">
              <div class="image-post">
                <a href="/">
                  <img
                    height="300" width="300"
                    src="~/assets/images/re-5-r.png"
                    class=""
                    alt="image-31"
                /></a>
                <div class="recommend-food-content"><div class="title-idea">Humus salad</div> </div>
                <div class="icon-right">
                  <div class="icon-1"></div>
                  <div class="icon-2"></div>
                </div>
              </div>
              
            </div>
          </slick>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Slick from 'vue-slick'

export default {
  data() {
    return {
      v2slickOptions: {
        dots: false,
        infinite: true,
        // speed: 300,
        slidesToShow: 4,
        // centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
      items4: [
        { name: 'a' },
        { name: 'b' },
        { name: 'b' },
        { name: 'b' },
        { name: 'b' },
      ],
    }
  },
  mounted() {},
  components: {
    slick: Slick,
  },
}
</script>
