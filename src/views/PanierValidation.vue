<template>
  <div>
    <h2>Résumé de commande</h2>

    

    <!-- Afficher le total TTC et HT -->
    <div>
      <p>Total TTC : {{ totalTTC }} €</p>
      <p>Total HT : {{ totalHT }} €</p>
    </div>

    <!-- Afficher les informations de livraison du client -->
    <div>
      <h3>Informations de livraison</h3>
      <p>Nom : {{ currentUser.raisonSociale }}</p>
      <p>Adresse : {{ adressInfo }}</p>
    </div>

    <!-- Bouton "Confirmer la commande" -->
    <button @click="confirmerCommande">Confirmer la commande</button>
  </div>
</template>

<script>
export default {
  computed: {

    adressInfo() {
      return `${this.currentUser.adresse} ${this.currentUser.ville} ${this.currentUser.codePostal}`;
    },
  },
  methods: {
    confirmerCommande() {
      this.$store.dispatch("confirmerCommandeAction");
      // Implémentez l'action "confirmerCommandeAction" dans votre store
    },
  },
  created() {
    this.currentUser = this.$store.state.currentUser;
  },
};
</script>
