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
        expect(wrapper.title).toContain('Events')
    })
})

