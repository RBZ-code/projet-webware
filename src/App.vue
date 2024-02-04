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
        <div class="dropdown">
            <a class="dropbtn">Catégories</a>
            <div class="dropdown-content">
                <router-link
                    v-for="category in $store.state.categories"
                    :key="category.id"
                    :to="'/category/' + category.id"
                    
                >
                    {{ category.name }}
                </router-link>
            </div>
        </div>
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
    min-height: 100vh;
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
    height: 100px;
    gap: 2rem;
    flex-wrap: wrap;
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



.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    background-color: transparent;
    color: #000;
    border: none;
    padding: 0;
    font-size: 16px;
    cursor: pointer;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: #000;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    margin: 0;
}

.dropdown-content a:hover {
    background-color: var(--clr-light-grey);
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    color: var(--clr-blue);
}
</style>
