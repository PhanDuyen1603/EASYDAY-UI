<template>
  <div class="container-sm mt-5">
    <div class="order-step">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="order-step_block">
                <div class="row no-gutters">
                  <div class="col-12 col-md-4">
                    <div class="step-block active">
                      <div class="step">
                        <h2>Shopping Cart</h2><span>01</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="step-block">
                      <div class="step">
                        <h2>Check Out</h2><span>02</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="step-block">
                      <div class="step">
                        <h2>Order Completed</h2><span>03</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="shopping-cart">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="product-table">
                <table class="table table-responsive"> 
                  <colgroup>
                    <col span="1" style="width: 15%">
                    <col span="1" style="width: 30%">
                    <col span="1" style="width: 15%">
                    <col span="1" style="width: 15%">
                    <col span="1" style="width: 15%">
                    <col span="1" style="width: 10%">
                  </colgroup>
                  <thead>
                    <tr>
                      <th class="product-iamge" scope="col">Image</th>
                      <th class="product-name" scope="col">Product name</th>
                      <th class="product-price" scope="col">Price</th>
                      <th class="product-quantity" scope="col">Quantity</th>
                      <th class="product-total" scope="col">Total</th>
                      <th class="product-clear" scope="col"> 
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="product-iamge"> 
                        <div class="img-wrapper"><img src="@/assets/css/style_Quang/images/product/imagePineapple.jpg" alt="product image"></div>
                      </td>
                      <td class="product-name">Pure Pineapple</td>
                      <td class="product-price">$460.00</td>
                      <td class="product-quantity"> 
                        <input class="quantity no-round-input" type="number" min="1" value="1">
                      </td>
                      <td class="product-total">$460.00</td>
                      <td class="product-clear"> 
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="product-iamge"> 
                        <div class="img-wrapper"><img src="@/assets/css/style_Quang/images/product/imageApple.jpg" alt="product image"></div>
                      </td>
                      <td class="product-name">American lobster</td>
                      <td class="product-price">$460.00</td>
                      <td class="product-quantity"> 
                        <input class="quantity no-round-input" type="number" min="1" value="1">
                      </td>
                      <td class="product-total">$460.00</td>
                      <td class="product-clear"> 
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="product-iamge"> 
                        <div class="img-wrapper"><img src="@/assets/css/style_Quang/images/product/imageBanana.jpg" alt="product image"></div>
                      </td>
                      <td class="product-name">Chrysanthemum</td>
                      <td class="product-price">$460.00</td>
                      <td class="product-quantity">
                        <input class="quantity no-round-input" type="number" min="1" value="2">
                      </td>
                      <td class="product-total">$920.00</td>
                      <td class="product-clear"> 
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12 col-sm-8">
              <div class="coupon">
                <form action="" method="post">
                  <input class="no-round-input" type="text" placeholder="Coupon code">
                  <button class="no-round-btn smooth">Apply coupon</button>
                </form>
              </div>
            </div>
            <div class="col-12 col-sm-4 d-flex justify-content-end">
              <button class="no-round-btn black cart-update">Upadate cart</button>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="cart-total_block">
                <h2>Cart total</h2>
                <table class="table">
                  <colgroup>
                    <col span="1" style="width: 50%">
                    <col span="1" style="width: 50%">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>SUBTOTAL</th>
                      <td>$169.00</td>
                    </tr>
                    <tr>
                      <th>SHIPPING</th>
                      <td>
                        <p>Free shipping</p>
                        <p>Calculate shipping</p>
                      </td>
                    </tr>
                    <tr>
                      <th>TOTAL</th>
                      <td>$169.00</td>
                    </tr>
                  </tbody>
                </table>
                <div class="checkout-method">
                <NuxtLink to="/checkout" no-prefetch>
                     <button class="normal-btn">Proceed to Checkout</button>
                </NuxtLink>
                <span>- or -</span><a href="#">Check out with PayPal</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Shop Cart',
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
  @import "./assets/css/style_Quang/css/style.scss";
</style>
