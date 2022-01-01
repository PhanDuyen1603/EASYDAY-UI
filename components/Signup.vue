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
        <div class="show-error" id="signUpError"></div>
        <div class="item-input">
          <img
            class="img-response"
            src="~/assets/images/user-icon.png"
            alt=""
          />
          <input
            id="fullName"
            class="item-text-input"
            type="text"
            name="fullName"
            placeholder="Full name"
          />
        </div>
        <div class="item-input">
          <img class="img-response" src="~/assets/images/email-ic.png" alt="" />
          <input
            id="email-signup"
            class="item-text-input"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="item-input">
          <img class="img-response" src="~/assets/images/lock.png" alt="" />
          <input
            id="password-signup"
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
            id="confirmPassword"
            class="item-text-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
          <img class="icon-eye-slash" src="~/assets/images/eyes.png" alt="" />
        </div>
      </div>
      <div id="signUpBtn" class="button-login btn-signin">
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
export default {
  data() {
    return {}
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const Swal = require('sweetalert2')
      const signUpBtn = document.getElementById('signUpBtn')
      const showErrorEl = document.getElementById('signUpError')

      const signUpErrors = {
        wrongPass: 'Mật khẩu xác nhận không chính xác.',
        exist: 'Email đã được đăng ký. \nVui lòng chọn một email khác.',
        empty: 'Vui lòng điền đầy đủ thông tin.',
        invalidEmail: 'Email không hợp lệ.',
        invalidPassword: 'Mật khẩu tối đa 6 ký tự.',
      }

      function validateEmail(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      }

      function signUpValidation(data = {}, userList = []) {
        if (Object.values(data).includes('')) {
          showErrorEl.innerText = signUpErrors.empty
          return false
        }
        if (!validateEmail(data.identifier)) {
          showErrorEl.innerText = signUpErrors.invalidEmail
          return false
        }
        if (data.password.length < 6) {
          showErrorEl.innerText = signUpErrors.invalidPassword
          return false
        }

        for (let i = 0; i < userList.length; i++) {
          if (userList[i].identifier === data.identifier) {
            showErrorEl.innerText = signUpErrors.exist
            return false
          }
        }

        if (data.password !== data.confirmPassword) {
          showErrorEl.innerText = signUpErrors.wrongPass
          return false
        }
        showErrorEl.innerText = ''
        return true
      }

      signUpBtn.addEventListener('click', () => {
        // const defaultUser = {
        //   id: 0,
        //   identifier: 'nttukhtn@gmail.com',
        //   password: '123456',
        //   name: 'Tuấn Tú',
        // }
        // localStorage.setItem(defaultUser.id, JSON.stringify(defaultUser))

        const fullNameEl = document.getElementById('fullName')
        const emailEl = document.getElementById('email-signup')
        const passwordEl = document.getElementById('password-signup')
        const confirmPasswordEl = document.getElementById('confirmPassword')

        const id = localStorage.length

        const signUpInfo = {
          id,
          name: fullNameEl.value,
          identifier: emailEl.value,
          password: passwordEl.value,
          confirmPassword: confirmPasswordEl.value,
        }
        const userList = []
        for (let i = 0; i < localStorage.length; i++) {
          userList.push(JSON.parse(localStorage.getItem(i)))
        }

        if (signUpValidation(signUpInfo, userList)) {
          fullNameEl.value = ''
          emailEl.value = ''
          passwordEl.value = ''
          confirmPasswordEl.value = ''
          localStorage.setItem(signUpInfo.id, JSON.stringify(signUpInfo))
          sessionStorage.setItem('name', signUpInfo.name)
          Swal.fire(
            'THÀNH CÔNG!',
            'Đăng ký thành công <br> Chúc bạn mua sắm vui vẻ tại EASY DAY !!',
            'success'
          )
          setTimeout(() => {
            location.reload()
          }, 1500)
        }
      })
    }
  },

  components: {},
}
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
