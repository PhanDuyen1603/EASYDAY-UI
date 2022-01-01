<template>
  <div class="summary entry-summary">
    <h1 class="product_title entry-title">{{ product.name }}</h1>
    <div class="woocommerce-product-rating d-flex align-items-center">
      <!-- <div class="star-rating" role="img" aria-label="Rated 3.75 out of 5">
        <span style="width: 75%"
          >Rated <strong class="rating">{{ product.rating }}</strong> out of 5 based on
          <span class="rating">4</span> customer ratings</span
        >
      </div> -->
      <p class="stars mr-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#f5b400"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#CCCCCC"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#CCCCCC"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#CCCCCC"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#CCCCCC"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
        </span>
      </p>

      <a href="#reviews" class="woocommerce-review-link" rel="nofollow"
        >(<span class="count">5</span> customer reviews)</a
      >
    </div>

    <p class="price">
      <ins
        ><span class="woocommerce-Price-amount amount"
          ><bdi class="real-prices"
            ><span class="woocommerce-Price-currencySymbol real-price">£</span
            >100.13</bdi
          ></span
        ></ins
      >
    </p>
    <p v-if="product.sale" class="price">
      <del aria-hidden="true"
        ><span class="woocommerce-Price-amount amount"
          ><bdi
            ><span class="woocommerce-Price-currencySymbol">£</span
            >{{ product.price }}</bdi
          ></span
        ></del
      >
      <ins
        ><span class="woocommerce-Price-amount amount"
          ><bdi
            ><span class="woocommerce-Price-currencySymbol">£</span
            >{{ getPromo(product.price, product.sale) }}</bdi
          ></span
        ></ins
      >
    </p>
    <div class="woocommerce-product-details__short-description">
      <ul>
        <li>Free from the confines of wires and chords</li>
        <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
        <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
      </ul>
    </div>
    <form class="cart" action="" method="post" enctype="multipart/form-data">
      <div class="quantity buttons_added">
        <button type="button" class="minus">-</button>
        <label class="screen-reader-text" for="quantity_61765142bdcce"
          >Large Queen Pineapple quantity</label
        >
        <input
          type="number"
          id="quantity_61765142bdcce"
          class="input-text qty text"
          step="1"
          min="1"
          max=""
          name="quantity"
          value="1"
          title="Qty"
          size="4"
          placeholder=""
          inputmode="numeric"
        /><button type="button" class="plus">+</button>
      </div>
      <div class="add-to-cart-detail-wrap">
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
        <a v-else @click="addToCart(product)" data-quantity="1" class="">
          <span
            ><svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 500 500"
              enable-background="new 0 0 500 500"
              xml:space="preserve"
              class="qodef-svg"
              style="width: 22px; margin-right: 10px; fill: white"
            >
              <g>
                <path
                  d="M448.2,292.3c-5.6-0.6-10.9,3.3-11.6,9l-21.8,168.6c-0.6,5.3-5,9.3-10.3,9.3h-310c-5.3,0-9.8-4-10.4-9.6
        L62.3,302.1c-0.7-5.7-6-9.7-11.6-9c-5.7,0.7-9.7,5.9-9,11.6l21.7,167.3c1.7,15.9,15,27.9,31,27.9h310c16,0,29.3-12,31-27.7
        L457.2,304C457.9,298.3,453.9,293.1,448.2,292.3z"
                ></path>
                <path
                  d="M166.3,447.8V323.4c0-5.7-4.6-10.4-10.4-10.4c-5.7,0-10.4,4.6-10.4,10.4v124.4c0,5.7,4.6,10.4,10.4,10.4
        C161.6,458.2,166.3,453.6,166.3,447.8z"
                ></path>
                <path
                  d="M353.3,447.8V323.4c0-5.7-4.6-10.4-10.4-10.4c-5.7,0-10.4,4.6-10.4,10.4v124.4c0,5.7,4.6,10.4,10.4,10.4
        C348.6,458.2,353.3,453.6,353.3,447.8z"
                ></path>
                <path
                  d="M290.9,447.8V323.4c0-5.7-4.6-10.4-10.4-10.4s-10.4,4.6-10.4,10.4v124.4c0,5.7,4.6,10.4,10.4,10.4
        S290.9,453.6,290.9,447.8z"
                ></path>
                <path
                  d="M228.6,447.8V323.4c0-5.7-4.6-10.4-10.4-10.4c-5.7,0-10.4,4.6-10.4,10.4v124.4c0,5.7,4.6,10.4,10.4,10.4
        C224,458.2,228.6,453.6,228.6,447.8z"
                ></path>
                <path
                  d="M468.4,188.4h-43.6L278.7,46.1c1.8-3.9,2.8-8.1,2.8-12.7c0-16.8-13.8-30.5-30.7-30.5s-30.7,13.7-30.7,30.5
        c0,4.5,1,8.8,2.8,12.7L76.9,188.4H32.1C15,188.4,1,202.4,1,219.5v20.8c0,17.2,14,31.2,31.2,31.2h436.3c17.2,0,31.2-14,31.2-31.2
        v-20.8C499.6,202.4,485.6,188.4,468.4,188.4z M250.9,23.7c5.5,0,9.9,4.4,9.9,9.8c0,2.6-1.1,5-2.8,6.8c0,0,0,0-0.1,0.1
        c0,0,0,0.1-0.1,0.1c-1.8,1.8-4.2,2.8-7,2.8c-2.7,0-5.2-1.1-7-2.8c0,0,0-0.1-0.1-0.1c0,0,0,0-0.1-0.1c-1.7-1.8-2.8-4.1-2.8-6.8
        C241,28,245.4,23.7,250.9,23.7z M237.5,60.9c4,1.9,8.5,3.1,13.3,3.1c4.8,0,9.3-1.1,13.3-3.1L395,188.4H106.7L237.5,60.9z
         M478.8,240.3c0,5.7-4.7,10.4-10.4,10.4H32.1c-5.7,0-10.4-4.7-10.4-10.4v-20.8c0-5.7,4.7-10.4,10.4-10.4h436.3
        c5.7,0,10.4,4.7,10.4,10.4V240.3z"
                ></path>
              </g></svg
          ></span>
          Add to cart</a
        >
      </div>
    </form>
    <div class="organey-single-product-extra">
      <p>
        <span
          style="
            color: #3d3e3d;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 15px;
            display: block;
          "
          >Guarantee Safe Checkout</span
        ><img
          loading="lazy"
          style="padding-bottom: 5px"
          class="alignnone size-medium wp-image-6252 lazyloaded"
          src="https://demothemedh.b-cdn.net/organey/wp-content/uploads/2021/08/credit-300x17.jpg"
          alt=""
          width="300"
          height="17"
          sizes="(max-width: 300px) 100vw, 300px"
          data-ll-status="loaded"
        /><noscript
          ><img
            loading="lazy"
            style="padding-bottom: 5px"
            class="alignnone size-medium wp-image-6252"
            src="https://demothemedh.b-cdn.net/organey/wp-content/uploads/2021/08/credit-300x17.jpg"
            sizes="(max-width: 300px) 100vw, 300px"
            alt=""
            width="300"
            height="17"
        /></noscript>
      </p>
    </div>
    <div class="product_meta">
      <span class="sku_wrapper"
        >SKU: <span class="sku">synergistic-iron-computer-61818842</span></span
      >
      <span class="posted_in"
        >Categories:
        <a
          href="https://demo.leebrosus.com/organey/product-category/fruits/"
          rel="tag"
          >Fruits</a
        >,
        <a
          href="https://demo.leebrosus.com/organey/product-category/uncategorized/"
          rel="tag"
          >Uncategorized</a
        ></span
      >
    </div>
    <div class="organey-social-share">
      <a class="social-facebook" target="_blank" title="Share on facebook">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-square"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-inline--fa fa-facebook-square fa-w-14 fa-2x"
        >
          <path
            fill="currentColor"
            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
            class=""
          ></path>
        </svg>
      </a>
      <a class="social-twitter" target="_blank" title="Share on Twitter">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="svg-inline--fa fa-twitter fa-w-16 fa-2x"
          style=""
        >
          <path
            fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            class=""
            style="fill: white"
          ></path>
        </svg>
      </a>
      <a class="social-linkedin" target="_blank" title="Share on LinkedIn">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="instagram"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-inline--fa fa-instagram fa-w-14 fa-2x"
        >
          <path
            fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            class=""
            style="fill: white"
          ></path>
        </svg>
      </a>
      <a class="social-pinterest" target="_blank" title="Share on Pinterest">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="pinterest-p"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          class="svg-inline--fa fa-pinterest-p fa-w-12 fa-2x"
        >
          <path
            fill="currentColor"
            d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
            class=""
            style="fill: white"
          ></path>
        </svg>
      </a>
      <a class="social-envelope" title="Email to a Friend">
        <i class="organey-icon-envelope"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({
        name: 'Kiwi Fruit Single',
        id: 0,
        price: '100.13',
        rating: 4,
        sale: '',
        categories: ['Vegetables'],
        slug: 'wrapped-cabbage',
      }),
    },
  },

  data() {
    return {
      loadingButton: false,
    }
  },
  methods: {
    getPromo(price, promo) {
      const promoPercent = parseInt(promo.replace(/[\D]/, ''))
      const promoPrice = price - (price * promoPercent) / 100
      return Math.round(promoPrice * 100) / 100
    },
    async addToCart(product) {
      this.loadingButton = true
      await this.$store.dispatch('modules/cart/addProductToCart', { product })
      this.loadingButton = false
    },
  },
}
</script>

