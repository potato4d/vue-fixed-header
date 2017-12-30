# Vue Fixed Header

[![NPM version](https://img.shields.io/npm/v/vue-fixed-header.svg?style=flat)](https://npmjs.com/package/vue-fixed-header) [![NPM downloads](https://img.shields.io/npm/dm/vue-fixed-header.svg?style=flat)](https://npmjs.com/package/vue-fixed-header) [![CircleCI](https://circleci.com/gh/potato4d/vue-fixed-header/tree/master.svg?style=shield)](https://circleci.com/gh/potato4d/vue-fixed-header/tree/master)

Simple and cross-browser friendly fixed header component for Vue.js.

## Install

```bash
yarn add vue-fixed-header
```

## Usage

```vue
<template>
  <fixed-header :fixed.sync="isFixed">
    <div :class="{ 'is-fixed': isFixed }">
      Your Content
    </div>
  </fixed-header>
</template>

<script>
import FixedHeader from 'vue-fixed-header'

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
```

## License

MIT &copy; [potato4d](https://github.com/potato4d)
