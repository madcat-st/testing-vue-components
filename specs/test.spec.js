import { mount } from '@vue/test-utils'
import TestComponent from '@/test'

test('Mount a vue component', () => {
// const wrapper = mount(TestComponent)
const wrapper = mount(TestComponent, {
  propsData: {
    value: 'Something new'
  }
})

//console.log(wrapper)
expect(wrapper.html()).toMatchSnapshot()
})
