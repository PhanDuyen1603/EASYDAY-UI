<template>
  <div class="product-slide">
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            :src="activeImg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://demothemedh.b-cdn.net/organey/wp-content/uploads/2021/04/pro-7.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://demothemedh.b-cdn.net/organey/wp-content/uploads/2021/04/pro-7.jpg"
            alt="Third slide"
          />
        </div>
      </div>
    </div>
    <ol
      class="flex-control-nav flex-control-thumbs"
      style="padding-right: 35px"
    >
      <li class="" tabindex="0" style="">
        <img
          src="https://demothemedh.b-cdn.net/organey/wp-content/uploads/2021/04/pro-6-200x200.jpg"
          alt="Revslider Organey"
          class=""
          draggable="false"
        />
      </li>
      <li class="" tabindex="-1" style="">
        <img
          src="https://demothemedh.b-cdn.net/organey/wp-content/uploads/2021/04/pro-8-200x200.jpg"
          alt="Revslider Organey"
          draggable="false"
        />
      </li>
      <li class="" tabindex="-1" style="">
        <img
          src="https://demothemedh.b-cdn.net/organey/wp-content/uploads/2021/04/pro-9-200x200.jpg"
          alt="Revslider Organey"
          draggable="false"
        />
      </li>
      <li class="" tabindex="-1" style="">
        <img
          src="https://demothemedh.b-cdn.net/organey/wp-content/uploads/2021/04/pro-7-200x200.jpg"
          alt="Revslider Organey"
          draggable="false"
          class="flex-active"
        />
      </li>
      <li class="" tabindex="-1" style="">
        <img
          src="https://demothemedh.b-cdn.net/organey/wp-content/uploads/2021/04/pro-5-200x200.jpg"
          alt="Revslider Organey"
          draggable="false"
          class=""
        />
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    activeImg: {
      type: String,
      default: '/images/products/image2.png'
    }
  }
}
</script>