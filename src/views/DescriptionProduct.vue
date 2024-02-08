<template>
    <div class="body" v-if="selectedProduct">
        <h2>{{ selectedProduct.titre }}</h2>
        <div class="cards-container">
            <div
                class="cards"
                :class="{
                    'tablette-layout': isTablette,
                    'desktop-layout': !isTablette,
                }"
            >
                <div class="image-container">
                    <img
                        :src="selectedProduct.image"
                        :alt="selectedProduct.titre"
                        :width="150"
                        :height="150"
                    />
                </div>
                <div class="description-price">
                    <div class="description-text">
                        <p class="text-title">
                            <strong>Description du produit</strong>
                        </p>
                        <p class="write-text">
                            {{ selectedProduct.description }}
                        </p>
                    </div>
                    <p class="product-price">
                        <strong>{{ selectedProduct.prix }} US$</strong>
                    </p>
                    <p class="tva-price">Prix de la TVA</p>
                    <p class="moq">moq : {{ selectedProduct.moq }}</p>
                    <p class="moq">en stock : {{ selectedProduct.stock }}</p>
                    <div class="product-quantity">
                        <div class="basket-container">
                            <button
                                @click="ajouterAuPanier(selectedProduct)"
                                :disabled="
                                    selectedProduct.stock < selectedProduct.moq
                                "
                                class="action-btn"
                                v-if="currentUser"
                            >
                                Ajouter au panier 🛒
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            descriptionId: null,
            isTablette: 508 < window.innerWidth < 768,
            currentUser: this.$store.state.currentUser,
        };
    },

    mounted() {
        window.addEventListener("resize", this.handleResize);
    },

    computed: {
        products() {
            return this.$store.state.produits;
        },
        selectedProduct() {
            return this.products.find(
                (product) => product.id === this.descriptionId
            );
        },
    },
    methods: {
        addProduit(produit) {
            this.$store.commit("ajouterAuPanier", produit);
        },
        handleResize() {
            this.isTablette =
                508 < window.innerWidth && window.innerWidth < 768;
        },
        beforeDestroy: function () {
            window.removeEventListener("resize", this.handleResize);
        },
        ajouterAuPanier(produit) {
            this.$store.commit("ajouterAuPanier", produit);
            alert("Produit ajouté au panier !");
        },
    },
    watch: {
        "$route.params.descriptionId"(newDescriptionId) {
            this.descriptionId = parseInt(newDescriptionId);
        },
    },
    created() {
        this.descriptionId = parseInt(this.$route.params.productId);
    },
};
</script>

<style scoped>

.action-btn {
    padding: 15px 25px;
    border-radius: 5px;
    background-color: var(--clr-blue);
    color: white;
    border: none;
    cursor: pointer;
    transition: 200ms ease-in-out;
}


.action-btn:hover {
    color: #fff;
    background-color: var(--clr-dark);
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
    align-items: flex-start; /* Alignement en haut */
    min-height: 100vh;
    margin: 20px 20%;
}

.cards {
    background-color: var(--clr-light-grey);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
}

.image-container {
    width: 100%;
    height: auto;
    text-align: center;
}

.image-container img {
    object-fit: contain;
    width: 25%;
    height: auto;
    border-radius: 5px;
}

.description-price h2 {
    text-align: center;
    margin: 10px 0;
}

.description-price,
.description-text,
.product-quantity,
.basket-container,
.moq {
    text-align: center;
    margin: 10px 0;
}

.product-quantity {
    margin: 10px 0;
}

.product-quantity .plus-button {
    width: 18%;
    height: 100%;
    float: right;
}

.description-text {
    margin: 0px 20px;
    padding: 20px 0;
    text-align: center; /* Ajout de cette ligne pour centrer le texte */
}

.description-text .text-title {
    font-size: 18px;
    margin-bottom: 10px;
}

.add-basket {
    width: 40%;
    height: 50px;
    background-color: rgba(115, 115, 246, 0.747);
    border: none;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
}

.basket-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

h2 {
    text-align: center;
    margin: 30px 0;
}
</style>
