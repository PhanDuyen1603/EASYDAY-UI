<template>
      <div class="hot-mode login-form">
        <div class="image-login">
          <img
            class="img-response"
            src="~/assets/images/Login-image-2.png"
            alt=""
          />
        </div>
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
          <a href="#" @click="loginUser">Đăng nhập</a>
        </div>
        <div class="title-login-link d-flex">
          Bạn chưa có tài khoản?
          <a
            class="sign-text"
            style="margin-left: 10px"
            @click="$emit('switch-modal')"
            >Đăng kí</a
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
          <a href="/">Đăng nhập bằng</a>
        </div>

        <div class="login-more relative d-flex">
          <div class="item-login lg-fb">
            <img class="img-response" src="~/assets/images/fb-ic.png" alt="" />
          </div>
          <div class="item-login lg-gg">
            <img class="img-response" src="~/assets/images/gg-ic.png" alt="" />
          </div>
          <div class="item-login lg-apple">
            <img
              class="img-response"
              src="~/assets/images/apple-ic.png"
              alt=""
            />
          </div>
        </div>
      </div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
    const element = document.getElementById('tu')
    console.log(111,{element})
}},
  components: {
  },
}
</script>