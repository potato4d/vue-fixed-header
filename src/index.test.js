import { mount } from 'vue-test-utils'
import FixedHeader from './'

test('it works', () => {
  const wrapper = mount(FixedHeader)
  expect(wrapper.isVueInstance()).toBe(true)
})
