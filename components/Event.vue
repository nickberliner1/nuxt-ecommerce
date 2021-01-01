<template>
    <ul class="product-list">
        <li v-bind:key="event.id" v-for="event of events" class="product-item">
          
          <img :src="event.cover_image_url" class="product-image" />
          
          <div class="product-body">
            <h2 class="product-title">{{ event.title }}</h2>
            <p class="product-description">{{ event.description }}</p>
            <div class="product-footer">
              <p class="product-price">Price: {{ event.retail_price.formatted_value }}</p>
              <button style="color: blue;" @click="$emit('add-to-cart', event)">Add to cart</button>
            </div>
          </div>
        </li>
      </ul>
</template>

<script>
export default {
    props: ["events"]
}
</script>