<style lang="scss" scoped>
.woocommerce-product-details__short-description {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 35px !important;
  margin: 18px 0px !important;
  ul {
    li {
      font-size: 14px;
      font-weight: 500;
      color: #656766;
      list-style: disc;
    }
  }
}

svg.bi.bi-star-fill {
  width: 12px;
}

.woocommerce-review-link {
  text-transform: capitalize;
  color: #9f9f9f;
  font-weight: 600;
}

.woocommerce-review-link:hover {
  color: #5c9963;
  text-decoration: underline;
}

.add-to-cart-detail-wrap {
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
  cursor: pointer;
}

.add-to-cart-detail-wrap:hover {
  background-color: #528959;
}

.real-price {
  font-size: 24px;
  color: #5c9963;
  font-weight: 600;
  padding-bottom: 30px;
  text-decoration: none !important;
}

.real-prices {
  font-size: 24px;
  text-decoration: none !important;
}

.organey-social-share {
  margin-top: 20px;
  a {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    border-radius: 30px;
    display: inline-block;
    position: relative;
  }
}

.social-facebook {
  background-color: #3b5998;
  .fa-facebook-square {
    width: 13px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.social-twitter {
  background-color: #00aced;

  .fa-twitter {
    width: 13px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.social-linkedin {
  background-color: #007bb6;

  .fa-instagram {
    width: 13px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.social-pinterest {
  background-color: #cb2027;

  .fa-pinterest-p {
    width: 13px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
