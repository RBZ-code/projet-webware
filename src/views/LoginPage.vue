<template>
    <form class="login-form" @submit.prevent>
        <label for="siret">SIRET:</label>
        <input type="text" v-model="siret" class="input-field" />

        <label for="password">Mot de passe:</label>
        <input type="password" v-model="password" class="input-field" />


        <MyButton
            label="Connexion"
            backgroundColor="green"
            @GeneralEventBtn="login"
        />
    </form>
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
                    this.$store.commit("setUserConnected", connectedUser.id);
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

.login-form {

    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: var(--clr-light-grey);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
    border: 2px solid #c4c4c4;
    border-radius: 4px;
}

.login-form .input-field:focus {
    outline: none;
    border-color: #44b9da;
}

.login-form button {
    margin-top: 16px;
}
</style>
