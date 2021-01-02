<template>
    <ul class="product-list">

        <!-- <p v-if="$fetchState.pending">Loading events...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p> -->

        <li v-bind:key="event.id" v-for="event of events" class="product-item">
          
          <img :src="event.cover_image_url" class="product-image" />
          
          <div class="product-body">
            <h2 class="product-title">{{ event.title }}</h2>
            <p class="product-description">{{ event.description }}</p>
            <div class="product-footer">
              <p class="product-price">Price: {{ event.retail_price.formatted_value }}</p>
              <button @click="$emit('add-to-cart', event)">Add to cart</button>
            </div>
          </div>
        </li>
      </ul>
</template>

<script>
export default {
props: ['event', 
// 'isInCart'
],
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
        async getEvents() {
            let res = await this.$store.dispatch("getEvents");
            this.events = res.data.data.events;
        },

        mounted() {
            this.getEvents();
        }
    }
}
</script>