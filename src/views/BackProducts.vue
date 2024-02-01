<template>
    <BackNav />
    <header class="action-bar">
        <MyButton label="Ajouter un produit" modifier="action" @GeneralEventBtn="goToAddProduct()" />
    </header>
    <div class="listing-template">
        <div class="listing-box" v-for="(prod, index) in products" :key="index">
            <figure>
                <img :src="prod.image" :alt="prod.titre" />
            </figure>
            <div>
                <h2>{{ prod.titre }}</h2>
                <p>{{ prod.description }}</p>
                <p class="box-numbers">{{ prod.prix + "€" + " - MOQ " + prod.moq }}</p>
                <div class="box-actions">
                    <MyButton label="Modifier" modifier="edit" @GeneralEventBtn="modifyProduct(prod.id)" />
                    <MyButton label="Supprimer" modifier="edit" @GeneralEventBtn="deleteProduct(prod.id)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackNav from "@/components/FrontOffice/BackNav.vue";
import MyButton from "@/components/FrontOffice/MyButton.vue";

export default {
    components: {
        BackNav,
        MyButton
    },
    computed: {
        products() {
            return this.$store.state.produits;
        },
    },
    methods: {
        goToAddProduct(){
            this.$router.push("/back-products-add");
        },
        deleteProduct(productId) {
            let check = confirm("Êtes-vous sûr de vouloir supprimer ce produit ?");
            if (check) {
                this.$store.dispatch("deleteProduct", productId);
            }
        },
    },
};
</script>

<style>

.action-bar {
    width: 90%;
    margin: 25px auto;
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

.listing-box p {
    margin: .5rem 0;
}

.box-numbers {
    font-style: italic;
}

.box-actions {
    display: flex;
}
</style>
