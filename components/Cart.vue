<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" :key="item.id">
                {{ item.title }} - {{ item.retail_price.formatted_value }}
                <!-- <button @click="$emit('remove-from-cart',item)"> -->
                <button @click="items.splice(index, 1)">
                Remove
                </button>
            </li>
        </ul>
        <div>
            <h5>{{ total }}</h5>
        </div>
        <button
            :disabled="items.length === 0"
            @click="$emit('pay')"
            class="btn btn-info form-control"
        >Pay Now</button>
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