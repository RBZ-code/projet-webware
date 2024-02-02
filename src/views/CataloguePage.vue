<template>
  <div>
    <form class="product-form" @submit.prevent="searchProducts">
      <label for="search">Recherche :</label>
      <input type="search" id="search" name="search" placeholder="Recherche..." autocomplete="on" v-model="query">
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
          <button @click="addToCart(prod.id)">Ajouter au panier 🛒</button>
         
            <button class="details-btn">Voir Détails</button>

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
      let query = this.query.toLowerCase();
      return this.products.filter((prod) =>
        prod.titre.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    searchProducts() {
      this.$store.commit("setQuery", this.query);
    },
   
  },
};
</script>

<style scoped>

.product-form{
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
  background-color: #c4c4c4;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
