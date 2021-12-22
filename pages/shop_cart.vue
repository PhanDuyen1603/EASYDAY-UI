<template>
  <div class="">
    <div class="bread-crumb-wrapper">
      <b-container>
        <h1 class="cur-page">Cart</h1>
        <b-breadcrumb class="">
          <b-breadcrumb-item href="#home"> Home </b-breadcrumb-item>
          <b-breadcrumb-item active>Cart</b-breadcrumb-item>
        </b-breadcrumb>
      </b-container>
    </div>
    <div class="shopping-cart">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="product-table">
              <table class="table table-responsive">
                <colgroup>
                  <col span="1" style="width: 15%" />
                  <col span="1" style="width: 30%" />
                  <col span="1" style="width: 15%" />
                  <col span="1" style="width: 15%" />
                  <col span="1" style="width: 15%" />
                  <col span="1" style="width: 10%" />
                </colgroup>
                <thead class="title-table-prod">
                  <tr>
                    <th class="product-thumbnail">&nbsp;</th>
                    <th class="product-name">Product</th>
                    <th class="product-price">Price</th>
                    <th class="product-quantity">Quantity</th>
                    <th class="product-subtotal">Subtotal</th>
                    <th class="product-remove">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="product-iamge">
                      <div class="img-wrapper">
                        <img
                          src="~/assets/images/pro-cart1.jpeg"
                          alt="product image"
                        />
                      </div>
                    </td>
                    <td class="product-name">Banana Per kg</td>
                    <td class="product-price">£693.95</td>
                    <td class="product-quantity">
                      <div class="quantity buttons_added">
                        <input
                          onclick="var result = document.getElementById('quantity'); var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;"
                          type="button"
                          value="-"
                          class="butoon-change-mu"
                        />
                        <input
                          id="quantity"
                          min="1"
                          name="quantity"
                          type="text"
                          value="1"
                        />
                        <input
                          onclick="var result = document.getElementById('quantity'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;"
                          type="button"
                          value="+"
                          class="butoon-change-pl"
                        />
                      </div>
                    </td>
                    <td class="product-total">£693.95</td>
                    <td class="product-clear">
                      <div class="wrap-img-cart">
                        <img
                          class="clear-ic"
                          style="width: 16px"
                          src="~/assets/images/clear.png"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="product-iamge">
                      <div class="img-wrapper">
                        <img
                          src="~/assets/images/pro-cart2.jpeg"
                          alt="product image"
                        />
                      </div>
                    </td>
                    <td class="product-name">Large Queen Pineapple</td>
                    <td class="product-price">£78.09</td>
                    <td class="product-quantity">
                      <div class="quantity buttons_added">
                        <input
                          onclick="var result = document.getElementById('quantity2'); var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;"
                          type="button"
                          value="-"
                          class="butoon-change-mu"
                        />
                        <input
                          id="quantity2"
                          min="1"
                          name="quantity"
                          type="text"
                          value="1"
                        />
                        <input
                          onclick="var result = document.getElementById('quantity2'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;"
                          type="button"
                          value="+"
                          class="butoon-change-pl"
                        />
                      </div>
                    </td>
                    <td class="product-total">£78.09</td>
                    <td class="product-clear">
                      <div class="wrap-img-cart">
                        <img
                          class="clear-ic"
                          style="width: 16px"
                          src="~/assets/images/clear.png"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="product-iamge">
                      <div class="img-wrapper">
                        <img
                          src="~/assets/images/pro-cart3.jpeg"
                          alt="product image"
                        />
                      </div>
                    </td>
                    <td class="product-name">Papaya Single</td>
                    <td class="product-price">£78.09</td>
                    <td class="product-quantity">
                      <div class="quantity buttons_added">
                        <input
                          onclick="var result = document.getElementById('quantity3'); var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;"
                          type="button"
                          value="-"
                          class="butoon-change-mu"
                        />
                        <input
                          id="quantity3"
                          min="1"
                          name="quantity"
                          type="text"
                          value="1"
                        />
                        <input
                          onclick="var result = document.getElementById('quantity3'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;"
                          type="button"
                          value="+"
                          class="butoon-change-pl"
                        />
                      </div>
                    </td>
                    <td class="product-total">£78.09</td>
                    <td class="product-clear">
                      <div class="wrap-img-cart">
                        <img
                          class="clear-ic"
                          style="width: 16px"
                          src="~/assets/images/clear.png"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="row" style="align-items: center">
                <div class="col-6">
                  <div class="coupon">
                    <form action="" method="post" class="coupon-input">
                      <input
                        class="input-text-sale"
                        type="text"
                        placeholder="Coupon code"
                        style="border: none"
                      />
                    </form>
                  </div>
                </div>
                <div class="col-6 d-flex justify-content-end">
                  <button class="no-round-btn black cart-update">
                    Update cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 justify-content-end">
            <div class="cart-collaterals">
              <div class="cart_totals">
                <h2>Cart totals</h2>

                <table
                  cellspacing="0"
                  class="shop_table shop_table_responsive"
                  style="width: 100%"
                >
                  <tbody>
                    <tr class="cart-subtotal">
                      <th>Subtotal</th>
                      <td data-title="Subtotal" style="text-align: right">
                        <span class="woocommerce-Price-amount amount"
                          ><bdi
                            ><span class="woocommerce-Price-currencySymbol"
                              >£</span
                            >2,558.07</bdi
                          ></span
                        >
                      </td>
                    </tr>

                    <tr class="order-total">
                      <th>Total</th>
                      <td data-title="Total">
                        <strong
                          ><span
                            class="
                              woocommerce-Price-amount
                              amount
                              total-cart-main
                            "
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >£</span
                              >2,558.07</bdi
                            ></span
                          ></strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="wc-proceed-to-checkout">
                  <a
                    href="https://demo.leebrosus.com/organey/checkout/"
                    class="checkout-button button alt wc-forward"
                  >
                    Proceed to checkout</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h2 class="container recom-food-more">You may be interested in…</h2>
        <b-container class="bv-example-row d-flex list-prod no-pad">
          <div class="mt-3 row" style="margin: 0 auto">
            <div
              v-for="(product, index) in products_flash_sale"
              :key="index"
              class="col-2 mb-3 card-home"
              style="padding-left: 0px; padding-right: 0px"
            >
              <CardMain-Homepage :product="product"></CardMain-Homepage>
            </div>
          </div>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Shop Cart',
      value1: 4,
      value2: 4.5,
      value3: 5,
      value4: 3.5,
      value5: 4,
      products_flash_sale: [
        {
          name: 'Papaya Single',
          id: 13,
          price: '535.40',
          rating: 3,
          sale: '-23%',
        },
        {
          name: 'Large Queen Pineapple',
          id: 9,
          price: '78.09',
          rating: 3,
          sale: '-48%',
        },
        {
          name: 'Mixed Chillies150g',
          id: 2,
          price: '546.04',
          rating: 4,
          sale: '-25%',
        },
        {
          name: 'Beef Potjiekos Per kg',
          id: 3,
          price: '890.96',
          rating: 3,
          sale: '-45%',
        },
        {
          name: 'Wrapped Red Cabbage',
          id: 4,
          price: '500.91',
          rating: 4,
          sale: '-32%',
        },
      ],
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import './assets/css/style_Quang/css/style.scss';
</style>

