<template>
    <BackNav></BackNav>
    <div class="product-creation-container">
        <form>
            <h2>Ajout d'un produit au catalogue</h2>
            <label for="name">Nom du produit :
                <input v-model="newItem.titre" type="text" id="name" name="name">
            </label>

            <label for="price">Prix du produit :
                <input v-model="newItem.prix" type="number" id="price" name="price">
            </label>

            <label for="quantity">MOQ :
                <input v-model="newItem.moq" type="number" id="quantity" name="quantity">
            </label>

            <label for="category">Catégorie du produit :
                <select v-model="newItem.categorieId" id="category" name="category">
                    <option value="1">Catégorie 1</option>
                    <option value="2">Catégorie 2</option>
                    <option value="3">Catégorie 3</option>
                    <option value="4">Catégorie 4</option>
                </select>
            </label>

            <MyButton label="Ajouter le produit" modifier="action" @GeneralEventBtn="addProduct()" />
        </form>
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
            newItem: {}
        }
    },
    computed: {

    },
    methods: {
        addProduct() {
            if (this.newItem.titre && this.newItem.prix && this.newItem.moq && this.newItem.categorieId) {
                this.$store.commit("addProduct", this.newItem);
                this.$store.commit("saveProducts");
                this.newItem = {};
                this.$router.push("/back-products");
            } else {
                alert("Veuillez remplir tous les champs");
            }
        },
    },

};
</script>

<style>
.product-creation-container {
    width: 90%;
    margin: 1rem auto;
    padding: 1rem;
}

.product-creation-container form {
    background-color: var(--clr-light-grey);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    padding: 2rem;
}

.product-creation-container h2 {
    margin-bottom: 1rem;
}

.product-creation-container label {
    display: block;
    margin-top: 1rem;
}

.product-creation-container input,
.product-creation-container select {
    display: block;
    width: 250px;
    font-size: 1rem;
    margin-top: 5px;
    padding: 10px 0;
    outline: none;
    border: none;
    border-radius: 5px;
}

.product-creation-container button {
    margin-top: 2rem;
}
</style>