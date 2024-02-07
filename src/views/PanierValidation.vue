<template>
    <div class="summary-container">
        <h2>Résumé de commande</h2>
        <div
            class="summary-section"
            v-for="(prod, index) in currentUserPanier"
            :key="index"
        >
            <p>
                {{ prod.titre }} - Prix TTC:
                {{ calculateSubtotal(prod).toFixed(2) }} € - Prix HT:
                {{ calculateSubtotalWithoutTax(prod).toFixed(2) }} €
            </p>
        </div>

        <div class="total-section">
            <p>Total TTC : {{ totalTTC.toFixed(2) }} €</p>
            <p>Total HT : {{ totalHT.toFixed(2) }} €</p>
        </div>

        <div class="delivery-info-section">
            <h3>Informations de livraison</h3>
            <p>Nom : {{ currentUser.raisonSociale }}</p>
            <p>Adresse : {{ adressInfo }}</p>
        </div>

        <button @click="confirmerCommande" class="confirm-button">
            Confirmer la commande
        </button>
    </div>
    <div v-if="showThankYouModal" class="modal">
        <div class="modal-content">
            <h2>Commande validée</h2>
            <p>Merci de votre confiance sur notre site.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showThankYouModal: false,
        };
    },
    computed: {
        currentUserPanier() {
            if (
                this.$store.state.currentUser &&
                this.$store.state.currentUser.panier
            ) {
                return this.$store.state.currentUser.panier;
            } else {
                return [];
            }
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
            this.currentUser.panier.forEach((prod) => {
                const produit = this.$store.state.produits.find(
                    (p) => p.id === prod.id
                );
                if (produit) {
                    produit.stock -= prod.quantity;

                    if (produit.stock < 0) {
                        produit.stock = 0;
                    }

                    this.$store.commit("updateProduct", produit);
                }
            });

            this.$store.commit("validerCommande");
            this.showThankYouModal = true;
            console.log(this.showThankYouModal);
            console.log(this.$store.state.produits);
            setTimeout(() => {
                this.showThankYouModal = false;
                console.log(this.showThankYouModal);
            }, 2000);
            console.log(this.showThankYouModal);
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

.summary-section p {
    margin: 10px 0;
}

.summary-section p span {
    font-weight: bold;
}

.summary-section p strong {
    color: #252525;
}

h3 {
    color: #252525;
    font-size: 20px;
    margin-bottom: 10px;
}
</style>
