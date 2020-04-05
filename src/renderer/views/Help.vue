<template>
    <section class="hero is-dark is-bold">
      <div class="hero-body">
        <div class="block has-text-centered">
          <p class="subtitle is-6">
            P3D / FSX
          </p>
          <RouterLink class="button is-info" to="home">
            Back
          </RouterLink>
        </div>
      </div>
    </section>
</template>

<script>
import SystemInformation from '../components/SystemInformation.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'About',
  components: { SystemInformation },
})
</script>

<style>
.block.has-text-centered figure {
  margin: 0 auto;
}
</style>
