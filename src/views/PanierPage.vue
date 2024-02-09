<template>
    <header class="order-progress">
        <div class="order-progress_step order-progress--active"></div>
        <div class="order-progress_bar"></div>
        <div class="order-progress_step"></div>
    </header>
    <h1>Votre panier (1/2)</h1>
    <MyButton
    v-if="panierUser"
        label="Passer commande"
        modifier="action"
        @GeneralEventBtn="checkout()"
        class="btn"
    />
    <main class="cart-container" v-if="panierUser">
        <section class="total-section">
            <p>
                <strong>Total HT :</strong>
                {{ calculateTotalWithoutTax().toFixed(2) }} €
            </p>
            <p>
                <strong>Total TTC :</strong> {{ calculateTotal().toFixed(2) }} €
            </p>
        </section>

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
                <p class="product-description">
                    <strong>{{ prod.titre }}</strong>
                </p>
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
                        :disabled="prod.stock === prod.quantity"
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
    </main>
    <div class="empty-cart" v-else>
        <h3>Panier vide</h3>
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
        panierUser() {
            if (
                this.$store.state.currentUser &&
                this.$store.state.currentUser.panier
            ) {
                return this.$store.state.currentUser.panier.length > 0;
            } else {
                return 0;
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

<style>
.order-progress {
    margin: 25px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
}

.order-progress_step {
    height: 25px;
    aspect-ratio: 1;
    border-radius: 9999px;
    background-color: var(--clr-dark);
}

.order-progress_bar {
    height: 10px;
    min-width: 75%;
    background-color: var(--clr-dark);
}

.order-progress--active {
    background-color: var(--clr-blue);
}
</style>

<style scoped>
h1 {
    text-align: center;
}

.empty-cart {
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

.cart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
    margin-bottom: 25px;
}

.card {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    row-gap: 1rem;
    padding: 20px;
    border-bottom: 1px solid #c4c4c4;
    width: 80%;
    max-width: 1000px;
    margin: 20px 0;
}

.product-image {
    min-width: 150px;
    height: 150px;
    margin-right: 20px;
    border-radius: 15px;
    overflow: hidden;
}
.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    border-radius: 5px;
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
    background-color: var(--clr-light-grey);
    border-radius: 15px;
    padding: 25px;
    text-align: center !important;
    /* text-decoration-line: underline; */
    width: 80%;
    max-width: 1000px;
    margin-left: 10%;
    margin: 25px auto;
}

.total-section p {
    font-size: large;
}

.btn {
    margin: 25px auto;
    text-align: center;
}
</style>
