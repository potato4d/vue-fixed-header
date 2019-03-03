require('jsdom-global')()
import { shallowMount } from '@vue/test-utils'
import VueFixedHeader from '../../src/components/v2-fixed-header'

describe('src/components/v2-fixed-header', () => {
  test('renders properly with it slot', () => {
    const message = 'My awesome content!'
    const MyAwesomeContent = `<div>${message}</div>`
    const component = shallowMount(VueFixedHeader, {
      slots: {
        default: MyAwesomeContent
      }
    })
    expect(component.text()).toEqual(message)
  })
})
