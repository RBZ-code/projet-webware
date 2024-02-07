<template>
    <div>
        <BackNav />
        <header class="action-bar">
            <h1>Gestion des produits</h1>
            <MyButton label="Ajouter un produit" modifier="action" @GeneralEventBtn="goToAddProduct()" />
        </header>

        <form class="filter-bar">
            <label for="back-product-search">Rechercher un produit :</label>
            <input
                id="back-product-search"
                name="search"
                type="search"
                placeholder="Nom du produit"
                v-model="searchQuery"
            >

        </form>
        <div class="listing-template">
            <div class="listing-box" v-for="(prod, index) in filteredProducts" :key="index">
                <figure>
                    <img :src="prod.image" :alt="prod.titre" />
                </figure>
                <div>
                    <h2>{{ prod.titre }}</h2>
                    <p>{{ prod.description }}</p>
                    <p class="box-numbers">
                        {{ prod.prix + "€" + " / MOQ : " + prod.moq + " / Stock : " + prod.stock }}
                    </p>
                    <p class="box-avail">
                        <span v-if="prod.disponibilite == true">Disponible ✔</span><span v-else>Non-disponible ❌</span>
                    </p>
                    <div class="box-actions">
                        <MyButton label="Modifier" modifier="edit" @GeneralEventBtn="openModal(index)" />
                        <MyButton label="Supprimer" modifier="edit" @GeneralEventBtn="deleteProduct(prod.id)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div v-if="modalIsOpened" v-cloak id="editModal" class="modal">
        <div class="modal-content">
            <span v-on:click="closeModal" class="close-button">X</span>
            <h2>Modifier le produit</h2>
            <form>
                <label for="editName">Nom du produit :</label>
                <input v-model="editItem.titre" type="text" id="editName" />

                <label for="editDesc">Description produit :</label>
                <textarea v-model="editItem.description" type="text" id="editDesc" rows="5"></textarea>

                <label for="editPrice">Prix du produit :</label>
                <input v-model="editItem.prix" type="number" id="editPrice" />

                <label for="editQuantity">MOQ :</label>
                <input v-model="editItem.moq" type="number" id="editQuantity" />

                <label for="editStock">Stock :</label>
                <input v-model="editItem.stock" type="number" id="editStock" />

                <label for="editCategory">Catégorie produit:</label>
                <select v-model="editItem.categorieId" id="editCategory">
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>

                <label for="editAvailibity">Disponibilité du produit :</label>
                <select v-model="editItem.disponibilite" id="editAvailibity">
                    <option :value="true">
                        Disponible
                    </option>
                    <option :value="false">
                        Non-disponible
                    </option>
                </select>


                <input type="hidden" v-model="editItem.id" />

                <MyButton
                    label="Modifier"
                    modifier="action"
                    @GeneralEventBtn="updateProduct"
                />

            </form>
        </div>
    </div>
</template>

<script>
import BackNav from "@/components/FrontOffice/BackNav.vue";
import MyButton from "@/components/FrontOffice/MyButton.vue";

export default {
    components: {
        BackNav,
        MyButton,
    },
    data() {
        return {
            modalIsOpened: false,
            editItem: {},
            editIndex: 0,
            searchQuery: "",
        };
    },

    computed: {
        products() {
            return this.$store.state.produits;
        },
        filteredProducts() {
            if (!this.searchQuery) return this.products;
            let query = this.searchQuery.toLowerCase();
            return this.products.filter((prod) =>
                prod.titre.toLowerCase().includes(query)
            );
        },
        categories() {
            return this.$store.state.categories;
        },
    },
    methods: {
        deleteProduct(productId) {
            let check = confirm(
                "Êtes-vous sûr de vouloir supprimer ce produit ?"
            );
            if (check) {
                this.$store.dispatch("deleteProduct", productId);
            }
            this.$store.commit("saveProducts"); 
        },
        goToAddProduct() {
            this.$router.push("/back-products-add");
        },

        closeModal() {
            this.modalIsOpened = false;
        },
        openModal(productId) {
            this.modalIsOpened = true;
            this.editItem = {
              
                ...Object.assign({}, this.$store.state.produits[productId]),
            };
            this.editIndex = productId;
        },
        updateProduct() {
            if (
                this.editItem.titre &&
                this.editItem.prix &&
                this.editItem.moq &&
                this.editItem.categorieId
            ) {
              
                this.$store.commit("updateProduct", { ...this.editItem });

          
                this.$store.commit("saveProducts");

        
                this.editItem = {};
                this.modalIsOpened = false;
            }
        },
    },
};
</script>

<style>
.action-bar {
    width: 90%;
    margin: 25px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.action-bar h1 {
    font-size: 1.5rem;
}

.filter-bar {
    width: 90%;
    margin: 0 auto;
}

.filter-bar input {
    padding: 5px;
    border: none;
    border-bottom: 1px solid var(--clr-dark);
    outline: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.listing-template {
    min-height: 80vh;
    width: 90%;
    margin: 25px auto;
}

.listing-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #000;
    background-color: var(--clr-light-grey);
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 15px;
}

.listing-box figure {
    min-width: 50px; max-width: 200px;
    aspect-ratio: 1;
    border-radius: 15px;
    overflow: hidden;
}

.listing-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.listing-box p {
    margin: 0.5rem 0;
}

.listing-box h2 {
    font-size: 1.2rem;
}

.box-numbers {
    font-style: italic;
}

.box-avail span {
    font-style: italic;
}

.box-actions {
    display: flex;
}

/* Modal */

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.modal-content {
    position: relative;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    max-width: 390px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.modal-content form {
    width: 100%;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    font-size: 1rem;
    z-index: 2;
}

.modal-content label {
    display: block;
    margin-top: 1rem;
    font-weight: bold;
    color: var(--clr-dark);
    margin-bottom: 5px;
}

.modal-content input,
.modal-content textarea,
.modal-content select {
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 10px 0;
    outline: none;
    border: none;
    background-color: var(--clr-light-grey);
    text-align: center;
    border-radius: 5px;
}

textarea {
    resize: none;
    font-size: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
}

.modal-content button {
    margin-top: 2rem;
}

[v-cloak] {
    display: none;
}
</style>
