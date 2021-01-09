<template>


  <div class="container">
    <div class="header">
		
		<logo class="logo">
		</logo>
		
        <cart 
          v-on:pay="pay()" 
          v-on:remove-from-cart="removeFromCart(event)"
          :items="cart"
        ></cart>
    </div>

    <div class="main-body">
      
		<!-- <p v-if="$fetchState.pending">Loading events...</p>
		<p v-else-if="$fetchState.error">An error occurred :(</p>

		<div v-else class="products"> -->
			<div class="products">

			<div>
				<div class="title">
					<h2>Events</h2>
					
					<div class="toggle-box">
					
					<label class="label toggle">
						<h3>EN</h3>
						<input 
							type="checkbox" 
							class="toggle_input" 
							@click="italian = !italian" 
						/>
						

						<div class="toggle-control">
							<h4>🇬🇧</h4>
							<h4>🇮🇹</h4>
						</div>
						<h3>IT</h3>
					</label>
					
				</div>
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

			

			<ul v-if="this.apiLoaded" class="product-list">
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
				rounded
				:total="length"
				:current.sync="currentPage"
				:per-page="perPage"
			></b-pagination>
		</div>


      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';
import Cart from '../components/Cart.vue';
import Event from '../components/Event.vue';
import { pagination } from 'buefy';
import axios from '@nuxtjs/axios';

export default {
  components: { 
    Logo,
    Event, 
	Cart,
	pagination
  },
  data() {
    return {
      events: [],
      cart: [],
      currentPage: 1,
      perPage: 6,
      totalRows: this.length,
	  totalEvents: 0,
	  apiLoaded: false,
	  italian: true
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

//   async asyncData({ $axios }) {
// 	  const events = await $axios.$get(`https://api.musement.com/api/v3/venues/164/activities?&page=${currentPage}&offset=0`)
// 	  .catch((error) => {
// 			console.error(error.response);
// 			if ( error.message === "Network Error" ) {
// 				this.alert.show = 1;
// 				this.alert.message = error.message + ': Please try again later';
// 			}
// 		});
// 	  return {
// 		  events
// 	  }
//   },

  methods: {

	async fetchData() {
      this.events = await fetch(
	  `https://api.musement.com/api/v3/venues/164/activities?&page=${this.currentPage}&offset=0`,
	  {
		  "method": "GET",
		  "headers": {
			  "content-type": "application/json",
			  "accept-language": `${this.italian ? 'it' : 'en'}`,
			  "x-musement-currency": "EUR",
		  }
	  }
	  ).then(res => res.json())
	  .catch(error => {
		  console.log(error);
	  });
  },

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

  watch: {
	  italian() {
		  this.fetchData();
	  }
  },

  mounted() {
	  this.fetchData();
	  this.apiLoaded = !this.apiLoaded;	
  },
  
}
</script>


<style lang="scss">
$color_checkbox_success:#4cd964;
$color_checkbox_default:#c54de9;
$transition: .3s cubic-bezier(0.95, 0.05, 0.795, 0.035);
$width: 4em;
$height: $width/2;

.label {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: space-evenly;
	}
.toggle {
  
   	.toggle-control{
     transition: $transition;
      width: $width;
      height: $height;
      display: flex;
	  justify-content: space-evenly;
	  align-items: center;
	border: none;

     border-radius: $height;
     background-color: $color_checkbox_default;
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

body {
	margin: 0;
	padding: 0;
	background-color: #292929;
	height: 100%;
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
  
}

.title {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: baseline;

	h3 {
		margin-right: 20px;
		margin-left: 20px;
		color: rgb(223, 223, 223);
		margin-bottom: 20px;
	}

	label {
		display: flex;
		align-items: baseline;
	}
}


.product-list {
	margin-top: 0;
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
	margin: -2rem;
}


</style>