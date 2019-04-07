<template>
  <div class="custom-root">
    <TheHeroArea />
    <div class="page">
      <h2 class="demo-title">Demo</h2>
      <TheCodeSandbox />
      <Content />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeroArea from './parts/TheHeroArea.vue'
import TheFooter from './parts/TheFooter.vue'
import TheCodeSandbox from './parts/TheCodeSandbox.vue'

export default {
  components: {
    TheHeroArea,
    TheCodeSandbox,
    TheFooter
  }
}
</script>

<style scoped>
.custom-root .demo-title {
  margin-top: 0;
}

.custom-root .page {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}
</style>
