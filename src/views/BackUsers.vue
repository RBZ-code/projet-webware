<template>
    <BackNav />
    <header class="action-bar">
        <h1>Gestion des utilisateurs</h1>
    </header>
    <form class="filter-bar" @submit.prevent="">
            <label for="back-user-search">Rechercher un client :
                <input id="back-user-search" name="search" type="search" placeholder="Raison sociale"
                    v-model="searchQuery" />
            </label>
        </form>
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
                <tr v-for="(user, index) in filteredUsers" :key="index">
                    <td>{{ user.id }}</td>
                    <td>{{ user.raisonSociale }}</td>
                    <td>{{ user.siret }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <MyButton
                            label="Changer rôle"
                            modifier="edit"
                            @GeneralEventBtn="changeRole(index)"
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
            searchQuery: "",
        };
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
        filteredUsers() {
            if (!this.searchQuery) return this.users;
            let query = this.searchQuery.toLowerCase();
            return this.users.filter((user) =>
                user.raisonSociale.toLowerCase().includes(query)
            );
        },
    },
    methods: {
        changeRole(index) {
        if (confirm("Changer le rôle de l'utilisateur?")) {
            const newRole = this.$store.state.users[index].role === "admin" ? "user" : "admin";
            this.$store.commit("changeUserRole", { index, newRole });
        }
    },
    },
};
</script>

<style></style>
