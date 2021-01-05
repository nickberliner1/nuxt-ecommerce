<template>
    <div class="product">

<!-- <div :key="index" v-for="(event, index) in paginatedItems">
<b-pagination
          @change="onPageChanged"
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
        /> -->


    <!-- <ul class="product-list"> -->

        <!-- <p v-if="$fetchState.pending">Loading events...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p> -->

        <!-- <li class="product-item"> -->
            <ul class="product-list">
          <li :key="event.id" v-for="event in events" class="product-item">
        
          <img :src="event.cover_image_url" class="product-image" />
          <h2 class="product-title">{{ event.title }}</h2>

          <div class="product-body">
            <p class="product-description">{{ event.description }}</p>
            <div class="product-footer">
              <p class="product-price">Price: {{ event.retail_price.formatted_value }}</p>
              <button 
                :disabled="isInCart"
                @click="$emit('add-to-cart', event)"
              >
              {{ isInCart ? 'Added' : 'Add to Cart' }}
                <!-- Add to Cart -->
              </button>
            </div>
          </div>
        </li> 
      </ul>
      </div>
    <!-- </div> -->
</template>

<script>
export default {
    props: ['event', 'isInCart'],
    data() {
        return {
            events: []
        }
    },
    // data() {
    //     return {
    //         currentPage: 1,
    //         perPage: 3,
    //         totalRows: 10,
    //         paginatedItems: this.events
    //     }
    // },
    // methods: {

    //     paginate(page_size, page_number) {
    //         let itemsToParse = this.events;
    //         this.paginatedItems = itemsToParse.slice(
    //             page_number * page_size,
    //             (page_number + 1) * page_size
    //         );
    //     },
    //     onPageChanged(page) {
    //         this.paginate(this.perPage, page - 1);
    //     },
    // },

    // mounted() {
    //     this.paginate(this.perPage, 0);
    // }
    
    
    async fetch() {
    this.events = await fetch(
      'https://api.musement.com/api/v3/venues/164/activities?&offset=0&currency=EUR'
    ).then(res => res.json());

  },
}
</script>

<style lang="scss">
.product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.product-footer {
    align-self: flex-end;
    flex: 1 1 auto;
}
// .product-image {
//   width: auto;
//   height: auto;
//   max-width: 100%;
//   max-height: 100%;
// }

// .product-list {
//   display: flex;
//   flex-wrap: wrap;
//   align-items: stretch;
//   justify-content: center;
//   padding-right: 5vw;
//   padding-left: 5vw;

// }

// .product-list > .product-item {
//     flex: 1 1 30%; /*grow | shrink | basis */
//     padding: 20px;
//     margin: 20px;
//     border: 2px solid gray;
//     border-radius: 15px;
//     box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.151);
// }

// .product-footer {
//   display: flex-end;
// }

</style>
