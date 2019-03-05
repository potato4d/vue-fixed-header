# Props

## threshold

- type: Number
- required: false
- default: 0

The threshold value for determining the scroll state.

```html
<template>
  <div id="app">
    <VueFixedHeader :threshold="100">
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
  }
})
</script>
```

## headerClass

- type: String,
- required: false
- default: 'vue-fixed-header'

CSS class for fixed-header root Element.
It is always attached to fixed header root Element.

```html
<template>
  <div id="app">
    <VueFixedHeader headerClass="navbar">
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
  }
})
</script>
```

## fixedClass

- type: String
- required: false
- default: 'vue-fixed-header--isFixed'

CSS class for fixed header.
When fixed-header position is relative, it removed to DOM Element.
When fixed-header position is fixed, it added to DOM Element.

```html
<template>
  <div id="app">
    <VueFixedHeader fixedClass="is-fixed">
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
  }
})
</script>
```