<style lang="scss" scoped>
.title-table-prod {
  border-bottom: 1px solid #e4e4e4;
  background: #f5f5f5;
  height: 68px;
  display: table-header-group;
}

.input-text-sale {
  border: none;
  outline: none;
}

.recom-food-more {
  margin: 0 0 0.5407911001em;
  color: #2f3e30;
  font-weight: 700;
  font-size: 24px;
  margin-top: 90px;
}

.table-cart-total {
  position: relative;
  background-color: #f5f5f5;
  border: 2px solid #e4e4e4;
  width: 402px;
  height: 302px;
}

.wrap-img-cart {
  text-align: right;
}
.bread-crumb-wrapper {
  padding: 80px 60px;
  background-image: url('/images/breadcrumb.jpg');
  background-position: center center;
  background-size: cover;
  .cur-page {
    font-size: 40px;
    font-weight: 900;
    color: #2f3e30;
    margin-bottom: 15px;
    line-height: 1.1;
  }
  .breadcrumb-item:not(:first-child)::before {
    content: '>';
  }
  .breadcrumb-item {
    a {
      color: #2f3e30;
      font-weight: 500;
    }
  }
}

.total-cart-main {
  color: #5c9963;
  font-weight: 800;
  font-size: 22px;
}

.wc-proceed-to-checkout {
  border: none;
  border-radius: 24px;
  background-color: #5c9963;
  border-color: #5c9963;
  cursor: pointer;
  padding: calc(1.07em - 2px) 3.2em;
  text-decoration: none;
  text-shadow: none;
  display: inline-block;
  -webkit-appearance: none;
  font-weight: 500;
  line-height: 1.4;
  font-size: 14px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

.wc-proceed-to-checkout > a {
  color: #fff;
  cursor: pointer;
  font-weight: 600;
}

.cart_totals table th,
.cart_totals table td {
  padding: 20px 10px;
}

td.product-name {
  font-weight: 600;
  color: #2f3e30 !important;
  font-size: 14px !important;
  box-shadow: none;
}

.product-total {
  color: #2f3e30;
  font-weight: 700;
  font-size: 14px;
}

.product-price {
  color: #656766 !important;
  font-weight: 500;
  font-size: 14px !important;
}

td.product-name:hover {
  text-decoration: underline;
}

.img-wrapper > img {
  width: 100px;
  height: 100px;
}

.product-iamge {
  padding: 1.618em 1.618em 1.618em 0;
}
.shopping-cart .product-table .table {
  border: none !important;
}

.table thead th {
  font-size: 14px !important;
  text-transform: uppercase;
  color: #2f3e30 !important;
  font-weight: 700;
}

.cart_totals {
  padding: 40px 30px 30px;
  position: relative;
  background-color: #f5f5f5;
  border: 2px solid #e4e4e4;
}

.cart_totals > h2 {
  padding-left: 5px;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1;
  margin: 0 0 0.5407911001em;
  color: #2f3e30;
  font-weight: 700;
}

.cart-subtotal {
  border-bottom: 1px solid;
  border-bottom-color: #e4e4e4;
  color: #2f3e30;
  font-weight: 700;
  font-size: 14px;
}

.woocommerce-Price-amount .amount > bdi {
  color: #656766;
  font-weight: 400;
  font-size: 14px;
}
.cart-subtotal th {
  padding: 20px 10px;
  text-align: left !important;
}

.order-total th {
  padding: 20px 10px;
  text-align: left !important;
  color: #2f3e30;
  font-weight: 700;
  font-size: 14px;
}

.cart-subtotal th {
  padding: 20px 10px;
  text-align: left !important;
}

.order-total td {
  padding: 20px 10px;
  text-align: right !important;
  font-size: 14px;
}

input#quantity,
input#quantity2,
input#quantity3 {
  padding: 0.326em;
  width: 3.706325903em;
  font-weight: 600;
  color: #2f3e30;
  border: none !important;
  text-align: center;
  font-size: 14px;
}

