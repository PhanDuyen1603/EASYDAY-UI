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
                <label for="inputPhone"
                  >Email (optional)</label
                >
                <input class="no-round-input-bg" type="text" required />
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
<div class="tab_container">
                <input id="tab4" type="radio" name="tabs" checked />
                <section id="content4" class="tab-content">
                  <h4 class="payment-title">Choose your payment method</h4>
                  <form action="" method="post">
                    <div class="pymt-radio">
                      <div class="row-payment-method payment-row">
                        <div class="select-icon">
                          <input
                            type="radio"
                            id="radio1"
                            name="radios"
                            value="pp"
                          />
                          <label
                            for="radio1"
                            style="border-bottom: 2px solid #eeee"
                          ></label>
                        </div>
                        <div class="select-txt">
                          <p class="pymt-type-name">COD</p>
                          <p class="pymt-type-desc">
                            Cash on delivery (COD) is when a recipient pays for a good or service at the time of delivery
                          </p>
                        </div>
                        <div class="select-logo">
                          <img
                            src="~/assets/images/cod2.jpeg"
                            alt="PayPal"
                            width="80"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="pymt-radio">
                      <div class="row-payment-method payment-row-last">
                        <div class="select-icon hr">
                          <input
                            type="radio"
                            id="radio2"
                            name="radios"
                            value="pp"
                            checked
                          />
                          <label
                            for="radio2"
                            style="border-bottom: 2px solid #eeee"
                          ></label>
                        </div>
                        <div class="select-txt hr">
                          <p class="pymt-type-name">Credit Card</p>
                          <p class="pymt-type-desc">
                            Safe money transfer using your bank account. Safe
                            payment online. Credit card needed. Visa, Maestro,
                            Discover, American Express
                          </p>
                        </div>
                        <div class="select-logo">
                          <div class="select-logo-sub logo-spacer">
                            <img
                              src="https://www.dropbox.com/s/by52qpmkmcro92l/logo-visa.png?raw=1"
                              alt="Visa"
                            />
                          </div>
                          <div class="select-logo-sub">
                            <img
                              src="https://www.dropbox.com/s/6f5dorw54xomw7p/logo-mastercard.png?raw=1"
                              alt="MasterCard"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-cc">
      <div class="row-cc">
        <div class="cc-field">
          <div class="cc-title">Credit Card Number
          </div>
          <input type="text" class="input cc-txt text-validated" value="4542 9931 9292 2293" />
        </div>
      </div>
      <div class="row-cc">
        <div class="cc-field">
          <div class="cc-title">Expiry Date
          </div>
          <select class="input cc-ddl">
            <option selected>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>          
          </select>
          <select class="input cc-ddl">
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option selected>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>            
          </select>
        </div>
        <div class="cc-field">
          <div class="cc-title">CVV Code<span class="numberCircle">?</span>
          </div>
          <input type="text" class="input cc-txt"/>
        </div>
      </div>
      <div class="row-cc">
        <div class="cc-field">
          <div class="cc-title">Name on Card
          </div>
          <input type="text" class="input cc-txt"/>
        </div>
      </div>    
            
    </div>
                  </form>
                </section>
              </div>
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
  color: #fff !important;
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
  font-size: 14px !important;
  height: 45px;
  align-items: center;
  display: flex;
  font-family: 'Montserrat', sans-serif;
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
  font-family: 'Montserrat', sans-serif;
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

*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.clearfix:before,
.clearfix:after {
  content: ' ';
  display: table;
}

.clearfix:after {
  clear: both;
}

body {
  font-family: sans-serif;
  background: #f6f9fa;
}

h1 {
  color: #ccc;
  text-align: center;
}
h4.payment-title {
  text-align: left;
  padding: 10px 0px 30px 30px;
  font-weight: 500;
  color: #5e6977;
}
a {
  color: #ccc;
  text-decoration: none;
  outline: none;
}

.tab_container { 
  margin: 50px auto;
  position: relative;
  border: 1px solid #eee;
  border-radius: 7px;
  background: #fff;
}

input,
section {
  clear: both;
  padding-top: 10px;
  display: none;
}

#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4 {
  display: block;
  padding: 20px 0 0 0;
  color: #999;
}

.tab_container .tab-content h3 {
  text-align: center;
}

