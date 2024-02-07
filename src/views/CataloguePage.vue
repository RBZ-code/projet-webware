<template>
  <div>
    <form class="filter-bar">
      <label for="search">Filtrer les produits : </label>
      <input type="search" id="search" name="search" placeholder="Nom du produit" autocomplete="on" v-model="query">
    </form>


    <div class="products-container">
      <div v-for="(prod) in filteredProducts" :key="prod.id" class="product-card">
        <img :src="prod.image" :alt="prod.titre" class="img-produit" />
        <div class="product-details">
          <h4>{{ prod.titre }}</h4>
          <p>{{ prod.description }}</p>
          <p>{{ prod.prix }} €</p>
          <p>MOQ: {{ prod.moq }}</p>
        </div>
        <div class="product-actions">
          <button v-if="currentUser" @click="ajouterAuPanier(prod)">Ajouter au panier 🛒</button>
          <div class="">
            <router-link class="listing-link" :to="'/product-page/' + prod.id">
              <button class="details-btn">Voir Détails</button>
            </router-link>
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
      query: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.produits;
    },

    computed: {
        products() {
            return this.$store.state.produits.filter((prod) => prod.disponibilite == true);
        },
        filteredProducts() {
            if (!this.query) {
                return this.products;
            }
            const query = this.query.toLowerCase();
            return this.products.filter((prod) =>
                prod.titre.toLowerCase().includes(query)
            );
        },
        currentUser() {
            return this.$store.state.currentUser !== null;
        },

    },
  },
  methods: {
    redirectToDescriptionPage(product) {
            this.$store.commit("setSelectedProduct", product);
            this.$router.push({ name: "description-product" });
        },
      ajouterAuPanier(produit) {
      this.$store.commit("ajouterAuPanier", produit);
      alert("Produit ajouté au panier !");
    },
  },
};
</script>



<style scoped>
.filter-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
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
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.product-card:hover {
  background-color: #e0e0e0;
  transform: translateY(-4px);
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