.shopping-cart {
  margin-top: 50px;
}

.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: #e4e4e4;
  width: 90px;
  min-height: 44px;
  border-radius: 4px;
  margin-right: 20px;
  position: relative;
}

.quantity button {
  width: 30px;
  padding: 0;
  text-align: center;
  display: block;
  background-color: #00000000;
  color: #656766;
  border: none !important;
}

.clear-ic {
  cursor: pointer;
}

.qty {
  padding: 0.326em;
  width: 3.706325903em;
  font-weight: 600;
  color: #2f3e30;
}

input.butoon-change-pl {
  left: 45px;
  padding: 0;
  text-align: center;
  display: block;
  background-color: #00000000;
  color: #656766;
  border: none;
  position: absolute;
  font-weight: 700;
}

.butoon-change-mu {
  left: -19px;
  padding: 0;
  text-align: center;
  display: block;
  background-color: #00000000;
  color: #656766;
  border: none;
  position: absolute;
  font-weight: 700;
}

.product-total {
  color: #2f3e30 !important;
  font-weight: 700 !important ;
  font-size: 14px !important;
}

.cart-update {
  border: none;
  border-radius: 24px;
  background-color: #5c9963;
  border-color: #5c9963;
  color: #fff;
  cursor: pointer;
  padding: calc(1.07em - 2px) 3.2em;
  text-decoration: none;
  text-shadow: none;
  display: inline-block;
  -webkit-appearance: none;
  font-weight: 500;
  line-height: 1.4;
  text-transform: none;
  font-size: 15px !important;
  height: 45px;
  align-items: center;
  display: flex;
}

.coupon-input {
  padding: calc(0.734em - 2px) 1em;
  background-color: #ffffff;
  color: #656766;
  border-width: 1px;
  border-style: solid;
  border-color: #e4e4e4;
  -webkit-appearance: none;
  box-sizing: border-box;
  font-weight: 400;
  border-radius: 6px;
  outline: 0;
  width: 300px;
  transition: all ease-in-out 0.3s;
}

.cart-update:hover {
  color: #fff;
  background-color: #528959;
  border-color: #528959;
}
</style>
