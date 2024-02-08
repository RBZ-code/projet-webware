<template>
    <BackNav></BackNav>
    <div class="product-creation-container">
        <form>
            <h2>Ajout d'un produit au catalogue</h2>

            <label for="image">Image du produit :</label>
            <div @dragover.prevent @drop="handleDrop" class="drop-zone">
                Faites glisser et déposez une image ici, ou cliquez pour
                sélectionner une image.
            </div>
            <label for="name">Nom du produit :
                <input v-model="newItem.titre" type="text" id="name" name="name" />
            </label>

            <label for="editDesc">Description produit :
                <textarea v-model="newItem.description" type="text" id="editDesc" rows="5"></textarea>
            </label>

            <label for="price">Prix du produit :
                <input v-model="newItem.prix" type="number" id="price" name="price" />
            </label>

            <label for="quantity">MOQ :
                <input v-model="newItem.moq" type="number" id="quantity" name="quantity" />
            </label>

            <label for="stock">Nombre en stock :
                <input v-model="newItem.stock" type="number" id="stock" name="stock" />
            </label>

            <label for="category">Catégorie du produit :
                <select v-model="newItem.categorieId" id="category" name="category">
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </label>

            <label for="availability">Disponibilité du produit :
                <select v-model="newItem.disponibilite" id="availability">
                    <option :value="true">
                        Disponible
                    </option>
                    <option :value="false">
                        Non-disponible
                    </option>
                </select>
            </label>

            <MyButton label="Ajouter le produit" modifier="action" @GeneralEventBtn="addProduct" />
        </form>
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
            newItem: {

                id: null,
                titre: "",
                prix: null,
                moq: null,
                categorieId: null,
                stock: null,
                disponibilite: true,
            },
        };
    },
    computed: {
        categories() {
            return this.$store.state.categories;
        },
    },
    methods: {

        handleDrop(event) {
            event.preventDefault();

            const files = event.dataTransfer.files;

            if (files.length > 0) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    this.newItem.image = e.target.result;
                };

                reader.readAsDataURL(files[0]);
            }
        },
        addProduct() {
            if (
                this.newItem.titre &&
                this.newItem.prix &&
                this.newItem.moq &&
                this.newItem.categorieId
            ) {

                this.newItem.id = this.$store.state.lastProductID;


                this.$store.commit("addProduct", { ...this.newItem });


                this.$store.commit("saveProducts");


                this.newItem = {
                    id: null,
                    titre: "",
                    prix: null,
                    moq: null,
                    categorieId: null,
                };
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
.product-creation-container select,
.product-creation-container textarea {
    display: block;
    width: 280px;
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

.drop-zone {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    cursor: pointer;
}

.drop-zone:hover {
    background-color: #f5f5f5;
}
</style>
