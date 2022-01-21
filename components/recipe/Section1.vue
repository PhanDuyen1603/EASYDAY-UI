<template>
  <section class="join-now section-1">
    <div class="container mt-5">
      <div class="center">
        <div class="recipe-cook row mb4">
          <div class="recipe-cook row remove-padding">
            <div class="meterial col-4">
              <img src="~/assets/images/re-2-r.png" class="icon cook-main" />
            </div>

            <div class="working-cook col-8 intro-cook">
              <div class="center">
                <div class="center-cirlce">
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                </div>
              </div>
              <div class="flex-view mt-4 mb-2">
                <div class="color-title title-cook-detail">
                  {{ recipe.name }}
                </div>
                <div class="cart-detail-wrap fix-recipe-btn">
                  <a v-if="loadingButton">
                    <b-spinner
                      style="width: 1.25rem; height: 1.25rem; margin: 0 0.3rem"
                      label="medium Spinner"
                      type="grow"
                    ></b-spinner>
                    <b-spinner
                      style="width: 1.25rem; height: 1.25rem; margin: 0 0.3rem"
                      label="medium Spinner"
                      type="grow"
                    ></b-spinner>
                    <b-spinner
                      style="width: 1.25rem; height: 1.25rem; margin: 0 0.3rem"
                      label="medium Spinner"
                      type="grow"
                    ></b-spinner>
                  </a>
                  <a
                    v-b-modal.my-modal
                    data-quantity="1"
                    class="text-white align-items-center d-flex"
                  >
                    <span>
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 483.1 483.1"
                        style="
                          enable-background: new 0 0 483.1 483.1;
                          width: 22px;
                          margin-right: 10px;
                          fill: white;
                        "
                        xml:space="preserve"
                        class="qodef-svg"
                      >
                        <g>
                          <path
                            d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6
		c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3
		C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z
		 M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1
		c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"
                          />
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </span>
                    Add to cart</a
                  >
                  <b-modal id="my-modal" hide-footer hide-header>
                    <div class="hot-mode login-form">
                      <div class="image-login"></div>
                      <div class="d-flex justify-content-center">
                        <div class="center-cirlce center-top">
                          <div class="item"></div>
                          <div class="item"></div>
                          <div class="item"></div>
                          <div class="item"></div>
                        </div>
                      </div>
                      <div class="title-login">Added to cart!</div>
                      <div class="mt-4">
                        <div class="flex-view margin">
                          <p class="underline center-height mb-1">
                            <img
                              class="icon ic-right meterial-img"
                              src="images/products/image3.png"
                              alt=""
                            />Beef Brisket Per kg
                          </p>
                          <p><span class="count">400</span> gram</p>
                        </div>
                        <div class="flex-view margin">
                          <p class="underline center-height mb-1">
                            <img
                              class="icon ic-right meterial-img"
                              src="images/products/image7.png"
                              alt=""
                            />Frozen Angelfish Per kg
                          </p>
                          <p><span class="count">200</span> gram</p>
                        </div>
                        <div class="flex-view margin">
                          <p class="underline center-height mb-1">
                            <img
                              class="icon ic-right meterial-img"
                              src="images/products/image18.png"
                              alt=""
                            />Freshmark Cut Spinach 250g
                          </p>
                          <p><span class="count">250</span> gram</p>
                        </div>
                        <div class="flex-view margin">
                          <p class="underline center-height mb-1">
                            <img
                              class="icon ic-right meterial-img"
                              src="images/products/image14.png"
                              alt=""
                            />White Mushrooms Sliced 250g
                          </p>
                          <p><span class="count">250</span> gram</p>
                        </div>

                        <div class="flex-view margin">
                          <p class="underline center-height mb-1">
                            <img
                              class="icon ic-right meterial-img"
                              src="images/products/image2.png"
                              alt=""
                            />Mixed Chillies Pack 150g
                          </p>

                          <p><span class="count">100</span> gram</p>
                        </div>
                      </div>
                    </div>
                  </b-modal>
                </div>
              </div>

              <div class="d-flex mt-32">
                <div class="measure-cook boder-calo mr-3">
                  <img
                    src="~/assets/images/ideaă.png"
                    class="comment-avatar mb1"
                  />
                  <div class="measure-cook-calo">
                    <span class="bold">200</span> <br />Calo
                  </div>
                </div>
                <div class="measure-cook boder-work mr-3" style="padding: 0px">
                  <img
                    src="~/assets/images/ic11.png"
                    class="comment-avatar mb1"
                  />
                  <div class="measure-cook-calo work">
                    <span class="bold work">Fried</span> <br />Cooking
                  </div>
                </div>
                <div class="measure-cook boder-servings mr-3">
                  <img
                    src="~/assets/images/idea2.png"
                    class="comment-avatar mb1"
                  />
                  <div class="measure-cook-calo servings">
                    <span class="bold servings">4</span> <br />Servings
                  </div>
                </div>
                <div class="measure-cook boder-times-cook mr-3">
                  <img
                    src="~/assets/images/idea3.png"
                    class="comment-avatar mb1"
                  />
                  <div class="measure-cook-calo times-cook">
                    <span class="bold times-cook">30</span> <br />Mins
                  </div>
                </div>
              </div>
              <div class="content color-title left mt-4 text-overflow">
                This is an easy dish to make, I make it in my free time, while
                doing it while playing. Guys who follow my channel this is an
                easy dish to make, I make in my free time, work and play....
                This is an easy dish to make, I make in my free time, work and
                play at the same time. You guys follow my channel this is an
                easy dish to make, I make in my free time, work and play....This
                is an easy dish to make, I make in my free time, work and
                play... .
              </div>

               <div
                class="text-end
                  text-custom
                  underline
                  color-highlight
                  cursor-pointer
                  mt-3
                  text-start
                "
              >
                See more
              </div>

              <div
                class="
                  text-custom
                  underline
                  color-highlight
                  cursor-pointer
                  mt-3
                  text-start
                "
              >
                Quote:<a
                  class="text-fit ml-2"
                  style="font-weight: 500"
                  href="https://www.irishexaminer.com/recipes/?c-recipeid=5492"
                  >Crab salad - a panacea for the body delicious</a
                >
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      default: () => ({
        name: 'Steamed Crab Salad',
        id: 0,
        price: '656.13',
        rating: 4,
        sale: '',
        categories: ['Vegetables'],
        slug: 'wrapped-cabbage',
      }),
    },
  },

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

      loadingButton: false,
    }
  },
  methods: {
    async addToCart(product) {
      this.loadingButton = true
      await this.$store.dispatch('modules/cart/addProductToCart', { product })
      this.loadingButton = false
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.add-to-cart-wrap {
  align-items: center;
  margin-top: 20px;
  text-align: center;
  a {
    text-align: center;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6em;
    background-color: transparent;
    color: #656766;
    transition: all ease-in-out 0.3s;
    border: 1px solid;
    border-color: #e4e4e4;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 24px;
    cursor: pointer;
    line-height: 1.4;
  }
}

.modal-header {
  display: none !important;
}

.text-custom {
  font-size: 16px;
}

.text-fit {
  color: #3c6640 !important;
}

.ml-2 {
  margin-left: 10px;
}

.add-to-cart-wrap:hover a {
  background: #5c9863;
  color: white;
}

.add-to-cart-wrap:hover .qodef-svg {
  fill: #fff;
}

.cart-detail-wrap {
  padding: 0 25px;
  line-height: 38px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  background-color: #5c9963;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  border-radius: 24px;
}

.fix-recipe-btn {
  cursor: pointer;
}

.modal-header .close {
  display: none;
}

.margin {
  margin: 20px 20px;
}

.modal-header{
  display: none !important;
}
</style>
