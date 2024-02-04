<template>
    <div class="product-catalogue" v-if="!showProductFlag">
        

        <div class="cards-container">
            <div v-for="(prod, index) in filteredProducts" :key="index" class="cards">
                <img :src="prod.image" :alt="prod.titre" class="img-produit"/>
                <h4>{{ prod.titre }}</h4>
                <p>{{ prod.description }}</p>
                <p>{{ prod.prix }} €</p>
                <p>moq :{{ prod.moq }}</p>
                <button>Ajouter au panier 🛒 </button>
                
                <button
                    @click="redirectToDescriptionPage(prod)"
                    :color="white"
                    :backgroundColor="blue"
                    :border-radius="10"
                > Voir détail produits </button>
                
            </div>
        </div>
    </div>

    
</template>

<script>
import MyButton from '@/components/FrontOffice/MyButton.vue';
export default {
    data() {
        return {
            query: "",
            showProductFlag: false,
            selectedProduct: {},
        };
    },
    components: {
        MyButton,
    },
    computed: {
        products() {
            return this.$store.state.produits;
        },
        filteredProducts() {
            if (!this.query) return this.products;
            let query = this.query.toLowerCase();
            return this.products.filter(prod =>
                prod.titre.toLowerCase().includes(query)
            );
        },

    },
    methods: {
        searchProducts() {
            this.$store.commit("setQuery", this.query);
        }, 
        
        redirectToDescriptionPage(product) {
            this.$store.commit("setSelectedProduct", product);
            this.$router.push({ name: 'description-product' });
        },
        
},
    
}
</script>

<style>
.body-catalogue{
    margin: 0 30px;
}
.cards-container {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1em;
    justify-content: center;
    align-items: center;
}

.img-produit {
    width: 100%;
    height: auto;
    max-width: 200px;
    max-height: 200px;
}

.cards-container p {
    margin: 0;
}

.product-form {
    
    width: 50%;
    display: block;
    margin: 20px auto;
}
</style>
