<template>
  <div class="d-flex justify-content-center">
    <div class="hot-mode login-form signin-form">
      <div class="image-login"></div>
      <div class="d-flex justify-content-center">
        <div class="center-cirlce center-top">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="title-login">Signup</div>
      <div class="group-text">
        <div class="item-input">
          <img
            class="img-response"
            src="~/assets/images/user-icon.png"
            alt=""
          />
          <input
            id=""
            class="item-text-input"
            type="text"
            name="nane"
            placeholder="Signin name"
          />
        </div>
        <div class="item-input">
          <img class="img-response" src="~/assets/images/email-ic.png" alt="" />
          <input
            id=""
            class="item-text-input"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="item-input">
          <img class="img-response" src="~/assets/images/lock.png" alt="" />
          <input
            id=""
            class="item-text-input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <img class="icon-eye-slash" src="~/assets/images/eyes.png" alt="" />
        </div>
        <div class="item-input">
          <img class="img-response" src="~/assets/images/lock.png" alt="" />
          <input
            id=""
            class="item-text-input"
            type="password"
            name="password"
            placeholder="Confirm password"
          />
          <img class="icon-eye-slash" src="~/assets/images/eyes.png" alt="" />
        </div>
      </div>
      <div class="button-login btn-signin">
        <a>Signup</a>
      </div>
      <div class="title-login-link d-flex">
        Already have an account?
        <b-button
          class="account-content no-button"
          id="show-btn sign-text  login-text"
          @click="$bvModal.show('bv-modal-example')"
          >Login</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style >
.no-button {
  background: white !important;
  border: 0px !important;
  color: #649f6b !important;
  font-weight: 600;
  box-shadow: none !important;
}
</style>
