export { default as Cart } from '../../components/Cart.vue'
export { default as Event } from '../../components/Event.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyCart = import('../../components/Cart.vue' /* webpackChunkName: "components/Cart" */).then(c => c.default || c)
export const LazyEvent = import('../../components/Event.vue' /* webpackChunkName: "components/Event" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
