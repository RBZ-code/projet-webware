<template>
    <div>
        <div class="banniere">
  
            <div class="overlay">
       
                <h3 class="bienvenue">{{ curentUserMessage }}</h3>

                <h1 class="welcome-message">{{ message }}</h1>
                <h2 class="tagline">
                    Votre solution de commande en ligne simplifiée
                </h2>
                <MyButton
                    @click="toRegisterPage"
                    label="Commencer dès maintenant"
                    backgroundColor="hp"
                    class="MyButton"
                    v-if="$store.state.currentUser === null"
                />
            </div>
        </div>
        <div class="bordero"></div>
        <div class="form-container">
            <h4>Contactez-nous pour en savoir plus ou poser des questions.</h4>
            <ContactForm @addVisitor="handleAddVisitor" />
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";
import ContactForm from "@/components/FrontOffice/ContactForm.vue";
import { mapState } from "vuex";

export default {
    data() {
        return {
            curentUserMessage:"",
            message: "Bienvenue sur WebWares !",
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
    },

    methods: {
        handleAddVisitor(visitor) {
            this.$store.commit("updateVisitorData", { ...visitor });
        },
        toRegisterPage() {
            this.$router.push("/add");
        },
        MessageCurrentUser(){
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
h4 {
    color: #252525;
    margin: 30px auto;
    text-align: center;
}

.banniere {
    position: relative;
    height: 700px;
    background-image: url("../assets/banniere.jpg");
    background-size: cover;
    background-position: center;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.welcome-message {
    font-size: 40px;
    margin-bottom: 10px;
    text-shadow: 0 0 5px #000000;
    color: #f1f1f1;
}

.tagline {
    font-style: italic;
    margin-bottom: 20px;
    color: #f1f1f1;
    text-shadow: 0 0 1px #000000;
}

.form-container {
    width: 80%;
    max-width: 600px;
    margin: 50px auto;
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.MyButton {
    margin-top: 20px;
}

.bienvenue{
    font-size: 3rem;
    margin-bottom: 50px;
    text-decoration-line: underline;
}
</style>
