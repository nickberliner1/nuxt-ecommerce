import { shallowMount, mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

// const factory = () => {
//   return shallowMount(Event, {
//   });
// };

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})

// describe('Logo', () => {
//   test("mounts properly", () => {
//     const wrapper = factory();
//     expect(wrapper.isVueInstance()).toBeTruthy();
//   });

//   test("renders properly", () => {
//     const wrapper = factory();
//     expect(wrapper.html()).toMatchSnapshot();
//   });
// });