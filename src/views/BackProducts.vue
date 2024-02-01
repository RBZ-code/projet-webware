<template>
    <nav>
        <router-link to="/back-products">Listing produits</router-link> |
        <!-- <router-link to="/add">Inscription</router-link> |
    <router-link to="/connexion">Connexion</router-link>  -->
    </nav>
    <div class="listing-products" v-for="(prod, index) in products" :key="index">
        <div class="listing-box">
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
        products() {
            return this.$store.state.produits;
        },
    },
};
</script>

<style>
.listing-box {
    display: flex;
}
.listing-box img {
    width: 100px;
    aspect-ratio: 1;
    object-fit: cover;
}
</style>