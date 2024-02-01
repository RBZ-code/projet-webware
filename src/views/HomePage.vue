<template>
    <div>
        <MyButton
            label="LogOut"
            modifier="edit"
            @click="logout"
            v-if="$store.state.currentUser != null"
        />
    </div>
</template>

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";

export default {
    components: {
        MyButton
    },
    computed: {

    },
    methods: {
    logout() {
        this.$store.commit("setUserConnected", null);
        localStorage.removeItem("connectedUserId");
        alert("Vous avez été déconnecté !");
    },
    // ... autres méthodes ...
},
};
</script>
