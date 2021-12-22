<template>
  <div class="wrap__body">
    <TheHeader />
    <b-modal id="bv-modal-example" hide-footer hide-header>
      <login></login>
    </b-modal>
    <main class="main">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>
