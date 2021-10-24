<template>
  <section class="join-now section-2">
    <div>component demo</div>
  </section>
</template>
<script>
// import Slick from 'vue-slick';
export default {
  data() {
    return {
      joinslickOptions: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3.5,
        // centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    }
  },
   components: {
    // slick: Slick,
  },
}
</script>
