<template>
    <div class="body" v-if="selectedProduct">
        <div class="cards" 
        :class="{ 'tablette-layout': isTablette, 'desktop-layout': !isTablette }">
            <div class="image-container">
                <img
                    :src="selectedProduct.image"
                    :alt="selectedProduct.titre"
                    :width="150"
                    :height="150"
                />
            </div>
            <div class="description-price">
                <h2>{{ selectedProduct.titre }}</h2>
                <p class="product-price"><strong>{{ selectedProduct.prix }} US$</strong></p>
                <p class="tva-price">Prix de la TVA</p>
                <p class="moq">moq : {{ selectedProduct.moq }}</p>
                <p>en stock : {{ selectedProduct.stock }}</p>
                <div class="product-quantity">
                    <div class="basket-container">
                        <button class="add-basket" @click="ajouterAuPanier(selectedProduct)"
                        :disabled="selectedProduct.stock < selectedProduct.moq"
                        >Ajouter au panier 🛒</button>
                    </div>
                </div>
            </div>
            <div class="description-text">
                <p class="text-title"><strong>Description du produit</strong></p>
                <p class="write-text">{{ selectedProduct.description }}</p>
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
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    
    computed: {
        products() {
            return this.$store.state.produits;
        },
        selectedProduct() {
            return this.products.find(product => product.id === this.descriptionId);
        },
    },
    methods: {
        addProduit(produit) {
            this.$store.commit("ajouterAuPanier", produit);
        },
        handleResize() {
            this.isTablette = 508 < window.innerWidth && window.innerWidth < 768;
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleResize);
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

    .description-price{       
        margin:0 20px;
    }
    .image-container{
        width: 100%;
        height: auto;
        text-align: center;  
    }
    .image-container img{
        object-fit: contain;
        width: 20%;
        height: auto;       
    }
    .description-price h2{
        text-align: center;           
    }
    .description-price .product-price {
        text-align: right;
        margin-top: 10px;
        font-size: 20px;
    }
    .description-price .tva-price{
        text-align: right;
        opacity: 0.7;
    }
    .product-quantity{
        margin: 10px 10px;
    }
    
    .product-quantity .minus-button{
        width: 17%;
        height: 100%;
        margin-left: auto;
        margin-right: 0;
    }
    .product-quantity .plus-button{
        width: 18%;
        height: 100%;
        float: right;
    }
    .minus-button, .plus-button{
        border: none;
        background-color: rgb(115, 115, 246);
    }
    .description-text{
        margin: 0px 20px;
        padding-top: 80px;
    }
    .description-text .text-title{
        font-size: 18px;
    }
    .add-basket{
        width: 100%;
        height: 50px;
        background-color: rgba(115, 115, 246, 0.747);
        border: none;
        text-align: center;
    }
    .basket-container{
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }

</style>