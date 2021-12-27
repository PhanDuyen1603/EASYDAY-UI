<template>
  <div class="wrap__body">
    <TheHeader id="desktop_header" />
    <TheStickyHeader id="mobile_header" />
    <b-modal id="bv-modal-example" class="form-radius" hide-footer hide-header>
      <login></login>
    </b-modal>
    <b-modal id="bv-modal-example2" hide-footer hide-header>
      <signup></signup>
    </b-modal>
    <main class="main">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
  export default {
    mounted() {
      // eslint-disable-next-line nuxt/no-env-in-hooks
      if (process.client) {
        // eslint-disable-next-line no-undef 
        const jQuery = $
        jQuery(window).scroll(function () {
          if (jQuery(this).scrollTop() > 1) {
            jQuery('#mobile_header').addClass("sticky-header");
          } else {
            jQuery('#mobile_header').removeClass("sticky-header");
          }
        });
      }
    },
  }

</script>

<style lang="scss">
#mobile_header {
  display: none;
  margin-top: 0;
  padding: 1rem 2rem;
  &.sticky-header {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    box-shadow: 0 1px 20px 0 rgb(171 179 194 / 40%);
  }
  .dropdown span, .dropdown2 span, .dropdown3 span {
    color: #000;
  }
}
</style>
