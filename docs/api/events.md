# Events

## change

- type: Boolean

When the state changes, it returns the boolean value.

```html
<template>
  <div id="app">
    <VueFixedHeader @change="handleChangeFixedHeader">
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

<script>
import Vue from 'vue'
import VueFixedHeader from './vue-fixed-header'

export default Vue.extend({
  components: {
    VueFixedHeader
  },
  methods: {
    handleChangeFixedHeader(isFixed) {
      console.log(isFixed)
    }
  }
})
</script>
```
