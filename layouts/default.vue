<template>
  <div class="wrap__body">
    <TheHeader />
    <b-modal id="bv-modal-example" hide-footer hide-header>
      <login></login>
    </b-modal>
    <b-modal id="bv-modal-example2" hide-footer hide-header>
      <signup></signup>
    </b-modal>
    <main class="main">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss">
  .hot-mode.login-form {
    margin: 0;
  }
  @media (min-width: 576px) {
    #bv-modal-example, #bv-modal-example2
    {
      .modal-content {
        border-radius: 30px;
      }
      .modal-body {
        padding: 0 !important;
      }
      .modal-dialog {
          max-width: 454px;
      }
    } 
  }
</style>
