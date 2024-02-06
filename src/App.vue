<template>
    <nav class="main-nav" v-if="isLargeScreen">
        <router-link to="/">Home</router-link>
        <router-link v-if="$store.state.currentUser === null" to="/add"
            >Inscription</router-link
        >
        <router-link to="/connexion" v-if="$store.state.currentUser === null"
            >Connexion</router-link
        >
        <router-link to="/back-products" v-if="isAdminUser()"
            >Back-office</router-link
        >

        <router-link to="/catalogue">Catalogue</router-link>
        <div class="dropdown">
            <a class="dropbtn">Catégories</a>
            <div class="dropdown-content">
                <router-link
                    v-for="category in $store.state.categories"
                    :key="category.id"
                    :to="'/category/' + category.id"
                    class="category-link burger-menu-link"
                >
                    {{ category.name }}
                </router-link>
            </div>
        </div>
        <a href="#" v-if="currentUser" @click="redirectToPanier">Panier</a>
        <a href="#" @click="LogOut" v-if="$store.state.currentUser !== null"
            >Log Out</a
        >
    </nav>
    <nav class="main-nav burger-menu" v-else ref="burgerMenu">
        <div class="burger-icon" @click="toggleBurgerMode">
            <div :class="{ bar: true, 'rotate-bar1': burgerMode }"></div>
            <div :class="{ bar: true, 'hide-bar2': burgerMode }"></div>
            <div :class="{ bar: true, 'rotate-bar3': burgerMode }"></div>
        </div>
        <div v-if="burgerMode" class="burger-content">
            <router-link to="/">Home</router-link>
            <router-link v-if="$store.state.currentUser === null" to="/add"
                >Inscription</router-link
            >
            <router-link
                to="/connexion"
                v-if="$store.state.currentUser === null"
                >Connexion</router-link
            >
            <router-link to="/back-products" v-if="isAdminUser()"
                >Back-office</router-link
            >
            <router-link to="/catalogue">Catalogue</router-link>
            <div class="dropdown">
                <a class="dropbtn">Catégories</a>
                <div class="dropdown-content-burger">
                    <router-link
                        v-for="category in $store.state.categories"
                        :key="category.id"
                        :to="'/category/' + category.id"
                        class="category-link burger-menu-link"
                    >
                        {{ category.name }}
                    </router-link>
                </div>
            </div>
            <a href="#" v-if="currentUser" @click="redirectToPanier">Panier</a>
            <a href="#" @click="LogOut" v-if="$store.state.currentUser !== null"
                >Log Out</a
            >
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
        document.addEventListener("click", this.handleGlobalClick);
    },

    methods: {
        handleGlobalClick(event) {
            const burgerMenu = this.$refs.burgerMenu;

            if (burgerMenu && !burgerMenu.contains(event.target)) {
                this.burgerMode = false;
            }
        },
        toggleBurgerMode() {
            this.burgerMode = !this.burgerMode;
        },

        handleResize() {
            this.isLargeScreen = window.innerWidth > 600;

            if (this.isLargeScreen) {
                this.burgerMode = false;
            }
        },
        LogOut() {
    if (this.$store.state.currentUser) {
        const userId = this.$store.state.currentUser.id;
        console.log("Current User ID before logout:", userId);
    }

    this.$store.commit("setUserConnected", null);
    localStorage.removeItem("connectedUserId");
    this.logoutModalIsVisible = true;
    this.$router.push("/");

    setTimeout(() => {
        this.logoutModalIsVisible = false;
    }, 2000);
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

/* Main Navigation */
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

.category-link:hover {
    font-weight: bold;
    color: var(--clr-blue) !important;
    background-color: transparent !important;
}

.category-link:active {
    font-weight: bold;
    color: #ffffff;
}
.burger-menu-link {
    border-radius: 0 !important;
}

.burger-menu-link:hover {
    font-weight: bold;
    color: #ffffff !important;
    background-color: var(--clr-blue) !important;
    padding: 12px 16px !important;
}

.burger-menu-link:active {
    padding: 12px 16px !important;
}

/* Burger Menu */
.burger-menu {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    padding: 20px;
}

.burger-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    width: 30px;
    z-index: 10;
    position: fixed;
}

.bar {
    background-color: black;
    height: 3px;
    width: 25px;
    transition: 0.4s;
}

.burger-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    width: 50vw;
    background-color: rgba(196, 196, 196, 0.4);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
}

/* Dropdown Content */
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

.dropdown-content-burger {
    display: none;
    position: absolute;
    right: 100px;
    bottom: 0rem;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content-burger a {
    color: #000;
    padding: 12px 16px !important;
    text-decoration: none;
    display: block;
    margin: 0;
}

.dropdown-content a:hover {
    background-color: var(--clr-light-grey);
    padding: 12px 16px !important;
}

.dropdown-content a:active {
    padding: 12px 16px !important;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropdown-content-burger {
    display: block;
}

/* Modal */
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

.rotate-bar1 {
    transform: rotate(-45deg) translate(-6px, 6px);
}

.hide-bar2 {
    opacity: 0;
}

.rotate-bar3 {
    transform: rotate(45deg) translate(-6px, -6px);
}

.burger-icon .bar {
    background-color: black;
    height: 3px;
    width: 25px;
    transition: 0.4s;
}
</style>
