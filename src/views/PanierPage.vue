<template>
    
    <div class="cart-container" v-if="this.$store.state.currentUser.panier.length!== 0">
        <div
            v-for="(prod, index) in cartWithInitialQuantity"
            :key="index"
            class="card"
        >
            <div class="product-image">
                <img
                    :src="prod.image"
                    :alt="prod.titre"
                    :width="150"
                    :height="150"
                />
            </div>
            <div class="product-details">
                <p class="product-description">{{ prod.description }}</p>
                <div class="quantity">
                    <button
                        @click="updateQuantity(prod.id, -1)"
                        :disabled="prod.quantity === prod.moq"
                        class="quantity-btn"
                    >
                        -
                    </button>
                    <p>{{ prod.quantity }}</p>
                    <button
                        @click="updateQuantity(prod.id, 1)"
                        class="quantity-btn"
                    >
                        +
                    </button>
                    <p class="price">
                        <strong class="margePrix"
                            >{{ calculateSubtotal(prod).toFixed(2) }} €</strong
                        >
                        <br />
                        <span class="tax">(TVA incluse)</span>
                    </p>
                    <p class="price">
                        <strong class="margePrix"
                            >{{
                                calculateSubtotalWithoutTax(prod).toFixed(2)
                            }}
                            €</strong
                        >
                        <br />
                        <span class="tax">(Hors TVA)</span>
                    </p>
                </div>
            </div>
            <button @click="supprimerDuPanier(prod)" class="remove">
                <img src="@/assets/trash-icon.png" alt="Supprimer" />
            </button>
        </div>
        <div class="total-section">
            <strong><p>Total HT : {{ calculateTotalWithoutTax().toFixed(2) }} €</p></strong>
            <strong><p>Total TTC : {{ calculateTotal().toFixed(2) }} €</p></strong>
            <MyButton
                label="Passer à la caisse"
                modifier="action"
                @GeneralEventBtn="checkout()"
                class="btn"
            />
        </div>
    </div>
    <div v-else class="empty-cart">
        <h1 >Votre panier est vide</h1>
    </div>
</template>

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";
export default {
    components: {
        MyButton,
    },
    computed: {
        cartWithInitialQuantity() {
            return this.cart.map((prod) => {
                const nouvelleQuantite = Math.max(prod.moq, prod.quantity);

                return { ...prod, quantity: nouvelleQuantite };
            });
        },
        cart() {
            if (
                this.$store.state.currentUser &&
                this.$store.state.currentUser.panier
            ) {
                return this.$store.state.currentUser.panier;
            } else {
                return [];
            }
        },
    },
    methods: {
        supprimerDuPanier(produit) {
            this.$store.commit("supprimerDuPanier", produit.id);
            alert("Produit supprimé du panier !");
        },
        checkout() {
            this.$router.push({ name: "checkout" });
        },
        updateQuantity(productId, changement) {
            this.$store.commit("updateQuantity", {
                productId,
                changement,
            });
        },
        // ...

        removeProduct(product) {
            this.$store.commit("deleteProductShop", product);
            this.$forceUpdate();
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
        calculateTotal() {
            return this.cart.reduce(
                (total, prod) => total + this.calculateSubtotal(prod),
                0
            );
        },
        calculateTotalWithoutTax() {
            return this.cart.reduce(
                (total, prod) => total + this.calculateSubtotalWithoutTax(prod),
                0
            );
        },
    },
};
</script>

<style scoped>

.empty-cart{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
}

.remove {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 10px;
}

.remove img {
    width: 20px;
    height: 20px;
}

.tax {
    font-size: 12px;
    color: #777;
}

button {
    border-radius: 4px;
}

.cart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #c4c4c4;
    width: 80%;
    max-width: 1000px;
    margin: 20px 0;
}

.product-image img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 20px;
}

.product-details {
    flex-grow: 1;
    width: 60%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

.product-description {
    font-size: 16px;
    margin-bottom: 10px;
}

.quantity {
    display: flex;
    align-items: center;
    gap: 10px;
}

.quantity-btn {
    padding: 4px;
    height: 30px;
    width: 30px;
    background-color: #44b9da;
    color: #ffffff;
    border: none;
    cursor: pointer;
}

.price {
    margin-left: auto;
    color: #252525;
}

.total-section {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: start;
    text-decoration-line: underline;
    width: 80%;
    max-width: 1000px;
    margin-left: 10%;
}

.total-section p {
    font-size: large;
    margin-top: 10px;
}

.btn {
    margin-top: 20px;
}

button:hover {
    background-color: #8bd6e7;
}
</style>
