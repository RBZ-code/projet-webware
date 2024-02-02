<template>
    <BackNav />
    <header class="action-bar">
        <h1>Gestion des utilisateurs</h1>
    </header>
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
                        <MyButton label="Changer rôle" modifier="edit" @GeneralEventBtn="login" />
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
        users() {
            return this.$store.state.users;
        },
    },
   
};
</script>

<style>

</style>