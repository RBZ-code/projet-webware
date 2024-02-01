<template>
    <BackNav />
    <header class="action-bar">
        <h1>Gestion des catégories</h1>
        <MyButton label="Ajouter une catégorie" modifier="action" @GeneralEventBtn="addCategory()" />
    </header>
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
                <tr v-for="(cat, index) in categories" :key="index">
                    <td>{{ cat.id }}</td>
                    <td>{{ cat.name }}</td>
                    <td>
                        <MyButton label="Modifier" modifier="edit" @GeneralEventBtn="editData" />
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
        MyButton
    },
    computed: {
        categories() {
            return this.$store.state.categories;
        },
        editData() {
            return console.log("edit")
        }
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
    padding: .5rem 0;
    line-height: 1.5rem;
}

/* table th:first-child,
table td:first-child {
    padding-left: 0.5rem;
} */

table tbody tr:nth-child(odd) {
    background-color: var(--clr-light-grey);
}
</style>