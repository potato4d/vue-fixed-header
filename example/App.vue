<template>
  <div id="app">
    <fixed-header :fixed.sync="isFixed">
      <nav class="navbar" :class="{ 'is-light': isFixed, 'is-primary': !isFixed }">
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-item">
              Header Content
            </span>
          </div>
        </div>
      </nav>
    </fixed-header>

    <section class="hero is-medium has-text-centered is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Vue Fixed Header
          </h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content">
          <h2>About</h2>
          <p>
            This is simple and cross-browser friendly fixed header component for Vue.js.<br>
            It provides a concise interface that can be manipulated by <code>:fixed.sync</code> directive.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content">
          <h2>Usage</h2>
          <pre><code>{{sampleCode}}</code></pre>
        </div>
      </div>
    </section>


    <section class="section">
      <div class="container">
        <div class="content">
          <h2>Props</h2>
          <table class="is-border">
            <thead>
              <tr>
                <th>
                  name
                </th>
                <th>
                  type
                </th>
                <th>
                  default
                </th>
                <th>
                  description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>threshold</th>
                <td>Number</td>
                <td><code>0</code></td>
                <td>The threshold value for determining the scroll state.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content">
          <h2>LICENSE</h2>
          <p>
            <a href="https://github.com/potato4d/vue-fixed-header/blob/master/LICENSE">MIT</a>
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content">
          <h2>Source code</h2>
          <p>
            Hosted by <a href="https://github.com/potato4d/vue-fixed-header">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import 'bulma/css/bulma.css'
import FixedHeader from '../src/'

export default {
  components: {
    FixedHeader
  },
  data () {
    return {
      isFixed: false
    }
  },
  computed: {
    sampleCode() {
      return `<fixed-header :fixed.sync="isFixed">
  <div :class="{ 'is-fixed': isFixed }">
    Your Content
  </div>
</fixed-header>`
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
  min-height: 110vh;
  margin: 0;
  padding: 0;
}

.navbar {
  position: fixed;
  width: 100%;
  transition: background 0.15s ease-out;
  background: transparent;
  z-index: 10000;
}

.navbar.is-primary {
  background: transparent;
}

.navbar.is-light {
  background: #fff;
}

.hero.is-primary {
  background: #41B883;
}
</style>
