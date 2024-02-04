<template>
    <nav class="main-nav" v-if="isLargeScreen">
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
        <a href="#" v-if="currentUser" @click="redirectToPanier">Panier</a>
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
    <nav class="main-nav burger-menu" v-else>
        <div class="burger-icon" @click="toggleBurgerMode">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <div v-if="burgerMode" class="burger-content">
            <!-- Contenu du menu burger -->
            <router-link to="/">Home</router-link>
            <router-link v-if="$store.state.currentUser === null" to="/add"
                >Inscription</router-link
            >
            <router-link to="/catalogue">Catalogue</router-link>
            <router-link
                to="/connexion"
                v-if="$store.state.currentUser === null"
                >Connexion</router-link
            >
            <router-link to="/back-products" v-if="isAdminUser()"
                >Back-office</router-link
            >
            <a href="#" @click="LogOut" v-if="$store.state.currentUser !== null"
                >Log Out</a
            >
            <a href="#" v-if="currentUser" @click="redirectToPanier">Panier</a>
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
        </div>
    </nav>
    <div
        v-if="$store.state.currentUser === null && logoutModalIsVisible"
        v-cloak
        class="modal"
    >
        <div class="modal-content">
            <h2>Déconnexion réussie !</h2>
            <p>Merci de votre visite sur notre site.</p>
        </div>
    </div>
    <router-view />
</template>

<script>
export default {
    data() {
        return {
            logoutModalIsVisible: false,
            isLargeScreen: window.innerWidth > 600,
            burgerMode: false,
        };
    },
    created() {
        this.$store.dispatch("loadUsers");
        this.$store.dispatch("loadCategories");
        window.addEventListener("resize", this.handleResize);
    },

    methods: {
        toggleBurgerMode() {
            this.burgerMode = !this.burgerMode;
        },
        handleResize() {
            this.isLargeScreen = window.innerWidth > 600;

            // Fermer le menu burger lorsqu'on passe à un écran large
            if (this.isLargeScreen) {
                this.burgerMode = false;
            }
        },
        LogOut() {
            this.$store.commit("setUserConnected", null);
            localStorage.removeItem("connectedUserId");
            this.logoutModalIsVisible = true;
            this.$router.push("/");

            setTimeout(() => {
                this.logoutModalIsVisible = false;
            }, 3000);
        },
        isAdminUser() {
            const currentUser = this.$store.state.currentUser;
            return currentUser && currentUser.role === "admin";
        },

        redirectToPanier() {
            this.$router.push({ name: "panier" });
        },
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser !== null;
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
    position: relative;
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

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    position: relative;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    max-width: 500px !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.modal-content h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
}

.modal-content p {
    font-size: 1rem;
}

.burger-menu {
    text-align: center;
    z-index: 1;
}

.burger-icon {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;

}

.bar {
  background-color: #000;
  height: 3px;
  width: 25px;
  transition: 0.4s;

}

.burger-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
