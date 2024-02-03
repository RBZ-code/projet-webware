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
                            @GeneralEventBtn="editData"
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
        };
    },
    methods: {
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
        editData() {
            return console.log("edit");
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
</style>
