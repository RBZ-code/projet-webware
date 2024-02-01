<template>
    <form @submit.prevent>
        <label for="siret">SIRET:</label>
        <input type="text" v-model="siret" />

        <label for="password">Mot de passe:</label>
        <input type="password" v-model="password" />

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
                //mettre le booleen pour passer en mode connecter ici !
                console.log("Connexion autorisée!");
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
    },
    created() {
        this.$store.dispatch("loadUsers");
    },
};
</script>

<style></style>
