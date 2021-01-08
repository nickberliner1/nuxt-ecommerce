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
				<!-- <button @click="$fetch">Refresh</button> -->
				<b-button 
					@click="$fetch"
				>
					<span>Refresh</span>
				</b-button>

				<div class="toggle-box">
					<h3>EN</h3>
					<label class="label toggle">
						<input type="checkbox" class="toggle_input" @click="$fetch" @input="changeItalian()" />
						<div class="toggle-control"></div>
					</label>
					<h3>IT</h3>
				</div>

				<div class="pagination">
					<b-pagination
						rounded
						:total="length"
						:current.sync="currentPage"
						:per-page="perPage"
					></b-pagination>
				</div>
			</div>

			

			<ul class="product-list">
				<li :key="event.id" v-for="event in paginatedItems" class="product-item">          
					<event
					:isInCart="isInCart(event)"
					v-on:add-to-cart="addToCart(event)"
					:event="event"
					></event>
				</li>
			</ul>

		<div class="pagination">
			<b-pagination
				:total="length"
				:current.sync="currentPage"
				:per-page="perPage"
			>
			</b-pagination>
		</div>


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
        let pageNumber = this.currentPage;
		return this.events.slice(
				pageNumber * this.perPage, 
				(pageNumber + 1) * this.perPage);
        
      }

  },

  async fetch() {
      this.events = await fetch(
	  `https://api.musement.com/api/v3/venues/164/activities?&page=${this.currentPage}&offset=0`,
	  {
		  "method": "GET",
		  "headers": {
			  "content-type": "application/json",
			  "accept-language": "it",
			  "x-musement-currency": "EUR",
		  }
	  }
      ).then(res => res.json());
  },

  methods: {

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
    this.apiLoaded = true;
  },

}
</script>


<style lang="scss">
$color_checkbox_success:#4cd964;
$color_checkbox_default:#8E8E93;
$transition: .3s cubic-bezier(0.95, 0.05, 0.795, 0.035);
$width: 4em;
$height: $width/2;

.toggle{
  
   .toggle-control{
     transition: $transition;
      width: $width;
      height: $height;
      display: block;
     border: 2px solid $color_checkbox_default;
     border-radius: $height;
     background-color: rgba(black,.06);
     position: relative;
     &:after{
       transition: $transition;
       content: "";
       width: $width/2;
       height: $height;
       display: block;
       background-color: #fff;
       border-radius: 50%;
       box-shadow: 0 1px 2px rgba(black, .4),0 3px 2px rgba(black,.4);
       position: absolute;
       top: 0;
       left: 0;
     }
   }
   
  input{
    display: none;
    &:checked + .toggle-control{
      border-color: $color_checkbox_success;
      background-color: $color_checkbox_success;
      &:after{
        left: $width/2;
      }
    }
  }
}
  
  .toggle_input{
   
  }

body {
	background-color: #292929;
}

h1, h2, p {
	color: #e2e2e2;
}

ul, li {
  list-style-type: none;
  margin-top: 50px;
  margin-bottom: 50px;
}

.pagination-link {
	color: white;
}

.header {
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(199, 199, 219);
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
  border: 0.5px solid rgb(199, 199, 199);
}

.product-item {
    display: flex;
    flex: 1 1 30%;  /* grow | shrink | basis */
    padding: 20px;
    margin: 20px;
	min-width: 400px;
	background-color: #121212;
    border: 1px solid gray;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(145, 145, 145, 0.151);
}

.pagination {
    display: flex;
    justify-content: space-evenly;
}


</style>