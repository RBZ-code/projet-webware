<template>
  <div>
    <form class="product-form">
      <label for="search">Recherche : </label>
      <input type="search" id="search" name="search" placeholder="Recherche..." autocomplete="on" v-model="query">
    </form>

    <div class="products-container">
      <div v-for="(prod, index) in filteredProducts" :key="prod.id" class="product-card">
        <img :src="prod.image" :alt="prod.titre" class="img-produit" />
        <div class="product-details">
          <h4>{{ prod.titre }}</h4>
          <p>{{ prod.description }}</p>
          <p>{{ prod.prix }} €</p>
          <p>MOQ: {{ prod.moq }}</p>
        </div>
        <div class="product-actions">
          <button v-if="currentUser" @click="addProduit(prod)">Ajouter au panier 🛒</button>
          <button v-if="currentUser" @click="redirectToPanier">Voir le Panier 🛍️</button>
          <button class="details-btn" @click="redirectToDescriptionPage(prod)">Voir Détails</button>
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
    };
  },
  computed: {
    products() {
      return this.$store.state.produits;
    },
    filteredProducts() {
      if (!this.query) return this.products;
      const query = this.query.toLowerCase();
      return this.products.filter((prod) =>
        prod.titre.toLowerCase().includes(query)
      );
    },
    currentUser() {
      return this.$store.state.currentUser !== null;
    },
  },
  methods: {
    redirectToDescriptionPage(product) {
      this.$store.commit("setSelectedProduct", product);
      this.$router.push({ name: "description-product" });
    },
    addProduit(produit) {
      produit.quantity = 1;
      this.$store.commit("addProductShop", produit);
    },
    redirectToPanier() {
      this.$router.push({ name: 'panier' });
    },
  },
};
</script>



<style scoped>
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
  margin: auto;
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
