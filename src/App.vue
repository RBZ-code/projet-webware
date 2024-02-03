<template>
    <nav class="main-nav">
        <router-link to="/">Home</router-link>
        <router-link v-if="$store.state.currentUser === null" to="/add"
            >Inscription</router-link
        >
        <router-link to="/catalogue">Catalogue</router-link>
        <router-link to="/connexion" v-if="$store.state.currentUser === null"
            >Connexion</router-link
        >
        <router-link to="/back-products" v-if="isAdminUser()"
            >Back-office</router-link
        >
        <a href="#" @click="LogOut" v-if="$store.state.currentUser !== null"
            >Log Out</a
        >
    </nav>
    <router-view />
</template>

<script>
export default {
    created() {
        this.$store.dispatch("loadUsers");
        this.$store.dispatch("loadCategories");
    },
    methods: {
        LogOut() {
            this.$store.commit("setUserConnected", null);
            localStorage.removeItem("connectedUserId");
            alert("Vous avez été déconnecté !");
            this.$router.push("/");
        },
        isAdminUser() {
            const currentUser = this.$store.state.currentUser;
    return currentUser && currentUser.role === "admin";
        },
    },
};
</script>

<style>
#app {
    font-family: system-ui, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--clr-dark);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --clr-blue: #44b9da;
    --clr-light-blue: #c5f4ff;
    --clr-light-grey: #e7e7e7;
    --clr-dark: #252525;
    --clr-white: #fff;
}

.main-nav {
    padding: 30px;
    text-align: center;
}

.main-nav a {
    color: #000;
    text-decoration: none;
    margin: 0 15px;
    transition: 200ms ease-in-out;
}

nav a:hover {
    color: var(--clr-blue);
}

.main-nav a.router-link-exact-active {
    font-weight: bold;
    color: #ffffff;
    background-color: var(--clr-blue);
    border-radius: 9999px;
    padding: 5px 15px;
}
</style>
