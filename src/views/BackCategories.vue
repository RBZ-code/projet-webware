<template>
    <BackNav />
    <header class="action-bar">
        <h1>Gestion des catégories</h1>
        <MyButton
            label="Ajouter une catégorie"
            modifier="action"
            @GeneralEventBtn="addCat"
        />
    </header>
    <form class="filter-bar">
        <label for="back-product-search">Rechercher un produit :</label>
        <input
            id="back-product-search"
            name="search"
            type="search"
            placeholder="Nom de la categorie"
            v-model="searchQuery"
        />
    </form>
    <div class="listing-template">
        <table class="listing-tab">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom de catégorie</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cat, index) in filteredCategories" :key="index">
                    <td>{{ cat.id }}</td>
                    <td>{{ cat.name }}</td>
                    <td>
                        <MyButton
                            label="Modifier"
                            modifier="edit"
                            @GeneralEventBtn="openModal(index)"
                        />
                        <MyButton
                            label="Supprimer"
                            modifier="edit"
                            @GeneralEventBtn="deleteCat(cat.id)"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="modalIsOpened" v-cloak id="editModal" class="modal">
        <div class="modal-content">
            <span v-on:click="closeModal" class="close-button">X</span>
            <h2>Modifier la catégorie</h2>
            <form>
                <label for="editName">Nom de la catégorie :</label>
                <input v-model="editCat.name" type="text" id="editName" />

                <MyButton
                    label="Modifier"
                    modifier="action"
                    @GeneralEventBtn="updateCat"
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
            newCat: {},
            editCat: {},
            searchQuery: "",
            modalIsOpened: false,
            editIndex: 0,
        };
    },
    methods: {
        openModal(catId) {
            this.modalIsOpened = true;
            this.editCat= {
                ...Object.assign({}, this.$store.state.categories[catId]),
            };
            this.editIndex = catId;
        },

        closeModal() {
            this.modalIsOpened = false;
        },

        updateCat() {
            if (this.editCat.name) {
                this.$store.commit("updateCat", {
                    id: this.editCat.id,
                    name: this.editCat.name,
                });

            
                this.$store.commit("saveCat");

            
                this.editCat = {};
                this.modalIsOpened = false;
            }
        },

        deleteCat(categorieId) {
            let check = confirm(
                "Êtes-vous sûr de vouloir supprimer cette catégorie ?"
            );
            if (check) {
                this.$store.dispatch("deleteCat", categorieId);
            }
        },
        addCat() {
            let lastCatId = this.$store.state.categories.reduce(
                (maxId, category) =>
                    category.id > maxId ? category.id : maxId,
                0
            );
            let catId = lastCatId + 1;
            let catName = prompt(
                "Veuillez entrer le nom de la catégorie à ajouter :"
            );

            if (catName) {
                this.newCat.id = catId;
                this.newCat.name = catName;
                this.$store.commit("addCat", this.newCat);
                this.$store.commit("saveCat");
                this.newCat = {};
            } else {
                alert("Veuillez renseigner un nom");
            }
        },
       
    },
    computed: {
        categories() {
            return this.$store.state.categories;
        },
        filteredCategories() {
            if (!this.searchQuery) return this.categories;
            let query = this.searchQuery.toLowerCase();
            return this.categories.filter((cat) =>
                cat.name.toLowerCase().includes(query)
            );
        },
    },
};
</script>

<style>
table {
    text-align: center;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 1rem;
}

table th,
table td {
    padding: 0.5rem 0;
    line-height: 1.5rem;
}

table tbody tr:nth-child(odd) {
    background-color: var(--clr-light-grey);
}

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
</style>
