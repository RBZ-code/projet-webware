<template>
    <BackNav />
    <header class="action-bar">
        <MyButton label="Ajouter un produit" modifier="action" @GeneralEventBtn="goToAddProduct()" />
    </header>
    <div class="listing-template">
        <div class="listing-box" v-for="(prod, index) in products" :key="index">
            <figure>
                <img :src="prod.image" :alt="prod.titre" />
            </figure>
            <div>
                <h2>{{ prod.titre }}</h2>
                <p>{{ prod.description }}</p>
                <p class="box-numbers">{{ prod.prix + "€" + " - MOQ " + prod.moq }}</p>
                <div class="box-actions">
                    <MyButton label="Modifier" modifier="edit" @GeneralEventBtn="openModal(prod.id)" />
                    <MyButton label="Supprimer" modifier="edit" @GeneralEventBtn="deleteProduct(prod.id)" />
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div v-if="modalIsOpened" v-cloak id="editModal" class="modal">
            <div class="modal-content">
                <span v-on:click="closeModal()" class="close-button">X</span>
                <h2>Modifier le produit</h2>
                <form>
                    <label for="editName">Nom du produit :</label>
                    <input v-model="editItem.titre" type="text" id="editName">

                    <label for="editDesc">Description produit :</label>
                    <textarea v-model="editItem.description" type="text" id="editDesc" rows="5"></textarea>

                    <label for="editPrice">Prix du produit :</label>
                    <input v-model="editItem.prix" type="number" id="editPrice">

                    <label for="editQuantity">MOQ :</label>
                    <input v-model="editItem.moq" type="number" id="editQuantity">

                    <label for="editCategory">Catégorie produit:</label>
                    <select v-model="editItem.categorieId" id="editCategory">
                        <option value="1">Catégorie 1</option>
                        <option value="2">Catégorie 2</option>
                        <option value="3">Catégorie 3</option>
                        <option value="4">Catégorie 4</option>
                    </select>

                    <MyButton label="Modifier" modifier="action" @GeneralEventBtn="updateProduct()" />
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
        MyButton
    },
    data() {
        return {
            modalIsOpened: false,
            editItem: {},
            editIndex: -1
        }
    },
    computed: {
        products() {
            return this.$store.state.produits;
        },
    },
    methods: {
        goToAddProduct(){
            this.$router.push("/back-products-add");
        },
        deleteProduct(productId) {
            let check = confirm("Êtes-vous sûr de vouloir supprimer ce produit ?");
            if (check) {
                this.$store.dispatch("deleteProduct", productId);
            }
        },
        closeModal() {
            this.modalIsOpened = false;
        },
        openModal(productId) {
            this.modalIsOpened = true;
            this.editItem = {...this.$store.state.produits[productId-1]};
            this.editIndex = productId;
        },
        // updateProduct() {
        //     if (editItem.titre && editItem.description && editItem.prix && editItem.moq && editItem.categorieId) {
        //         this.$store.state.produits[this.editIndex] = this.editItem;
        //         this.editItem = {};
        //         this.closeModal();
        //     }
        // }
    },
};
</script>

<style>

.action-bar {
    width: 90%;
    margin: 25px auto;
}

.listing-template {
    width: 90%;
    margin: 25px auto;
}

.listing-box {
    display: flex;
    gap: 1rem;
    color: #000;
    background-color: var(--clr-light-grey);
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 15px;
}

.listing-box figure {
    width: 100px;
    height: 100px;
    border-radius: 15px;
    overflow: hidden;
}

.listing-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.listing-box p {
    margin: .5rem 0;
}

.box-numbers {
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
    width: 250px;
    font-size: 1rem;
    padding: 10px 0;
    outline: none;
    border: none;
    background-color: var(--clr-light-grey);
    text-align: center;

}

textarea {
    resize: none;
    font-size: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.modal-content button {
    margin-top: 2rem;
}

[v-cloak] {
    display: none;
}
</style>
