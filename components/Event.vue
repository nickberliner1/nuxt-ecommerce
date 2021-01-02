<template>
    <ul class="product-list">

        <!-- <p v-if="$fetchState.pending">Loading events...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p> -->

        <li class="product-item">

          <img :src="event.cover_image_url" class="product-image" />
          
          <div class="product-body">
            <h2 class="product-title">{{ event.title }}</h2>
            <p class="product-description">{{ event.description }}</p>
            <div class="product-footer">
              <p class="product-price">Price: {{ event.retail_price.formatted_value }}</p>
              <button 
                
                @click="$emit('add-to-cart', event)"
              >
                {{ isInCart ? 'Added' : 'Add to cart' }}
              </button>
            </div>
          </div>
        </li>
      </ul>
</template>

<script>
export default {
props: ['event', 
'isInCart'
],
// data() {
//     return {
//       events: [],
//       cart: []
//     }
//   },
//   async fetch() {
//     this.events = await fetch(
//       'https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0&currency=EUR'
//     ).then(res => res.json());

//   },
//     methods: {
//         addToCart(event) {
//             this.cart.push(event);
//         },
//         async getEvents() {
//             let res = await this.$store.dispatch("getEvents");
//             this.events = res.data.data.events;
//         },

//         mounted() {
//             this.getEvents();
//         }
//     }
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

// .product-list {
//   display: flex;
//   flex-wrap: wrap;
//   align-items: stretch;
//   justify-content: center;
//   padding-right: 5vw;
//   padding-left: 5vw;

// }

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
