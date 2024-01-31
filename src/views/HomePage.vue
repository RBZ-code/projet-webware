<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <div v-for="(prod, index) in products" :key="index">
            <h2>{{ prod.titre }}</h2>
            <img :src="prod.image" :alt="prod.titre" />
            <h1>H1 de chouanibe</h1>
            <h2>Ajout titre</h2>
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
