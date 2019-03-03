# v2-fixed-header

## [data] fixed

- type: Variable
- required: true

```html
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

## [props] threshold

- type: Number
- required: false
- default: 0

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
