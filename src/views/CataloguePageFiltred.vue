<template>
    <nav class="breadcrumb">
        <router-link to="/">Home</router-link> >
        <router-link to="/catalogue">Catalogue</router-link> >
        <span> {{ categorieName }}</span>
    </nav>
    <div>
        <h1>{{ categorieName }}</h1>

        <form class="filter-bar">
            <label for="search">Filtrer les catégories : </label>
            <input type="search" id="search" name="search" placeholder="Nom de la catégorie" autocomplete="on"
                v-model="query" />
        </form>

        <div class="products-container">
            <div v-for="(prod, index) in filteredProducts" :key="index" class="product-card">
                <img :src="prod.image" :alt="prod.titre" class="img-produit" />
                <div class="product-details">
                    <h4>{{ prod.titre }}</h4>
                    <p>{{ prod.description }}</p>
                    <p>{{ prod.prix }} €</p>
                    <p>MOQ: {{ prod.moq }}</p>
                </div>
                <div class="product-actions">
                    <button @click="ajouterAuPanier(prod)" v-if="$store.state.currentUser !== null">
                        Ajouter au panier 🛒
                    </button>

                    <router-link class="listing-link" :to="'/product-page/' + prod.id">
                        <button class="details-btn">Voir Détails</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: "",
            categoryId: null,
        };
    },
    computed: {
        categorieName() {
            return this.$store.state.categories.find(
                (cat) => cat.id === this.categoryId
            ).name;
        },
        products() {
            return this.$store.state.produits.filter(
                (prod) => prod.disponibilite == true
            );
        },
        filteredProducts() {
            if (!this.query) return this.categoryProducts;

            let query = this.query.toLowerCase();
            return this.categoryProducts.filter((prod) =>
                prod.titre.toLowerCase().includes(query)
            );
        },
        categoryProducts() {
            if (this.categoryId) {
                return this.products.filter(
                    (prod) => prod.categorieId === this.categoryId
                );
            }
            return [];
        },
    },
    methods: {
        ajouterAuPanier(produit) {
            this.$store.commit("ajouterAuPanier", produit);
            alert("Produit ajouté au panier !");
        },
        redirectToDescriptionPage(product) {
            this.$store.commit("setSelectedProduct", product);
            this.$router.push({ name: "description-product" });
        },
    },
    watch: {
        "$route.params.categoryId"(newCategoryId) {
            this.categoryId = parseInt(newCategoryId);
        },
    },
    created() {
        this.categoryId = parseInt(this.$route.params.categoryId);
        console.log("categoryId:", this.categoryId);
        console.log("categoryProducts:", this.categoryProducts);
    },
};
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 20px;
}

.filter-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.product-form {
    width: 80%;
    margin: 1rem auto;
}

.products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
    width: 80%;
    margin: 50px auto;
}

.product-card {
    background-color: var(--clr-light-grey);
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
}

.img-produit {
    width: 100%;
    aspect-ratio: 1;
    max-width: 100%;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
}

.product-details {
    flex-grow: 1;
}

.product-actions {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}

.product-actions button {
    background-color: #44b9da;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.product-actions button:hover {
    background-color: #252525;
}

.details-btn {
    background-color: #c5f4ff;
    color: #252525;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.details-btn:hover {
    background-color: #44b9da;
    color: #ffffff;
}
</style>
