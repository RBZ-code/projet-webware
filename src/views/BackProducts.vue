<template>
    <nav class="back-nav">
        <router-link to="/back-products">Produits</router-link>
        <router-link to="/back-categories">Catégories</router-link>
        <router-link to="/back-users">Utilisateurs</router-link>
        <router-link to="/back-orders">Commandes</router-link>
    </nav>
    <div class="listing-template">
        <div class="listing-box" v-for="(prod, index) in products" :key="index">
            <figure>
                <img :src="prod.image" :alt="prod.titre" />
            </figure>
            <div>
                <h2>{{ prod.titre }}</h2>
                <p>{{ prod.description }}</p>
                <p>{{ prod.prix + "€" + " - MOQ " + prod.moq }}</p>
                <MyButton label="supprimer" modifier="edit" @GeneralEventBtn="deleteProduct(prod.id)" />
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";


export default {
    components: {
        MyButton
    },
    computed: {
        products() {
            return this.$store.state.produits;
        },
    },
    methods: {
        deleteProduct(productId) {
            this.$store.dispatch("deleteProduct", productId);
        },
    },
    created() {
        this.$store.dispatch("copyProduitsToLocalStorage");
    },
};
</script>

<style>
.back-nav {
    background-color: var(--clr-dark);
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    padding: 15px;
    color: #fff;
    text-align: center;
}

.back-nav a {
    color: var(--clr-white);
    text-decoration: none;
    transition: 200ms ease-in-out;
    margin: 0 15px;
}

.back-nav a.router-link-exact-active {
    font-weight: bold;
    color: var(--clr-blue);
}

.listing-template {
    width: 90%;
    margin: 25px auto;
}

.listing-box {
    display: flex;
    gap: 1rem;
    color: #000;
    background-color: var(--clr-light-grey);
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 15px;
}

.listing-box figure {
    width: 100px;
    height: 100px;
    border-radius: 15px;
    overflow: hidden;
}

.listing-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
