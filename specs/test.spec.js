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

// test('ListComponent Shallow', () => {
//   console.log(mount(List).html())
//   console.log(shallowMount(List).html())
// })

test('ListComponent setData', async () => {
  const wrapper = mount(List)
  const movies = wrapper.vm.marvelMovies
  const newData = { marvelMovies: [...movies, 'TheDuck']}
  await wrapper.setData(newData)
  console.log("Newdata:", newData)
  console.log(wrapper.html())
  expect(wrapper.html()).toMatchSnapshot()


})
