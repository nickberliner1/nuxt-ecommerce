<template>

<!-- Depending on language preferences, pricing and language changes -->

    <div class="cart">
<!-- Button that allows you to pay if there are items in your cart -->
        <b-button
            v-if="typeof items !== 'undefined' 
            && typeof items === 'object'"
            class="pay"
            :hidden="items.length === 0"
            @click="$emit('pay')"
        >
            <h4>{{ `${italian ? 'Pagare' : 'Pay'}` }}</h4>
        </b-button>

<!-- Button that show you the total
    And on hover, shows the list of items you have added -->
            <div class="total">
                <h5>{{ `${italian ? "Totale: € " : "Total: £ "}` + total }}</h5>
            </div>


        <ul class="dropdown">
            <li v-for="(item, index) in items" :key="item.id" class="cart-item">
                {{ item.title }} - {{ `${italian ? '€' : '£'}` + item.retail_price.value }}
                
                
    <!-- Button that allows you to remove items from your cart -->
                <b-button 
                    @click="items.splice(index, 1)"
                    type="is-danger"
                    icon-left="delete"
                ></b-button>

            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    props: ['items', 'italian'],

    computed: {
        total() {
            if ( this.items ) {
                return this.items.reduce((i, item) => i + Number(item.retail_price.value), 0);
            }
        }
    }
}
</script>

<style lang="scss">

h5 {
  background-color: #4caf4f;
  color: white;
  padding: 15px;
  margin-top: 20px;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pay {
    padding: 16px;
    margin: 20px;
    font-size: 16px;
    color: white;
    background-color: #009fe3;
    border: none;
    border-radius: 15px;
   
}


.cart {
  position: relative;
  display: flex;

}

.dropdown {
  display: none;
  position: absolute;
  background-color: none;
  min-width: 160px;
  margin-top: 100px;
  z-index: 1;
  max-height: 400px;
  overflow: scroll;
  
}

.dropdown li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
    margin-top: 10px;
    background-color: #ddd;
    
   

}

.cart-item {
    border-radius: 20px;
    margin: 0px;
}

.dropdown li:hover {background-color: white;}

.cart:hover .dropdown {display: block;}

.cart:hover h5 {background-color: #3e8e41;}

</style>