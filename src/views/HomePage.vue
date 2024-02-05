<template>

  <div class="banniere">
    <img alt="Vue logo" src="../assets/banniere.jpg" />
   <div class="text-container">
                   <h3 class="bienvenue">{{ curentUserMessage }}</h3>
    <h1 v-text="message"></h1>
    <p v-text="paragraph"></p>
    <p class="paragraph2" v-text="paragraph2"></p>
    <MyButton
        @click="toRegisterPage"
      label="Inscription"
      backgroundColor="black"
    /></div> 
    </div>
    
    <CardsHomePage />

    <br>
    <ContactForm @addVisitor="handleAddVisitor" />
    <br>
    

    <FooterVue />
</template>    

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";
import ContactForm from "@/components/FrontOffice/ContactForm.vue";

import { mapState } from 'vuex';
import FooterVue from "@/components/FrontOffice/FooterVue.vue";
import CardsHomePage from "@/components/FrontOffice/CardsHomePage.vue";



export default {
    data() {
        return {

            message: 'Bienvenue chez Webwares !',
            curentUserMessage:"",
            paragraph: "Découvrez l'excellence du mobilier d'intérieur chez WebWares, dédié aux grossistes. Nous vous offrons un assortiment exclusif de pièces élégantes et fonctionnelles. Redéfinissez votre espace intérieur avec nos collections soigneusement sélectionnées.",

            paragraph2 : "Cliquez ci-dessous pour vous inscrire et accéder au catalogue.",
            

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
        FooterVue,
        CardsHomePage
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
    width: 100%;
    height: auto;
    background-size: contain;
    opacity: 90%;
}
h1, p {
    position: absolute;
    top: 13vw;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 40px;
}

p {
    top: 20vw;
    left: 50%;
    font-size: 20px;
    line-height: 2;
    margin-top: 2vh;
}
.paragraph2{
    top: 28vw;
}

@media only screen and (min-width: 375px) and (max-width: 767px){
   .paragraph2, p{
    font-size: 12px;
    width: 80%;
    top: 46vw;
    line-height: 2;
   }
   h1{
    font-size: 16px;
    top: 32vw;
   }


.welcome-message {
    font-size: 40px;
    margin-bottom: 10px;
    text-shadow: 0 0 5px #000000;
    color: #f1f1f1;
}


.bienvenue{
    font-size: 3rem;
    margin-bottom: 50px;
    text-decoration-line: underline;
}
</style>
