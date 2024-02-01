<template>
    <BackNav></BackNav>
    <div>
        <form>
                <label for="name">Nom du produit :</label>
                <input v-model="newItem.titre" type="text" id="name" name="name"><br>

                <label for="price">Prix du produit :</label>
                <input v-model="newItem.prix" type="number" id="price" name="price"><br>

                <label for="quantity">MOQ :</label>
                <input v-model="newItem.moq" type="number" id="quantity" name="quantity"><br>

                <label for="category">Catégorie du produit :</label>
                <select v-model="newItem.categorieId" id="category" name="category">
                    <option value="category1">Catégorie 1</option>
                    <option value="category2">Catégorie 2</option>
                    <option value="category3">Catégorie 3</option>
                </select><br>
                <br><br>
                
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

</style>