import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

function getTargetTag() {
  if (navigator.userAgent.includes('Edge')) return 'body'
  if (
    !(window as any).chrome &&
    'WebkitAppearance' in (document.documentElement as any).style
  )
    return 'body'
  return 'html'
}

@Component
export default class VueFixedHeader extends Vue {
  $: (selector: string) => any = () => null
  check: () => void = () => null
  tag: string | null = null
  @Prop({ default: 0, type: Number })
  threshold!: number

  mounted() {
    this.$ = (e: string) => document.querySelector(e)
    this.tag = getTargetTag()
    this.main()
  }

  main() {
    this.check = () => {
      const { $, tag, threshold } = this
      if (!tag) {
        return
      }
      this.$emit('update:fixed', $(tag).scrollTop > threshold)
    }
    window.addEventListener('scroll', this.check)
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.check)
  }

  render() {
    const children = this.$slots.default
    return children[0]
  }
}
