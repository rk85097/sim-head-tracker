<template>
    <section>
      <div class="hero-body">
        <div class="block has-text-centered">
           
          <video id="video" width="417" height="320" autoplay style="position: absolute; display: blank;"/>
        <canvas style="position: absolute; display: blank" id="canvas" width="417" height="320"/>

       

          <!-- <img width="256" alt="Placeholder image" src="../../../_icons/logo_simhat.png" />
          <br><br>
          <RouterLink class="button is-info" to="about">
            X-Plane 11
          </RouterLink>
          <RouterLink class="button is-info" to="help">
            P3D / FSX
          </RouterLink> -->
        </div>
      </div>
    </section>
</template>

<script>
import Vue from 'vue'
import run from './posenet.js'

export default Vue.extend({
  name: 'Home',
  mounted () {
    run()
  }
})
</script>

<style>
.hero-body {
  height: 100vh;
}
</style>
