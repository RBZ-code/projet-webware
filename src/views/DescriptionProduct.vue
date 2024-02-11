<template>
    <div class="body" v-if="selectedProduct">
        <h2>{{ selectedProduct.titre }}</h2>
        <div class="products-container">
            <div
                class="product-card"
                :class="[
                    { rupture: selectedProduct.stock < selectedProduct.moq },
                    'product-card',
                ]"
            >
                <div class="img-produit-container">
                    <img
                        :src="selectedProduct.image"
                        :alt="selectedProduct.titre"
                        class="img-produit"
                    />
                </div>
                <div class="product-details">
                    <p>
                        <strong>{{ selectedProduct.description }}</strong>
                    </p>
                    <p>
                        <strong>Description : </strong>Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Odit possimus
                        assumenda tempora quaerat id repellat quibusdam ipsam
                        praesentium dolor, consectetur quisquam quos deleniti
                        quod rem omnis voluptatum at. Rerum, odit.
                    </p>
                    <p><strong>Prix :</strong> {{ selectedProduct.prix }} €</p>
                    <p><strong>MOQ :</strong> {{ selectedProduct.moq }}</p>
                    <p>
                        <strong>En stock :</strong> {{ selectedProduct.stock }}
                    </p>
                </div>
                <div class="product-actions">
                    <button
                        @click="ajouterAuPanier(selectedProduct)"
                        :disabled="selectedProduct.stock < selectedProduct.moq"
                        v-if="currentUser"
                    >
                        Ajouter au panier 🛒
                    </button>
                </div>
            </div>
        </div>
        <div class="related-products">
            <h3>Vous aimerez peut-être</h3>
            <div class="carousel-container">
                <carousel-page :products="relatedProducts" />
            </div>
        </div>
    </div>
</template>

<script>
import CarouselPage from "@/components/FrontOffice/CarouselPage.vue";

export default {
    components: {
        CarouselPage,
    },
    data() {
        return {
            descriptionId: null,
            currentUser: this.$store.state.currentUser,
        };
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
        relatedProducts() {
            return this.products.filter(
                (product) =>
                    product.categorieId === this.selectedProduct.categorieId &&
                    product.id !== this.selectedProduct.id
            );
        },
    },
    methods: {
        ajouterAuPanier(produit) {
            this.$store.commit("ajouterAuPanier", produit);
            console.log(this.relatedProducts);
        },
        
       
    },
    watch: {
        '$route.params.productId'(newProductId) {
            this.descriptionId = parseInt(newProductId);
        },
    },
    created() {
        this.descriptionId = parseInt(this.$route.params.productId);
    },
};
</script>

<style scoped>
.related-products {
    margin-top: 50px;
}

.related-products h3 {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 10px;
}

.carousel-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

h2 {
    text-align: center;
    margin: 50px;
}

.rupture {
    opacity: 0.6;
    color: #666;
    position: relative;
}

.rupture::after {
    content: "Rupture de stock";
    background-color: #8a2121;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 2rem;
    line-height: 1;
}

.product-card.rupture {
    background-color: #eee;
}

.body {
    padding: 20px;
}

.products-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.product-card {
    background-color: var(--clr-light-grey);
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
}

.img-produit-container {
    width: 100%;
    margin-bottom: 20px;
}

.img-produit {
    width: 100%;
    max-width: 400px;
    min-width: 200px;
    object-fit: cover;
    border-radius: 8px;
}

.product-details {
    flex-grow: 1;
}

.product-details :nth-child(2) {
    margin-top: 30px;
}

.product-details p {
    margin-bottom: 10px;
}

.product-actions {
    margin-top: 20px;
}

.product-actions button {
    background-color: #44b9da;
    color: #ffffff;
    border: none;
    padding: 15px 25px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.product-actions button:hover {
    background-color: #252525;
}



</style>
