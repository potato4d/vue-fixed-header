<template>
  <div id="app">
    <fixed-header :fixed.sync="isFixed">
      <nav class="navbar" role="navigation" aria-label="main navigation" :class="{ 'is-light': isFixed, 'is-dark': !isFixed }">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              Header Content
            </a>

            <button class="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </fixed-header>
    <section class="hero is-large has-text-centered is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Vue Fixed Header
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import FixedHeader from '../src'

export default {
  components: {
    FixedHeader
  },
  data () {
    return {
      isFixed: false
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body, #app {
  width: 100%;
  height: 110vh;
  margin: 0;
  padding: 0;
}

.navbar {
  position: fixed;
  width: 100%;
  transition: background 0.15s ease-out;
  background: transparent;
}

.navbar.is-dark {
  background: transparent;
}

.navbar.is-light {
  background: #fff;
}

.hero.is-primary {
  background: #41B883;
}
</style>
