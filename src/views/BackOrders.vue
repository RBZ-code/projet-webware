<template>
    <nav class="back-nav">
        <router-link to="/back-products">Produits</router-link>
        <router-link to="/back-categories">Catégories</router-link>
        <router-link to="/back-users">Utilisateurs</router-link>
        <router-link to="/back-orders">Commandes</router-link>
    </nav>
    <div class="listing-products">
        <div class="listing-box" v-for="(prod, index) in products" :key="index">
            <figure>
                <img :src="prod.image" :alt="prod.titre" />
            </figure>
            <div>
                <h2>{{ prod.titre }}</h2>
                <p>{{ prod.description }}</p>
                <p>{{ prod.prix + "€" + " - MOQ " + prod.moq }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    computed: {

    },
};
</script>

<style>

</style>