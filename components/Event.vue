<template>



		<div class="product">
        
          <img :src="event.cover_image_url" class="product-image" />
          <h2 class="product-title">{{ event.title }}</h2>

          <div class="product-body">
            <p class="product-description">{{ event.description }}</p>
            <div class="product-footer">
              <p class="product-price">Price: {{ event.retail_price.formatted_value }}</p>
              <b-button 
                rounded outlined
                type="is-success is-light"
                icon-left="cart"
                :disabled="isInCart"
                @click="$emit('add-to-cart', event)"
              >
              {{ isInCart ? 'Added' : 'Add to Cart' }}
              </b-button>
            </div>
          </div>
       
      </div>

</template>

<script>

export default {
    
    props: ['event', 'price', 'isInCart'],
    data() {
        return {
            events: [],
            // price: this.event.retail_price.formatted_value
        }
    },
    
}

</script>

<style lang="scss">
.product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-title {
    font-weight: 700;
    margin-top: 3vh;
    margin-bottom: 3vh;
    font-size: large;
}

.product-body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.product-footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 2vh;
}

.product-price {
    font-weight: 700;
}


</style>
