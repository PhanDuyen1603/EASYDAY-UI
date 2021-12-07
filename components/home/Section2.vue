/* eslint-disable vue/component-tags-order */
<template>
  <section class="join-now section-2 margin-page">
    <div>
      <div class="d-flex prod-flash">
        <div class="no-border">
          <h2 class="title-posts text-left">Today Flash Sales</h2>
        </div>
        <div>
          <div class="d-flex flash-time">
            <p class="flash-sale">Ends in:</p>
            <p id="demo" class="flash-sale-time"></p>
          </div>
        </div>
      </div>
      <div class="bottom-title format-left"></div>
      <p class="straight-line margin-bt"></p>
      <b-container class="bv-example-row d-flex list-prod">
        <b-col class="product-item">
          <a class="img-prod" href="/">
            <span class="onsale">-27%</span>
            <img
              width="234"
              height="234"
              class="img-radius"
              src="~/assets/images/pro-1.jpeg"
            />
          </a>
          <div class="product-caption">
            <div>
              <b-form-rating v-model="value1" readonly></b-form-rating>
            </div>
            <div class="woocommerce-loop-product__title">
              <a href="/">Papaya Single</a>
            </div>
            <span class="price"
              ><del aria-hidden="true"
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">£</span
                    >746.64</bdi
                  ></span
                ></del
              >
              <ins style="text-decoration: none"
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">£</span
                    >546.04</bdi
                  ></span
                ></ins
              ></span
            >
            <div class="add-to-cart-wrap">
              <a href="/" data-quantity="1" class="">
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
                    style="width: 22px; margin-right: 10px"
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
          </div>
        </b-col>
        <b-col class="product-item">
          <a class="img-prod" href="/">
            <span class="onsale">-13%</span>
            <img
              width="234"
              height="234"
              class="img-radius"
              src="~/assets/images/pro-2.jpeg"
            />
          </a>
          <div class="product-caption">
            <div>
              <b-form-rating v-model="value2" readonly></b-form-rating>
            </div>
            <div class="woocommerce-loop-product__title">
              <a href="/">Cauliflower Pack 350g</a>
            </div>
            <span class="price"
              ><del aria-hidden="true"
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">£</span
                    >746.64</bdi
                  ></span
                ></del
              >
              <ins style="text-decoration: none"
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">£</span
                    >527.32</bdi
                  ></span
                ></ins
              ></span
            >
            <div class="add-to-cart-wrap">
              <a href="/" data-quantity="1" class="">
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
                    style="width: 22px; margin-right: 10px"
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
          </div>
        </b-col>
        <b-col class="product-item">
          <a class="img-prod" href="/">
            <span class="onsale">-75%</span>
            <img
              width="234"
              height="234"
              class="img-radius"
              src="~/assets/images/pro-3.jpeg"
            />
          </a>
          <div class="product-caption">
            <div>
              <b-form-rating v-model="value3" readonly></b-form-rating>
            </div>
            <div class="woocommerce-loop-product__title">
              <a href="/">Kiwi Fruit Single</a>
            </div>
            <span class="price">
              <del aria-hidden="true"
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">£</span
                    >746.64</bdi
                  ></span
                ></del
              >
              <ins style="text-decoration: none"
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">£</span
                    >100.13</bdi
                  ></span
                ></ins
              ></span
            >
            <div class="add-to-cart-wrap">
              <a href="/" data-quantity="1" class="">
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
                    style="width: 22px; margin-right: 10px"
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
          </div>
        </b-col>
        <b-col class="product-item">
          <a class="img-prod" href="/">
            <span class="onsale">-48%</span>
            <img
              width="234"
              height="234"
              class="img-radius"
              src="~/assets/images/pro-4.jpeg"
            />
          </a>
          <div class="product-caption">
            <div>
              <b-form-rating v-model="value4" readonly></b-form-rating>
            </div>
            <div class="woocommerce-loop-product__title">
              <a href="/">Large Queen Pineapple</a>
            </div>
            <span class="price"
              ><del aria-hidden="true"
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">£</span
                    >149.94</bdi
                  ></span
                ></del
              >
              <ins style="text-decoration: none"
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">£</span
                    >78.09</bdi
                  ></span
                ></ins
              ></span
            >
            <div class="add-to-cart-wrap">
              <a href="/" data-quantity="1" class="">
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
                    style="width: 22px; margin-right: 10px"
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
          </div>
        </b-col>
        <b-col class="product-item">
          <a class="img-prod" href="/">
            <span class="onsale">-25%</span>
            <img
              width="234"
              height="234"
              class="img-radius"
              src="~/assets/images/pro-5.jpeg"
            />
          </a>
          <div class="product-caption">
            <div>
              <b-form-rating v-model="value5" readonly></b-form-rating>
            </div>
            <div class="woocommerce-loop-product__title">
              <a href="/">Mixed Chillies Pack 150g</a>
            </div>
            <span class="price"
              ><del aria-hidden="true"
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">£</span
                    >724.64</bdi
                  ></span
                ></del
              >
              <ins style="text-decoration: none"
                ><span class="woocommerce-Price-amount amount"
                  ><bdi
                    ><span class="woocommerce-Price-currencySymbol">£</span
                    >546.04</bdi
                  ></span
                ></ins
              ></span
            >
            <div class="add-to-cart-wrap">
              <a href="/" data-quantity="1" class="">
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
                    style="width: 22px; margin-right: 10px"
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
          </div>
        </b-col>
      </b-container>
    </div>
  </section>
</template>

<style>
.title-posts {
  font-weight: 600;
  color: #2f3e30;
  font-size: 30px;
}

.text-left {
  text-align: left !important;
}
.format-left {
  margin: unset !important;
}
.margin-bt {
  margin-bottom: 20px !important;
}

.no-border {
  border: none !important;
}

.prod-flash {
  margin-top: 65px;
  justify-content: space-between;
}

.flash-time {
  margin: 15px 0 0;
}

.flash-sale {
  text-align: right;
  color: #000;
  font-size: 16px;
  line-height: 25px;
  margin-right: 7px;
}

.flash-sale-time {
  font-size: 16px;
  font-weight: 700;
  color: #5c9963;
  line-height: 25px;
}

.bottom-title {
  width: 40px;
  height: 3px;
  background: #5c9963;
}

.straight-line {
  width: 100%;
  height: 1px;
  background: #e4e4e4;
}
</style>

<script></script>

<script>
if (process.client) {
  var countDownDate = new Date('Jan 5, 2022 15:37:25').getTime()
  var x = setInterval(function () {
    var now = new Date().getTime()

    var distance = countDownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('demo').innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '

    if (distance < 0) {
      clearInterval(x)
      document.getElementById('demo').innerHTML = 'EXPIRED'
    }
  }, 1000)
}
export default {
  data() {
    return {
      value1: 4,
      value2: 4.5,
      value3: 5,
      value4: 3.5,
      value5: 4,
    }
  },
}
</script>
