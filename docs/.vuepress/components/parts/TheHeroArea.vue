<template>
  <div class="hero">
    <div class="hero-content">
      <div>
        <h1 class="hero-title">
          <small>
            vue-fixed-header
          </small>
        </h1>
        <p class="hero-paragraph">
          <small>
            Simple and cross-browser friendly fixed header component for Vue.js.
          </small>
        </p>
      </div>
      <div>
        <TheHeroAds />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeroAds from './TheHeroAds.vue'

export default {
  components: {
    TheHeroAds
  }
}
</script>

<style scoped>
.hero {
  color: #fff;
  background: #1d5dff;
  padding: 2rem 0 4rem;
}

.hero-title {
  padding-bottom: 0.5rem;
  margin-bottom: 0;
}

.hero-paragraph {
  padding-top: 0px;
  margin-top: 0;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}
</style>
