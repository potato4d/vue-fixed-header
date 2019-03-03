# v2-fixed-header

This is a document on vue-fixed-header in v2.x era.

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
