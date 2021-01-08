import { shallowMount } from "@vue/test-utils";
import Cart from "../components/Cart.vue";

describe('Cart', () => {
    test('is a Vue instance', () => {
      const wrapper = shallowMount(Cart)
      expect(wrapper.vm).toBeTruthy()
    })
  })