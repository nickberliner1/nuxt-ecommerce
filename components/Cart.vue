<template>
    <div class="cart">
        <h5>€ {{ total }}</h5>
        <ul class="dropdown">
            <li v-for="(item, index) in items" :key="item.id" class="cart-item">
                {{ item.title }} - {{ item.retail_price.formatted_value }}
                <b-button 
                    @click="items.splice(index, 1)"
                    type="is-danger"
                    icon-left="delete"
                ></b-button>
            </li>
        </ul>
        <!-- <div>
            <h5>€ {{ total }}</h5>
        </div> -->
        <b-button
            type="is-success"
            :disabled="items.length === 0"
            @click="$emit('pay')"
        >Pay Now</b-button>
    </div>
</template>

<script>
export default {
    props: ["items"],
    computed: {
        total() {
            return this.items.reduce((i, item) => i + Number(item.retail_price.value), 0);
        }
    }
}
</script>

<style lang="scss">

h5 {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.cart {
  position: relative;
  display: inline-block;
}

.dropdown {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown li:hover {background-color: #ddd;}

.cart:hover .dropdown {display: block;}

.cart:hover h5 {background-color: #3e8e41;}

</style>