# Vue Fixed Header

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![donate: Patreon](https://img.shields.io/badge/donate-patreon-orange.svg?style=flat-square)](https://www.patreon.com/potato4d)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![NPM version](https://img.shields.io/npm/v/vue-fixed-header.svg?style=flat)](https://npmjs.com/package/vue-fixed-header)
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)
[![NPM downloads](https://img.shields.io/npm/dm/vue-fixed-header.svg?style=flat)](https://npmjs.com/package/vue-fixed-header)
[![codecov](https://codecov.io/gh/potato4d/vue-fixed-header/branch/master/graph/badge.svg)](https://codecov.io/gh/potato4d/vue-fixed-header)

Simple and cross-browser friendly fixed header component for Vue.js.

[![Image from Gyazo](https://i.gyazo.com/2511ffaabd325f76c8fe9343ba07fdcc.gif)](https://gyazo.com/2511ffaabd325f76c8fe9343ba07fdcc)

[![Edit vue-fixed-header demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/yvjoj937x1?fontsize=14)

<a href="https://patreon.com/potato4d">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" height="50">
</a>

## Install

```bash
yarn add vue-fixed-header
```

## Usage

### Use in Single File Component

```html
<template>
  <fixed-header>
    <div class="navbar">
      Your Content
    </div>
  </fixed-header>
</template>

<script>
import FixedHeader from 'vue-fixed-header'

export default {
  components: {
    FixedHeader
  }
}
</script>

<style>
.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}
</style>
```

### Attach classes

The Vue Fixed Header always assigns the `vue-fixed-header` CSS class to the slot's root element.
Also, when matching the fixed condition, we give the `vue-fixed-header - isFixed` CSS class.
These can also be changed with headerClass prop and fixedClass prop.

## Props

### threshold: number

The threshold value for determining the scroll state.

```html
<template>
  <fixed-header :fixed.sync="isFixed" :threshold="100">
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

### headerClass

CSS class for fixed-header root Element.
It is always attached to fixed header root Element.

- type: String,
- required: false
- default: 'vue-fixed-header'

### fixedClass

CSS class for fixed header.
When fixed-header position is relative, it removed to DOM Element.
When fixed-header position is fixed, it added to DOM Element.

- type: String
- required: false
- default: 'vue-fixed-header--isFixed'

## License

MIT &copy; [potato4d](https://github.com/potato4d)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/6993514?v=4" width="100px;"/><br /><sub><b>HANATANI Takuma</b></sub>](https://potato4d.me)<br />[💻](https://github.com/potato4d/vue-fixed-header/commits?author=potato4d "Code") [🐛](https://github.com/potato4d/vue-fixed-header/issues?q=author%3Apotato4d "Bug reports") [📖](https://github.com/potato4d/vue-fixed-header/commits?author=potato4d "Documentation") [💡](#example-potato4d "Examples") [💬](#question-potato4d "Answering Questions") [👀](#review-potato4d "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/8784712?v=4" width="100px;"/><br /><sub><b>EGOIST</b></sub>](https://patreon.com/egoist)<br />[🔧](#tool-egoist "Tools") | [<img src="https://avatars0.githubusercontent.com/u/13931503?v=4" width="100px;"/><br /><sub><b>Johnny Cavalcante</b></sub>](http://kavalcante.com)<br />[🐛](https://github.com/potato4d/vue-fixed-header/issues?q=author%3Akavalcante "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/3672769?v=4" width="100px;"/><br /><sub><b>James Wright</b></sub>](http://www.jamesandrewwright.com)<br />[🐛](https://github.com/potato4d/vue-fixed-header/issues?q=author%3Ajamesgfc "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/19405039?v=4" width="100px;"/><br /><sub><b>Sid</b></sub>](https://twitter.com/sbentifraouine)<br />[⚠️](https://github.com/potato4d/vue-fixed-header/commits?author=sidbentifraouine "Tests") |
| :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
