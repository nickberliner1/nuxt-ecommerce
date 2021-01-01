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
          {{ event.title }}
          <img :src="event.cover_image_url" class="product-image" />
          <p>{{ event.retail_price.formatted_value }}</p>
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
  align-items: center;
  justify-content: center;
  padding-right: 5vw;
  padding-left: 5vw;
}

.product-list > .product-item {
    flex: 1 1 40%; /*grow | shrink | basis */
    height: 100px;
}

.product-item {
  border: 3px solid green;
  margin: 10px;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px;
}
</style>
