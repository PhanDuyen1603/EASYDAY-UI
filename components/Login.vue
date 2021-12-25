<template>
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
    <div class="title-login">Login</div>
    <div class="group-text">
      <div class="item-input">
        <img src="~/assets/images/user-icon.png" alt="" />
        <input
          id=""
          class="item-text-input"
          type="text"
          name="identifier"
          v-model="identifier"
          placeholder="Login name"
        />
      </div>
      <div class="item-input">
        <img class="img-response" src="~/assets/images/lock.png" alt="" />
        <input
          id=""
          class="item-text-input"
          type="password"
          name="password"
          v-model="password"
          placeholder="Password"
        />
        <img class="icon-eye-slash" src="~/assets/images/eyes.png" alt="" />
      </div>
      <div class="forgot-container">
        <a href="/" class="forgot-password">Forgot password</a>
      </div>
    </div>

    <div class="button-login">
      <a href="#" @click="loginUser">Login</a>
    </div>
    <div class="title-login-link d-flex">
      You already have an account?
      <b-button
        class="account-content signup-btn"
        id="show-btn"
        @click="$bvModal.show('bv-modal-example2')"
        >Signup</b-button
      >
    </div>
    <div class="d-flex justify-content-center">
      <div class="center-cirlce center-top">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>

    <div class="title-login-more relative">
      <a href="/">Login with</a>
    </div>

    <div class="login-more relative d-flex">
      <div class="item-login lg-fb">
        <img class="img-response" src="~/assets/images/fb-ic.png" alt="" />
      </div>
      <div class="item-login lg-gg">
        <img class="img-response" src="~/assets/images/gg-ic.png" alt="" />
      </div>
      <div class="item-login lg-apple">
        <img class="img-response" src="~/assets/images/apple-ic.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const element = document.getElementById('tu')
      console.log(111, { element })
    }
  },
  components: {},
}
</script>

<style>
.signup-btn, .signup-btn:hover, s.ignup-btn:focus {
  background: white !important;
  color: #e5625c !important;
  border: 0px !important;
  font-weight: 700;
  box-shadow: none !important;
}
</style>
