// We need this in order to use window on our component
require('jsdom-global')()
// We don't need to render sub-components, so we use shallowMount
import { shallowMount } from '@vue/test-utils'
// The component that we will test 😁
import VueFixedHeader from './'

describe('VueFixedHeader component', () => {
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
