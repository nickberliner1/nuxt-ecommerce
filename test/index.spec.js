import { mount } from '@vue/test-utils'
import index from "../pages/index.vue";

describe('index', () => {
    it('has data', () => {
        expect(typeof index.data).toBe('function')
    })
})

describe('Mounted App', () => {
    const wrapper = mount(index);

    it('renders correctly with different data', async () => {
        wrapper.setData({ currentPage: 5, perPage: 10 })
        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('Pay Now')
      })
})


// const factory = () => shallowMount(index, {
//     propsData: {
//         events: [],
//         cart: [],
//         currentPage: 1,
//         perPage: 6,
//         totalRows: this.length,
//         totalEvents: 0,
//         apiLoaded: false
//     }
// })

// describe('index', () => {
//     test('mounts properly', () => {
//         const wrapper = factory()
//         expect(wrapper.vm).toBeTruthy
//     })

//     test('renders properly', () => {
//         const wrapper = factory()
//         expect(wrapper.html()).toMatchSnapshot
//     })

//     test('calls fetch on click', () => {
//         const fetchMock = jest.spyOn(index.methods, 'fetch')
//         const wrapper = factory()
//         wrapper.find('b-button').trigger('click')
//         expect(fetchMock).toHaveBeenCalled()
//         fetchMock.mockRestore()
//     })

//     // test('isInCart is true after click', () => {
//     //     const wrapper = factory()
//     //     wrapper.find('b-button').trigger('click')
//     //     expect(wrapper.vm.isInCart).toBe(true)
//     // })
// })


