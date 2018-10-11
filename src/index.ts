import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class VueFixedHeader extends Vue {
  $: (selector: string) => any = () => null
  check: () => void = () => null
  tag: string | null = null
  @Prop({ default: 0, type: Number })
  threshold!: number

  mounted() {
    this.$ = (e: string) => document.querySelector(e)
    this.tag = this.getTargetTag()
    this.main()
  }

  getTargetTag() {
    if (navigator.userAgent.includes('Edge')) return 'body'
    if (navigator.userAgent.includes('Firefox/') && ((+navigator.userAgent.split('Firefox/')[1]) >= 62)) {
      return 'html'
    }
    if (
      !(window as any).chrome &&
      'WebkitAppearance' in (document.documentElement as any).style
    )
      return 'body'
    return 'html'
  }

  registerEvent() {
    window.addEventListener('scroll', this.check)
  }

  removeEvent() {
    window.removeEventListener('scroll', this.check)
  }

  main() {
    this.check = () => {
      const { $, tag, threshold } = this
      if (!tag) {
        return
      }
      this.$emit('update:fixed', $(tag).scrollTop > threshold)
    }
    this.registerEvent()
  }

  beforeDestroy() {
    this.removeEvent()
  }

  render() {
    const children = this.$slots.default
    return children[0]
  }
}
