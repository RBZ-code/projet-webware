<template>
    <nav>
        <router-link to="/back-products">Listing produits</router-link> |
        <!-- <router-link to="/add">Inscription</router-link> |
    <router-link to="/connexion">Connexion</router-link>  -->
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
        products() {
            return this.$store.state.produits;
        },
    },
};
</script>

<style>

</style>