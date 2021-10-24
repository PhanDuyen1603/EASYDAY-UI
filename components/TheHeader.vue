<template>
  <header class="header-top">
    
    <!-- NAVBAR -->
    <nav class="nav-main navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand" ><img class=" logo-foodmood" src="~/assets/images/logo-foodmood.png" alt="logo-foodmood"></NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-main"
          aria-controls="nav-main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="nav-main">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <NuxtLink to="/diet-explore" no-prefetch  class="nav-link" aria-current="page" >
               Home
              </NuxtLink>
            </li>
            <li class="nav-item">
               <NuxtLink to="/recipe-explore" no-prefetch class="nav-link">Shop</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/tip-explore" no-prefetch class="nav-link" >Page</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/post-explore" no-prefetch class="nav-link" >Blog</NuxtLink>
            </li>

            <li class="nav-item">
              <NuxtLink to="/post-explore" no-prefetch class="nav-link" >Blog</NuxtLink>
            </li>
             
            <li class="nav-item login cursor-pointer">
              <a class="nav-link flex-view" data-toggle="modal" data-target="#authModal"  @click="showLoginModal = true" ><img class="icon-login" src="~/assets/images/Vector-login.png">ĐĂNG NHẬP</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /container -->
    </nav>
    <!-- <Login v-if="showLoginModal" @close-modal="showLoginModal = false" @switch-modal="switchModal"/>
    <Signup v-if="showSignupModal" @close-modal="showSignupModal = false" @switch-modal="switchModal"/> -->
  </header>
</template>

<script>
export default {
  components: {
    // Login,
    // Signup
  },
   data() {
    return {
      showLoginModal: false,
      showSignupModal: false,
      first_name: '',
      last_name: '',
      email_address: '',
      gender: '',
      number: '',
      age: '',
      language: '',
      state: '',
    }
  },
  methods: {
    switchModal(value) {
      if(value === 'login') {
        this.showLoginModal = true
        this.showSignupModal = false
      } else {
        this.showLoginModal = false
        this.showSignupModal = true
      }
    },
  }
}
</script>
