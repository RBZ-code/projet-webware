<template>
    <div>
        <UserForm :user="userData" />
        <MyButton
            label="ajoutez un utilisateur"
            backgroundColor="green"
            @GeneralEventBtn="addUser"
        />
    </div>
    <div v-for="(user, index) in utilisateur" :key="index">
        <h2>{{user.password}}</h2>
        <p>{{ user.siret}}</p>
    </div>
</template>

<script>

import UserForm from "@/components/FrontOffice/UserForm.vue";
import MyButton from "@/components/FrontOffice/MyButton.vue";

export default {
    data() {
        return {
            userData: {},
        };
    },
    components: { UserForm, MyButton },
    methods: {
        addUser() {
            this.$store.commit("addUser", this.userData);
            this.userData = {};
            
        },
    },
    computed: {
        utilisateur() {
            return this.$store.state.users;
        },
    },
    created() {
        this.$store.dispatch('loadUsers')
    }
};
</script>

<style></style>
