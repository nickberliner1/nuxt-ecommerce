import { shallowMount, mount } from "@vue/test-utils";
import Event from "../components/Event.vue";

describe('Event', () => {
    it('Returns products from API', () => {
        const wrapper = mount(Event, {
            propsData: {
                event: ['Rome'],
                price: ['24']

            }
        })
        expect(wrapper.text()).toContain('Add to Cart')
    })
})

// describe('Event', () => {
//     test('is a Vue instance', () => {
//       const wrapper = shallowMount(Event), {
//           propsData: {
//               event:
//             }
//       }
//       expect(wrapper.vm).toBeTruthy()
//     })
//   })

// describe('Event', () => {
//     it('renders each product retrieved from the API', () => {
//         const wrapper = shallowMount(Event, {
//             data() {
//                 return {
//                     events: []
//                 }
//             }
//         })
//     })
//   })

// // const factory = () => {
// //   return shallowMount(Event, {
// //   });
// // };

// // describe("Event", () => {
// //   test("mounts properly", () => {
// //     const wrapper = factory();
// //     expect(wrapper.isVueInstance()).toBeTruthy();
// //   });

// //   test("renders properly", () => {
// //     const wrapper = factory();
// //     expect(wrapper.html()).toMatchSnapshot();
// //   });
// // });

// const factory = () => shallowMount(Event, {
//     props: ['event', 'isInCart']
// })

// describe('Event', () => {
//     test('mounts properly', () => {
//         const wrapper = factory()
//         expect(wrapper.vm).toBeTruthy
//     })

//     test('renders properly', () => {
//         const wrapper = factory()
//         expect(wrapper.html()).toMatchSnapshot
//     })

//     test('calls addToCart on click', () => {
//         const addToCartMock = jest.spyOn(Event.methods, 'addToCart')
//         const wrapper = factory()
//         wrapper.find('b-button').trigger('click')
//         expect(addToCartMock).toHaveBeenCalled()
//         addToCartMock.mockRestore()
//     })

//     test('isInCart is true after click', () => {
//         const wrapper = factory()
//         wrapper.find('b-button').trigger('click')
//         expect(wrapper.vm.isInCart).toBe(true)
//     })
// })


