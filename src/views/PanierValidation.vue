<template>
  <div class="summary-container">
    <h2>Résumé de commande</h2>

    <!-- Section Total -->
    <div class="total-section">
      <p>Total TTC : {{ totalTTC.toFixed(2) }} €</p>
      <p>Total HT : {{ totalHT.toFixed(2) }} €</p>
    </div>

    <!-- Section Informations de livraison -->
    <div class="delivery-info-section">
      <h3>Informations de livraison</h3>
      <p>Nom : {{ currentUser.raisonSociale }}</p>
      <p>Adresse : {{ adressInfo }}</p>
    </div>

    <!-- Bouton "Confirmer la commande" -->
    <button @click="confirmerCommande" class="confirm-button">
      Confirmer la commande
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
    adressInfo() {
      return `${this.currentUser.adresse} ${this.currentUser.ville} ${this.currentUser.codePostal}`;
    },
    totalHT() {
      return this.currentUser.panier.reduce(
        (total, prod) => total + this.calculateSubtotalWithoutTax(prod),
        0
      );
    },
    totalTTC() {
      return this.currentUser.panier.reduce(
        (total, prod) => total + this.calculateSubtotal(prod),
        0
      );
    },
  },
  methods: {
    confirmerCommande() {
      // Mettez en œuvre l'action de confirmation de commande dans votre store
      console.log(this.currentUser);
      //   this.$store.dispatch("confirmerCommandeAction");
    },
    calculateSubtotal(prod) {
      const subtotal = prod.prix * prod.quantity;
      const taxRate = 0.2;
      const totalWithTax = subtotal + subtotal * taxRate;
      return totalWithTax;
    },
    calculateSubtotalWithoutTax(prod) {
      const subtotalWithoutTax = prod.prix * prod.quantity;
      return subtotalWithoutTax;
    },
  },
  created() {
    this.currentUser = this.$store.state.currentUser;
  },
};
</script>

<style scoped>
.summary-container {
  background-color: #ffffff;
  padding: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  max-width: 1000px;
  width: 80%;
  margin: 50px auto;
}

.total-section {
  margin-bottom: 40px;
}

.delivery-info-section {
  margin-bottom: 40px;
}

.confirm-button {
  background-color: #44b9da;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.confirm-button:hover {
  background-color: #252525;
}
</style>
