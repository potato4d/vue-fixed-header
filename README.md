# Vue Fixed Header
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors) [![NPM version](https://img.shields.io/npm/v/vue-fixed-header.svg?style=flat)](https://npmjs.com/package/vue-fixed-header) [![NPM downloads](https://img.shields.io/npm/dm/vue-fixed-header.svg?style=flat)](https://npmjs.com/package/vue-fixed-header) [![CircleCI](https://circleci.com/gh/potato4d/vue-fixed-header/tree/master.svg?style=shield)](https://circleci.com/gh/potato4d/vue-fixed-header/tree/master)

Simple and cross-browser friendly fixed header component for Vue.js.

![8d82f81b0f64d044ada918a7b9f3c574](https://user-images.githubusercontent.com/6993514/34456130-7981a894-edd2-11e7-8861-4745d85c8c96.gif)

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

## Props

### threshold: number

The threshold value for determining the scroll state.

```vue
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