.tab_container [id^='tab']:checked + label {
  background: #fff;
  border-bottom: 2px solid #358ed7;
  color: #358ed7;
}

.tab_container [id^='tab']:checked + label > span.numberCircle {
  border: 2px solid #358ed7;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 3px 5px;
  text-align: center;
  font-size: 10px;
  margin: 3px 8px;
}

label:hover {
  background-color: #eee;
  border-radius: 0px;
}

.numberCircle {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 3px 5px;
  border: 2px solid #ccc;
  text-align: center;
  font-size: 10px;
  margin: 3px 8px;
}

.row-payment-method {
  margin: 0px 0px 0px 0px;
  padding: 22px 0px 11px 0px;
  text-align: left;
  display: table;
}
.payment-row {
  background-color: #f5f6fa;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
}
.payment-row-last {
  margin-left: 30px;
  margin-right: 30px;
  width: 100%;
}

.payment-padding-right {
}
.select-icon {
  display: table-cell;
  vertical-align: top;
  text-align: left;
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  width: 24px;
  height: 24px;
}

.select-txt {
  display: table-cell;
  vertical-align: middle;
  word-wrap: break-word;
  height: 60px;
  text-align: left;
  padding-left: 15px;
  font-size: 12pt;
}
.select-logo {
  padding-right: 0px;
  vertical-align: top;
  right: 35px;
  position: absolute;
}
.select-logo-sub {
  display: table-cell;
  vertical-align: middle;
}
.logo-spacer {
  padding-right: 13px;
}
.pymt-type-name {
  font-weight: 500;
  font-size: 12pt;
  padding-bottom: 8px;
  color: #5a6977;
}
.pymt-type-desc {
  padding-bottom: 22px;
  width: 70%;
  font-size: 14px;
}

.form-cc {
  display: table;
  width: 100%;
  text-align: left;
  padding: 0px 0px 30px 30px;
}
.row-cc {
  display: table;
  width: 100%;
  padding-bottom: 7px;
}
.cc-txt {
  border-color: #e1e8ee;
  width: 100%;
}
.input {
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  height: 38px;
  padding-left: 15px;
  font-weight: 600;
  font-size: 11pt;
  color: #5e6977;
}
input[type='text'] {
  display: initial;
  padding: 15px;
}
.text-validated {
  border-color: #7dc855;
  background-image: url('https://www.dropbox.com/s/1mve74fafiwsae1/icon-tick.png?raw=1');
  background-repeat: no-repeat;
  background-position: right 18px center;
}
.cc-ddl {
  border-color: #f0f4f7;
  background-color: #f0f4f7;
  width: 100px;
  margin-right: 10px;
}
.cc-title {
  font-size: 10.5pt;
  padding-bottom: 8px;
}
.cc-field {
  padding-top: 15px;
  padding-right: 30px;
  display: table-cell;
}
.button-master-container,
.button-master-container:hover {
  display: table;
  width: 100%;
  border-top: 1px solid #e1e8ee;
  height: 60px;
  vertical-align: bottom;
}
.button-container {
  width: 50%;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
a,
a:hover {
  color: inherit;
  text-decoration: inherit;
}
.button-container:hover {
  background-color: #eee;
  cursor: pointer;
}
.button-finish {
  border-left: 1px solid #e1e8ee;
  color: #7dc855;
  font-weight: 500;
  font-size: 12pt;
  background-image: url('https://www.dropbox.com/s/10d95otbo48r0hh/icon-next.png?raw=1');
  background-repeat: no-repeat;
  background-position: right 50px center;
}
.cvv-tooltip-img {
  display: inline-block;
  vertical-align: middle;
  padding-left: 17px;
}
input[id^='radio'] {
  display: none;
}

input[id^='radio'] + label {
  background-image: url('https://www.dropbox.com/s/mnwbybfl4pnzoi4/radio-inactive.png?raw=1');
  height: 26px;
  width: 24px;
  display: inline-block;
  padding: 0 0 0 0px;
  cursor: pointer;
  border-radius: 50%;
}

input[id^='radio']:checked + label {
  background-image: url('https://www.dropbox.com/s/8634yi8i1s7fx7w/radio-active.png?raw=1');
  height: 26px;
  width: 24px;
  display: inline-block;
  padding: 0 0 0 0px;
  cursor: pointer;
}
p.credit {
  text-align: center;
  color: #ccc;
}
</style>
