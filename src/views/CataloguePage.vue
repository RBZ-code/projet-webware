<template>
    <div>
        <div v-for="(prod, index) in products" :key="index">
            <h2>{{ prod.titre }}</h2>
            <img :src="prod.image" :alt="prod.titre" />
        </div>
    </div>
</template>

<script>

export default {
    components: {
   
    },
    computed: {
        products() {
            return this.$store.state.produits;
        },
    },
    
};
</script>
