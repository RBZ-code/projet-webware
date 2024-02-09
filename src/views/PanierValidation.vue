<template>
    <header class="order-progress">
        <div class="order-progress_step order-progress--active"></div>
        <div class="order-progress_bar order-progress--active"></div>
        <div class="order-progress_step"></div>
    </header>
    <h1>Récapitulatif commance (2/2)</h1>
            
    <MyButton label="Confirmer la commande" modifier="action" @GeneralEventBtn="confirmerCommande" class="btn" />
    <div class="summary-container">
        <h2>Résumé de commande</h2>

        <div class="listing-template">
            <table class="listing-tab">
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Quantité</th>
                        <th>Total TTC</th>
                        <th>Total HT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(prod, index) in currentUserPanier" :key="index">
                        <td>{{ prod.titre }}</td>
                        <td>{{ prod.quantity }}</td>
                        <td>{{ calculateSubtotal(prod).toFixed(2) }}€</td>
                        <td>{{ calculateSubtotalWithoutTax(prod).toFixed(2) }}€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
        <div class="total-section">
            <p>Total TTC : {{ totalTTC.toFixed(2) }} € -- Total HT : {{ totalHT.toFixed(2) }} €</p>
        </div>

        <div class="delivery-info-section">
            <h2>Informations de livraison</h2>
            <p>Nom : {{ currentUser.raisonSociale }}</p>
            <p>Adresse : {{ adressInfo }}</p>
        </div>

    </div>
    <div v-if="showThankYouModal" class="modals">
        <div class="modal-content">
            <h2>Commande validée</h2>
            <p>Nous vous remercions de votre confiance.</p>
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";

export default {
    components: {
        MyButton
    },
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
        
            setTimeout(() => {
                this.showThankYouModal = false;
   
            }, 2000);
            setTimeout(() => {
                this.$router.push("/");
            }, 2000);

      
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

.modals {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.modal-content h2 {
    margin-bottom: 10px;
    color: #252525;
}

.modal-content p {
    margin-bottom: 20px;
    color: #666;
}

h1 {
    text-align: center;
}

.summary-container {
    background-color: #ffffff;
    padding: 50px;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    max-width: 1000px;
    width: 80%;
    margin: 50px auto;
    text-align: center;
}

.summary-container .listing-template {
    min-height: auto;
    margin: 25px auto;
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

.btn {
    margin: 25px auto;
    text-align: center;
}
</style>
