# About this library

## How to install

```bash
yarn add vue-fixed-header
```

## Simple Usage

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
