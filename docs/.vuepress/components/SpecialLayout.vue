<template>
  <div class="custom-root">
    <div class="header">
      <div class="header-content">
        <div>
          <h1 class="header-title">
            <small>
              vue-fixed-header
            </small>
          </h1>
          <p class="header-paragraph">
            <small>
              Simple and cross-browser friendly fixed header component for Vue.js.
            </small>
          </p>
        </div>
        <div>
          <!-- TODO: Add to Carbon -->
        </div>
      </div>
    </div>
    <div class="page">
      <h2 class="demo-title">Demo</h2>
      <iframe src="https://codesandbox.io/embed/yvjoj937x1?fontsize=14&module=%2Fsrc%2FApp.vue&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
      <Content />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.custom-root .header {
  color: #fff;
  background: #1D5DFF;
  padding: 3rem 0 5rem;
}

.header-title {
  padding-bottom: 0.5rem;
  margin-bottom: 0;
}

.header-paragraph {
  padding-top: 0px;
  margin-top: 0;
}

.custom-root .demo-title {
  margin-top: 0;
}

.custom-root .header-content,
.custom-root .page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}
</style>
