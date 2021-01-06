<template>


  <div class="container">
    <div class="header">
        <logo>
        </logo>
        <cart 
          v-on:pay="pay()" 
          v-on:remove-from-cart="removeFromCart(event)"
          :items="cart"
        ></cart>
    </div>

    <div class="main-body">
      
      <p v-if="$fetchState.pending">Loading events...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>

      <div v-else class="products">

      <div>
        <h1>Events</h1>
        <button @click="$fetch">Refresh</button>
      </div>


    <!-- <b-pagination 
      :total-rows="totalRows" 
      v-model="currentPage" 
      :per-page="perPage" 
      @input="getData(currentPage)"      
    ></b-pagination> -->
<!-- <b-table show-empty :items="events" :current-page="currentPage" :per-page="0"></b-table> -->

<b-pagination
    :total="length"
    :current.sync="currentPage"
    :per-page="perPage"
  >
  </b-pagination>
        <!-- THIS WORKS -->
        <ul class="product-list">
          <li :key="event.id" v-for="event in paginatedItems" class="product-item">
            
            <event
              :isInCart="isInCart(event)"
              v-on:add-to-cart="addToCart(event)"
              :event="event"
            ></event>

          </li>
        </ul>





      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';
import Cart from '../components/Cart.vue';
import Event from '../components/Event.vue';

export default {
  components: { 
    Logo,
    Event, 
    Cart 
  },
  data() {
    return {
      events: [],
      cart: [],
      currentPage: 1,
      perPage: 6,
      totalRows: this.length,
      totalEvents: 0,
      apiLoaded: false
    }
  },

  computed: {
    length() {
      if ( !this.apiLoaded ) {
        return null
      } else {
        return this.events.length;
      }
    },

    paginatedItems() {
        let page_number = this.currentPage;
        return this.events.slice(page_number * this.perPage, (page_number + 1) * this.perPage);
        
      }

  },

  async fetch() {
      this.events = await fetch(
      `https://api.musement.com/api/v3/venues/164/activities?limit=130&page=${this.currentPage}&offset=0&currency=EUR`
      ).then(res => res.json());
  },



  // async asyncData({ $axios }) {
  //   const events = await $axios.$get(`https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0&currency=EUR`);

  //   // const sixResults = await fetch()
  //   //   .limit(6)
  //   //   .fetch();

  //   // const nextPage = sixResults.length === 6;
  //   // const results = nextPage ? sixResults.slice(0, -1) : sixResults;
  //   return { events, cart: [] };
  // },


  methods: {
    // async fetchData() {
    //   this.events = await fetch(
    //   `https://api.musement.com/api/v3/venues/164/activities?page=${this.currentPage}&limit=${this.perPage}&offset=0&currency=EUR`
    //   ).then(res => {
    //     this.totalEvents = parseInt(res.headers.get('x-total-count'), 10)
    //     return res.json()
    //   })
    //   .then(events => events)
    // },

    // paginate(page_size, page_number) {
    //         let itemsToParse = this.events;
    //         this.paginatedItems = itemsToParse.slice(
    //             page_number * page_size,
    //             (page_number + 1) * page_size
    //         );
    //     },

    // onPageChanged(page) {
    //     this.paginate(this.perPage, page - 1);
    // },

    addToCart(event) {
      this.cart.push(event);
    },

    isInCart(event) {
      if (this.cart.includes(event)) {
        return true;
      }
      return false;
    },

    pay() {
      this.cart = [];
      alert("Thanks! Shopping successfully completed. ");
    }
   
  },

  mounted() {
    // this.fetchData().catch(error => {
    //   console.log(error);
    // })
    // this.paginate(this.perPage, 0);
    this.apiLoaded = true;
  },

  // watch: {
  //   currentPage: {
  //     handler: function(value) {
  //       this.fetchData().catch(error => {
  //         console.log(error);
  //       })
  //     }
  //   }
  // }


}
</script>


<style lang="scss">

ul, li {
  list-style-type: none;
  margin-top: 50px;
  margin-bottom: 50px;
}

// .main-body {
//   display: flex;
//   justify-content: space-evenly;
// }
.header {
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(148, 148, 202);
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  padding-right: 5vw;
  padding-left: 5vw;
}  

.product-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px;
}

.product-item {
    display: flex;
    
    flex: 1 1 30%; /* grow | shrink | basis */
    padding: 20px;
    margin: 20px;
    border: 2px solid gray;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.151);
}

.cart {

}

</style>