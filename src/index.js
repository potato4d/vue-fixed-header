let $
let tag

export default {
  name: 'fixed-header',

  mounted () {
    $ = (e) => document.querySelector(e)
    tag = ( !window.chrome && 'WebkitAppearance' in document.documentElement.style ) ? 'body' : 'html'
    this.main()
  },

  methods: {
    main () {
      this.check = () => {
        this.$emit('update:fixed', !!$(tag).scrollTop)
      }
      window.addEventListener('scroll', this.check)
    }
  },

  beforeDestory () {
    window.removeEventListener('scroll', this.check)
  },

  render(h) {
    const children = this.$slots.default
    return children[0]
  }
}
