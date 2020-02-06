<template>
  <div id="app">
    <VueFixedHeader
      @change="updateFixedStatus"
      :threshold="Number(propsData.threshold)"
      :headerClass="propsData.headerClass"
      :fixedClass="propsData.fixedClass"
      :hideScrollUp="propsData.hideScrollUp"
    >
      <nav>
        <el-menu>
          <el-menu-item class="menu-brand" index="1">
            Fixed Header
          </el-menu-item>
        </el-menu>
      </nav>
    </VueFixedHeader>
    <div
      class="container"
      :class="{
        headerIsFixed: fixedStatus.headerIsFixed
      }"
    >
      <el-card>
        <h3 class="heading">
          vue-fixed-header debugging
        </h3>
        <el-form label-width="120px">
          <el-form-item label="threshold">
            <el-input type="number" v-model="formData.threshold"></el-input>
          </el-form-item>
          <el-form-item label="headerClass">
            <el-input type="text" v-model="formData.headerClass"></el-input>
          </el-form-item>
          <el-form-item label="fixedClass">
            <el-input type="text" v-model="formData.fixedClass"></el-input>
          </el-form-item>
          <el-form-item label="hideScrollUp">
            <el-checkbox v-model="formData.hideScrollUp">
              hideScrollUp
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <div class="justify-right">
              <el-button type="primary" @click="handleClickUpdate">
                Update
              </el-button>
              <el-button type="secondary" @click="handleClickCancel">
                Cancel
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <VueFixedHeader
      :threshold="0"
      headerClass="fixed-footer"
      fixedClass="isFixed"
    >
      <footer>
        <el-menu class="footer-content" style="align-items: center;">
          <div class="flex-1"></div>
          <el-menu-item class="fixed-footer__item" index="1">
            <b> isFixed: {{ fixedStatus.headerIsFixed }} </b>
          </el-menu-item>
          <span class="separator">/</span>
          <el-menu-item class="fixed-footer__item" index="1">
            <b> threshold: {{ propsData.threshold }} </b>
          </el-menu-item>
          <span class="separator">/</span>
          <el-menu-item class="fixed-footer__item" index="1">
            <b> headerClass: {{ propsData.headerClass }} </b>
          </el-menu-item>
          <span class="separator">/</span>
          <el-menu-item class="fixed-footer__item" index="1">
            <b> fixedClass: {{ propsData.fixedClass }} </b>
          </el-menu-item>
          <span class="separator">/</span>
          <el-menu-item class="fixed-footer__item" index="1">
            <b> hideScrollUp: {{ propsData.hideScrollUp }} </b>
          </el-menu-item>
        </el-menu>
      </footer>
    </VueFixedHeader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueFixedHeader from './vue-fixed-header'

const createData = () => ({
  threshold: 74,
  headerClass: 'vue-fixed-header',
  fixedClass: 'vue-fixed-header--isFixed',
  hideScrollUp: false
})

export default Vue.extend({
  components: {
    VueFixedHeader
  },
  data() {
    return {
      fixedStatus: {
        headerIsFixed: false
      },
      propsData: { ...createData() },
      formData: { ...createData() }
    }
  },
  methods: {
    updateFixedStatus(next: boolean) {
      this.fixedStatus.headerIsFixed = next
    },
    handleClickUpdate() {
      this.propsData = { ...this.formData }
    },
    handleClickCancel() {
      this.formData = { ...this.propsData }
    }
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

.flex-1 {
  flex: 1;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.menu-brand {
  pointer-events: none !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 16px;
}

nav {
  display: flex;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: #fff;
  border-bottom: solid 1px #e5e5e5;
}

nav.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-74px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.container.headerIsFixed {
  transform: translateY(56px) !important;
}

.heading {
  margin-top: 0;
  padding-top: 0;
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

.fixed-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.fixed-footer__item {
  color: #e5e5e5 !important;
  pointer-events: none;
}

.footer-content {
  background: #282c34 !important;
}

.justify-right {
  display: flex;
  justify-content: flex-end;
}

.separator {
  color: #ffffff50;
}
</style>
