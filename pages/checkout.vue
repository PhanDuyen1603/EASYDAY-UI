<template>
  <div class="container-sm mt-5">
    <div class="shop-checkout">
      <div class="">
        <div class="woocommerce-info">
          Have a coupon?
          <a href="#" class="showcoupon">Click here to enter your code</a>
        </div>
        <form action="" method="post">
          <div class="row">
            <div class="col-12 col-lg-7" style="padding-right: 40px">
              <h2 class="form-title">Billing details</h2>
              <div class="form-row d-flex justify-content-between">
                <div class="form-group col-sm-6" style="padding-right: 20px">
                  <label for="inputFirstName"
                    >First Name<label class="bingding-title">*</label></label
                  >
                  <input class="no-round-input-bg" type="text" required />
                </div>
                <div class="form-group col-sm-6">
                  <label for="inputLastName"
                    >Last Name<label class="bingding-title">*</label></label
                  >
                  <input class="no-round-input-bg" type="text" required />
                </div>
              </div>
              <div class="form-group">
                <label for="inputCountry"
                  >Country<label class="bingding-title">*</label></label
                >
                <select class="no-round-input-bg">
                  <option value="1">Vietnam</option>
                  <option value="2">USA</option>
                  <option value="3">Italy</option>
                  <option value="4">China</option>
                  <option value="5">Japan</option>
                  <option value="6">Russia</option>
                </select>
              </div>
              <div class="form-group">
                <label for="inputStreet"
                  >Street address<label class="bingding-title">*</label></label
                >
                <input class="no-round-input-bg" type="text" required />
              </div>

              <div class="form-group">
                <label for="inputCity"
                  >Town / City<label class="bingding-title">*</label></label
                >
                <input class="no-round-input-bg" type="text" required />
              </div>
              <div class="form-group">
                <label for="inputPhone"
                  >Phone<label class="bingding-title">*</label></label
                >
                <input class="no-round-input-bg" type="text" required />
              </div>
              <div class="form-group">
                <label for="inputEmail">Email address(optional)</label>
                <input class="no-round-input-bg" type="email" required />
              </div>
              <h2 class="form-title">ADDITIONAL INFORMATION</h2>

              <div class="form-group">
                <label for="inputNote">Order notes (optional)</label>
                <textarea
                  class="textarea-form-bg"
                  name=""
                  cols="2"
                  rows="5"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5">
              <div class="cart-collaterals">
                <div class="cart_totals">
                  <div
                    class="d-flex justify-content-between"
                    style="padding-bottom: 15px"
                  >
                    <h2>PRODUCT</h2>
                    <h2>SUBTOTAL</h2>
                  </div>
                  <table
                    cellspacing="0"
                    class="shop_table shop_table_responsive"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr class="cart_item">
                        <td class="product-name">
                          Banana Per kg&nbsp;
                          <strong class="product-quantity">×&nbsp;1</strong>
                        </td>
                        <td class="product-total">
                          <span class="woocommerce-Price-amount amount"
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >£</span
                              >693.95</bdi
                            ></span
                          >
                        </td>
                      </tr>
                      <tr class="cart_item">
                        <td class="product-name">
                          Large Queen Pineapple&nbsp;
                          <strong class="product-quantity">×&nbsp;1</strong>
                        </td>
                        <td class="product-total">
                          <span class="woocommerce-Price-amount amount"
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >£</span
                              >78.09</bdi
                            ></span
                          >
                        </td>
                      </tr>
                      <tr class="cart_item">
                        <td class="product-name">
                          Papaya Single&nbsp;
                          <strong class="product-quantity">×&nbsp;1</strong>
                        </td>
                        <td class="product-total">
                          <span class="woocommerce-Price-amount amount"
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >£</span
                              >78.09</bdi
                            ></span
                          >
                        </td>
                      </tr>
                      <tr class="cart-subtotal">
                        <th>Subtotal</th>
                        <td data-title="Subtotal" style="text-align: right">
                          <span class="woocommerce-Price-amount amount"
                            ><bdi
                              ><span class="woocommerce-Price-currencySymbol"
                                >£</span
                              >850.13</bdi
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
                                >850.13</bdi
                              ></span
                            ></strong
                          >
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>

                  <div class="wc-proceed-to-checkout">
                    <a
                      href="/order_complete"
                      class="checkout-button button alt wc-forward"
                    >
                      Place order</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Checkout',
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
.woocommerce-info {
  background-color: #f5f5f5;
  font-weight: 700;
  padding: 15px;
  border: none;
  font-size: 14px;
  text-align: center;
  color: #2f3e30;
  margin-bottom: 45px;
  a {
    color: #5c9963;
  }
  a:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
}

.bingding-title {
  color: #e2401c !important;
}

input.no-round-input-bg {
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
  transition: all ease-in-out 0.3s;
  font-size: 14px;
  height: 43px;
}

.product-total {
  text-align: right;
}

.shop_table .shop_table_responsive {
  border-top: 1px solid #e4e4e4 !important;
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

.product-quantity {
  font-weight: 700;
  color: #2f3e30;
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
  color: #656766;
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

.cart_item {
  border-top: 1px solid #e4e4e4;
}

.cart_totals h2 {
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
  border-top: 1px solid;
  border-top-color: #e4e4e4;
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

textarea.textarea-form-bg {
  padding: calc(0.734em - 2px) 1em;
  background-color: #ffffff;
  color: #656766;
  border-width: 1px;
  border-style: solid;
  border-color: #e4e4e4;
  -webkit-appearance: none;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 14px;
  border-radius: 6px;
  outline: 0;
  transition: all ease-in-out 0.3s;
}

input.no-round-input-bg:focus {
  box-shadow: inset 2px 0 0 #0f834d;
  border-color: #2f3e30;
}

select.no-round-input-bg {
  font-size: 14px;
  border: 1px solid;
  border-color: #e4e4e4;
  border-radius: 6px;
  height: 47px;
  background-color: #ffffff;
}

#order_review {
  padding: 25px 40px 40px;
  background-color: #f5f5f5;
}

.shop_table {
  thead {
    tr {
      th {
        border: none;
        font-weight: 700;
        font-size: 18px;
        text-transform: uppercase;
        width: 100%;
        padding: 1em 0;
      }
    }
    tbody {
      border-top: 1px solid #e4e4e4;
      tr {
        padding: 1em 0;

        th {
          padding: 1em 0;
          td.product-name {
            text-align: left;
            font-size: 14px;
            line-height: 20px;
            color: #656766;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
