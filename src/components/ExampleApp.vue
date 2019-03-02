<template>
  <div id="app">
    <VueFixedHeader :threshold="100" fixedClass="fixed">
      <nav>
        <ul>
          <li>
            Header Item
          </li>
        </ul>
      </nav>
    </VueFixedHeader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueFixedHeader from './vue-fixed-header'

export default Vue.extend({
  data() {
    return {
      aaa: false
    }
  },
  components: {
    VueFixedHeader
  }
})
</script>

<style>
html,
body,
#app {
  width: 100vw;
  min-height: 150vh;
  margin: 0;
  padding: 0;
  background: #fafafa;
  overflow-x: hidden;
}

nav {
  display: flex;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: #fff;
  border-bottom: solid 1px #e5e5e5;
}

nav.fixed {
  position: fixed;
  left: 0;
  top: 0;
}

ul {
  flex: 1;
  display: flex;
  align-content: stretch;
  justify-content: flex-start;
  list-style: none;
}

li {
  padding: 8px 16px;
}
</style>
