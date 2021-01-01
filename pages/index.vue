<template>
  <div class="container">
    <div>
      <Navbar />
    </div>
    
    <p v-if="$fetchState.pending">Loading events...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>

    <div v-else>
      <h1>Events</h1>
      <ul class="product-list">
        <li v-bind:key="event.id" v-for="event of events" class="product-item">
          
          <img :src="event.cover_image_url" class="product-image" />
          
          <div class="product-body">
            <h2 class="product-title">{{ event.title }}</h2>
            <p class="product-description">{{ event.description }}</p>
            <p class="product-price">Price: {{ event.retail_price.formatted_value }}</p>
            <!-- <fa :icon="['fas', 'dollar-sign']" /> -->
            <button style="color: blue;">Add to car<i class="fab fa-accessible-icon"></i></button>
          </div>
        </li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        events: []
      }
    },
    async fetch() {
      this.events = await fetch(
        'https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0&currency=EUR'
      ).then(res => res.json())
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


</style>
