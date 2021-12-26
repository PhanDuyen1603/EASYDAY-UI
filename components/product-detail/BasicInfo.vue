<template>
  <div class="summary entry-summary">
    <h1 class="product_title entry-title">{{ product.name }}</h1>
    <div class="woocommerce-product-rating">
      <div class="star-rating" role="img" aria-label="Rated 3.75 out of 5">
        <span style="width: 75%"
          >Rated <strong class="rating">{{ product.rating }}</strong> out of 5 based on
          <span class="rating">4</span> customer ratings</span
        >
      </div>
      <a href="#reviews" class="woocommerce-review-link" rel="nofollow"
        >(<span class="count">5</span> customer reviews)</a
      >
    </div>
    <p v-if="product.sale" class="price">
      <del aria-hidden="true"
        ><span class="woocommerce-Price-amount amount"
          ><bdi
            ><span class="woocommerce-Price-currencySymbol">£</span>{{ product.price }}</bdi
          ></span
        ></del
      >
      <ins
        ><span class="woocommerce-Price-amount amount"
          ><bdi
            ><span class="woocommerce-Price-currencySymbol">£</span>{{ getPromo(product.price, product.sale) }}</bdi
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
    <p class="stock available-on-backorder">Available on backorder</p>
    <form
      class="cart"
      action="https://demo.leebrosus.com/organey/product/large-queen-pineapple/"
      method="post"
      enctype="multipart/form-data"
    >
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
      <button
        type="submit"
        name="add-to-cart"
        value="87"
        class="single_add_to_cart_button button alt"
      >
        Add to cart
      </button>
    </form>
    <button class="woosw-btn woosw-btn-87" data-id="87">Add to wishlist</button>
    <button class="woosw-btn woosc-btn-87" data-id="87">Compare</button>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#0d6efd"
        class="bi bi-facebook"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#0d6efd"
        class="bi bi-twitter"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#0d6efd"
        class="bi bi-linkedin"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#dc3545"
        class="bi bi-pinterest"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#dc3545"
        class="bi bi-envelope"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default:() => ({
        "name": "Wrapped Cabbage",
        "id": 0,
        "price": "782.92",
        "rating": 3,
        "sale": "",
        "categories": ["Vegetables"],
        "slug": "wrapped-cabbage",
      })
    }
  },
  methods: {
    getPromo(price, promo) {
      const promoPercent = parseInt(promo.replace(/[\D]/, ''))
      const promoPrice = price - (price * promoPercent / 100)
      return Math.round(promoPrice * 100) / 100
    },
  }
}
</script>