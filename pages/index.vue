<template>
  <div class="container">
    <div>
      <Navbar />
    </div>
    
    <p v-if="$fetchState.pending">Loading products...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Venues</h1>
    <ul>
      <li v-bind:key="venue.id" v-for="venue of venues">
        {{ venue.title }}
        <img :src="venue.cover_image_url" class="product-image" />
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
        venues: []
      }
    },
    async fetch() {
      this.venues = await fetch(
        'https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0'
      ).then(res => res.json())
    }
  }
</script>


<style>
.container {
  /* margin: 0 auto; */
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.product-image {
  max-width: 30%;
  max-height: 30%;
  border-radius: 15px;
}
</style>
