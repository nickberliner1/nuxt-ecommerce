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
