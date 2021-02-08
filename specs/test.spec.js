import { mount, shallowMount } from '@vue/test-utils'
import TestComponent from '@/test'
import List from '@/list'

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

test('ListComponent Shallow', () => {
  console.log(mount(List).html())
  console.log(shallowMount(List).html())
})
