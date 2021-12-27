/* eslint-disable vue/component-tags-order */
<template>
  <section class="join-now section-2">
    <div>
      <div class="margin-page">
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
      </div>
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

.card-home {
  width: 20% !important;
}

.no-pad {
  padding-left: 62px !important;
  padding-right: 62px !important;
}
</style>

<script>
if (process.client) {
  const countDownDate = new Date('Jan 5, 2022 15:37:25').getTime()
  const x = setInterval(function () {
    const now = new Date().getTime()

    const distance = countDownDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

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
      products_flash_sale: [
        {
          name: 'Papaya Single',
          id: 13,
          price: '535.40',
          rating: 3,
          sale: '-23%',
          slug: 'papaya-single'
        },
        {
          name: 'Large Queen Pineapple',
          id: 9,
          price: '78.09',
          rating: 3,
          sale: '-48%',
          slug: 'large-queen-pineapple'

        },
        {
          name: 'Mixed Chillies150g',
          id: 2,
          price: '546.04',
          rating: 4,
          sale: '-25%',
          "slug": "mixed-chillies",
        },
        {
          name: 'Beef Potjiekos Per kg',
          id: 3,
          price: '890.96',
          rating: 3,
          sale: '-45%',
          slug: 'beef-potjiekos'
        },
        {
          name: 'Wrapped Red Cabbage',
          id: 4,
          price: '500.91',
          rating: 4,
          sale: '-32%',
          slug: 'wrapped-red-cabbage'
        },
      ],
    }
  },
  
}
</script>


