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
                    <th>Raison sociale</th>
                    <th>SIRET</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{ user.id }}</td>
                    <td>{{ user.raisonSociale }}</td>
                    <td>{{ user.siret }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <MyButton label="Modifier" modifier="edit" @GeneralEventBtn="login" />
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
        users() {
            return this.$store.state.users;
        },
    },
};
</script>

<style>

</style>