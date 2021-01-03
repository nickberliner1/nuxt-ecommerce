<template>
    <div class="navbar-container">
        
        <logo></logo>    
        <!-- <cart 
          v-on:pay="pay()" 
          v-on:remove-from-cart="removeFromCart(event)"
          :items="cart"
        ></cart> -->
    </div>
</template>

<script>
import Cart from './Cart';

export default {
//     components: {
//         Cart
//     },

//     props: ['events'],

//     data() {
//         return {
//         events: [],
//         cart: [],
//         page: 1
//         }
//     },

//   methods: {
//       addToCart(event) {
//       this.cart.push(event);
//     },
//   }
}
</script>

<style scoped>
    .navbar-container {
        min-height: 100px;
        display: flex;
        justify-content: space-between;
    }
</style>