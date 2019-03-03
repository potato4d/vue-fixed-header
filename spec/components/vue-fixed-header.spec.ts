require('jsdom-global')()
import { shallowMount } from '@vue/test-utils'
import VueFixedHeader from '../../src/components/vue-fixed-header'

describe('src/components/vue-fixed-header', () => {
  test('renders properly with it slot', () => {
    const message = 'My awesome content!'
    const component = shallowMount(VueFixedHeader, {
      slots: {
        default: `<div>${message}</div>`
      }
    })
    expect(component.text()).toEqual(message)
  })
})
