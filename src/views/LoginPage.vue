<template>
    <main class="login-background">
        <form class="login-form" @submit.prevent>
            <h1>Connexion</h1>
            <label for="siret">SIRET:</label>
            <input type="text" v-model="siret" class="input-field" />
            <label for="password">Mot de passe:</label>
            <input type="password" v-model="password" class="input-field" />
            <MyButton
                label="Connexion"
                modifier="action"
                @GeneralEventBtn="login"
                class="btn"
            />
        </form>
    </main>
</template>

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";

export default {
    data() {
        return {
            user:[],
            siret: "",
            password: "",
        };
    },
    components: { MyButton },
    methods: {
        login() {
            const user = {
                siret: this.siret,
                password: this.password,
            };

            if (this.isThisValid(user)) {
                const connectedUser = this.$store.state.users.find(
                    (item) =>
                        item.siret == user.siret &&
                        item.password == user.password
                );

                if (connectedUser) {
                    this.$store.commit("setUserConnected", connectedUser);
                    localStorage.setItem("connectedUserId", connectedUser.id);
                    this.$router.push("/");
                }
            } else {
                alert(
                    "Échec de la connexion. Veuillez vérifier vos informations."
                );
            }
        },
        isThisValid(user) {
            return (
                this.$store.state.users.some(
                    (item) => item.siret == user.siret
                ) &&
                this.$store.state.users.some(
                    (item) => item.password == user.password
                )
            );
        },
        logout() {
            this.$store.commit("setUserConnected", null);
            localStorage.removeItem("connectedUserId");
            alert("Vous avez été déconnecté !");
        },
    },

    created() {
        this.$store.dispatch("loadUsers");
    },
};
</script>

<style scoped>

.login-background {
    height: 90vh;
    background-image: url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    margin-bottom: 1rem;
    text-align: center;
}

.login-form {
    width: clamp(300px, 50%, 600px);
    margin: 150px auto;
    padding: 20px;
    background-color: var(--clr-light-grey);
    border-radius: 8px;
    filter: drop-shadow(0 0 2rem var(--clr-dark));
}

.login-form label {
    display: block;
    color: var(--clr-dark);
    margin-bottom: 8px;
}

.login-form .input-field {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    background-color: #ffffff;
    border: none;
    border-radius: 4px;
}

.login-form .input-field:focus {
    outline: none;
    border-color: #44b9da;
}

.btn {
    text-align: center;
    margin: 1rem 0;
}
</style>
