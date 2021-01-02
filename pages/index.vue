<template>
  <div class="container">
    <div>
      <Navbar />
    </div>
    <div>
      <h1>Events</h1>

      <p v-if="$fetchState.pending">Loading events...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>

      <div v-else :key="event.id" v-for="event in events">
        <Event
          :isInCart="isInCart(event)"
          v-on:add-to-cart="addToCart(event)"
          :event="event"
        />
      </div>
      <cart 
        v-on:pay="pay()" 
        v-on:remove-from-cart="removeFromCart($event)"
        :items="cart"
      ></cart>
      <button @click="$fetch">Refresh</button>
    </div>


  </div>
</template>

<script>
import Cart from '../components/Cart.vue';
import Event from '../components/Event.vue';

export default {
  components: { 
    Event, 
    Cart 
  },
  data() {
    return {
      events: [],
      cart: []
    }
  },
  async fetch() {
    this.events = await fetch(
      'https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0&currency=EUR'
    ).then(res => res.json());

  },

  methods: {

    addToCart(event) {
      this.cart.push(event);
    },

    isInCart(event) {
      const item = this.cart.find(item => item.id === event.id);
      if (item) {
        return true;
      }
      return false;
    },
    removeFromCart(event) {
      this.cart = this.cart.filter(item => item.id !== event.id);
    },

    pay() {
      this.cart = [];
      alert("Thanks! Shopping successfully completed. ");
    }


        // async getEvents() {
        //     let res = await this.$store.dispatch("getEvents");
        //     this.events = res.data.data.events;
        // },

        // mounted() {
        //     this.getEvents();
        // }
   
  }
}
</script>


<style lang="scss">

ul, li {
  list-style-type: none;
  margin-top: 50px;
  margin-bottom: 50px;
}

.product-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.container {
  /* margin: 0 auto; */
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  padding-right: 5vw;
  padding-left: 5vw;

}

.product-list > .product-item {
    flex: 1 1 30%; /*grow | shrink | basis */
    padding: 20px;
    margin: 20px;
    border: 2px solid gray;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.151);
}

.product-footer {
  display: flex-end;
}

</style>
