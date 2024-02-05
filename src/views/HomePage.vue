<template>
    <h2 v-if="this.$store.state.currentUser != null" class="welcome">{{ curentUserMessage + " 🤗" }}</h2>
    <header class="banniere">
        <div class="text-container">
            <h1 v-text="message"></h1>
            <p v-text="paragraph"></p>
            <p class="paragraph2" v-text="paragraph2"></p>
            <MyButton @click="toRegisterPage" label="Je m'inscris" modifier="home" />
        </div>
    </header>
    <CardsHomePage />
    <ContactForm @addVisitor="handleAddVisitor" />
</template>    

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";
import ContactForm from "@/components/FrontOffice/ContactForm.vue";

import { mapState } from 'vuex';
import CardsHomePage from "@/components/FrontOffice/CardsHomePage.vue";

export default {
    data() {
        return {
            message: 'Bienvenue chez Webwares',
            curentUserMessage: "",
            paragraph: "Découvrez l'excellence du mobilier d'intérieur chez WebWares, dédié aux grossistes. Nous vous offrons un assortiment exclusif de pièces élégantes et fonctionnelles. Redéfinissez votre espace intérieur avec nos collections soigneusement sélectionnées.",
            visitorData: {
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            },
        };
    },

    components: {
        MyButton,
        ContactForm,
        CardsHomePage
    },

    methods: {
        handleAddVisitor(visitor) {
            this.$store.commit("updateVisitorData", { ...visitor });
        },
        toRegisterPage() {
            this.$router.push("/add");
        },
        MessageCurrentUser() {
            this.curentUserMessage = `Bonjour ${this.$store.state.currentUser.raisonSociale}`
        }

    },

    computed: {
        ...mapState(["visitorData"]),

    },
    created() {
        if (this.$store.state.currentUser !== null) {
            this.MessageCurrentUser();
        }
    },
    watch: {
        '$store.state.currentUser': {
            immediate: true, // Appeler la fonction lors de la création du composant
            handler() {
                if (this.$store.state.currentUser !== null) {
                    this.MessageCurrentUser();
                } else {
                    this.curentUserMessage = "";
                }
            }
        }
    }
};
</script>

<style scoped>
.welcome {
    text-align: center;
    margin-bottom: 50px;
}
.banniere {
    background-image: linear-gradient(to top, #ffffff70, hsla(193, 67%, 56%, 0.5)), url("../assets/banniere.jpg");
    background-size: cover;
    background-position: bottom;
    min-height: 80vh;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000;
}

.banniere h1 {
    font-size: 3rem;
}

.banniere h1,
.banniere p {
    margin-bottom: 1rem;
}

.text-container {
    width: 70%;
}

</style>
