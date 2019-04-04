import Vue, { CreateElement, VNode } from 'vue'
import { getTargetTag } from '../utils/getTargetTag'

type LocalData = {
  qs: any
  check: any
  tag: any
  isFixed: boolean
  lastScrollTop: Number
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
      default: 'vue-fixed-header'
    },
    fixedClass: {
      required: false,
      type: String,
      default: 'vue-fixed-header--isFixed'
    },
    hideScrollUp: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  data(): LocalData {
    return { qs: null, check: null, tag: null, isFixed: false, lastScrollTop: 0 }
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
        const { tag, qs, threshold } = this
        const { offsetHeight } = this.$el as HTMLElement
        if (tag) {
          this.isFixed =
            !this.hideScrollUp && this.isFixed
              ? qs(tag).scrollTop > threshold
              : window.pageYOffset > this.lastScrollTop &&
                window.pageYOffset > offsetHeight
          this.$emit('change', this.isFixed)
          this.$forceUpdate()
          this.lastScrollTop = window.pageYOffset
        }
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
    if (!children || !([...children][0] as VNode)) {
      return h()
    }

    const _child = [...children][0] as VNode
    const child = h(_child.tag, _child.data, _child.children || _child.text)

    child.data = child.data || { class: '' }

    if (typeof child.data.class === 'string') {
      child.data.class = child.data.class.split(' ')
    }

    if (Array.isArray(child.data.class)) {
      child.data.class = [...child.data.class].reduce(
        (a, b) => ({ ...a, [b]: true }),
        {}
      )
    }

    child.data.class = {
      ...child.data.class,
      [this.headerClass]: true,
      [this.fixedClass]: !!this.isFixed
    }

    child.data.class = Object.entries(child.data.class)
      .map(([k, v]) => (v ? k : null))
      .filter(v => v)
      .join(' ')

    return child
  }
})
