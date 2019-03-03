import Vue, { CreateElement, VNode } from 'vue'
import { getTargetTag } from '../utils/getTargetTag'

type LocalData = {
  qs: any,
  check: any,
  tag: any,
  isFixed: boolean
}

export default Vue.extend({
  props: {
    threshold: {
      required: false,
      type: Number,
      default: 0
    },
    headerClass: {
      required: false,
      type: String,
      default: 'vue-fixed-header',
    },
    fixedClass: {
      required: false,
      type: String,
      default: 'vue-fixed-header--isFixed'
    }
  },

  data() {
    return {
      qs: null,
      check: null,
      tag: null,
      isFixed: false
    } as LocalData
  },

  mounted() {
    this.main()
    this.registerEvent()
  },

  beforeDestroy() {
    this.removeEvent()
  },

  methods: {
    main() {
      this.qs = (e: string) => document.querySelector(e)
      this.tag = getTargetTag(navigator.userAgent)
      this.check = () => {
        const { qs, tag, threshold } = this
        if (!tag) {
          return
        }
        console.log(
          tag
        )
        // if (this.isFixed !== qs(tag).scrollTop > threshold) {
          this.isFixed = qs(tag).scrollTop > threshold
          this.$forceUpdate()
        // }
      }
    },
    registerEvent() {
      window.addEventListener('scroll', this.check)
    },
    removeEvent() {
      window.removeEventListener('scroll', this.check)
    }
  },

  render(h: CreateElement): VNode {
    const children = this.$slots.default
    if (!children) {
      return h()
    }

    const _child = [...children][0] as VNode
    if (!_child) {
      return h()
    }

    const child = h(_child.tag, _child.data, _child.children || _child.text)

    child.data = child.data || { class: '' }

    // string to string[]
    if (typeof child.data.class === 'string') {
      child.data.class = child.data.class.split(' ')
    }

    // string[] to { K: V }
    if (Array.isArray(child.data.class)) {
      child.data.class = [...child.data.class].reduce((a, b) => {
        return {
          ...a,
          [b]: true
        }
      }, {})
    }

    child.data.class = {
      ...child.data.class,
      [this.headerClass]: true,
      [this.fixedClass]: !!this.isFixed
    }

    child.data.class = Object.entries(child.data.class).map(([k, v]) => {
      return v ? k : null
    }).filter((v) => v).join(' ')

    return child
  }
})
