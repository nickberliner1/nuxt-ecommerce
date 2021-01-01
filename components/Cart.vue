<template>
    <div>
        <ul>
            <li v-for="event in events" :key="event.id">
                {{ event.title }} - {{ event.retail_price.formatted_value }}
                <button @click="$emit('remove-from-cart',event)">
                Remove
                </button>
            </li>
        </ul>
        <div>
            <h5>{{ total }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props: ["events"],
    computed: {
        total() {
            return this.events.reduce((i, event) => i + Number(event.retail_price.formatted_value), 0);
        }
    }
}
</script>