<template>
    <nav class="back-nav">
        <router-link to="/back-products">Produits</router-link>
        <router-link to="/back-categories">Catégories</router-link>
        <router-link to="/back-users">Utilisateurs</router-link>
        <router-link to="/back-orders">Commandes</router-link>
    </nav>
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
import MyButton from "@/components/FrontOffice/MyButton.vue";

export default {
    components: {
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
    text-align: left;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 1rem;
}

table th,
table td {
    padding: .5rem 0;
}

table tbody tr:nth-child(odd) {
    background-color: var(--clr-light-grey);
}
</style>