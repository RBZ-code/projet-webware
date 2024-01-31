
Vous pouvez utiliser mapState pour simplifier la récupération de l'état Vuex dans votre composant HomePage. Cela peut rendre votre code plus concis et plus lisible. Voici comment vous pouvez le faire :

HomePage.vue avec mapState
html
Copy code
<template>
  <div class="banniere">
    <img alt="Vue logo" src="../assets/banniere.jpg" />
    <h1 v-text="message"></h1>
    <MyButton
        @click="toRegisterPage"
      label="En savoir plus"
      backgroundColor="black"
    />
    </div>
   
    <!-- <div v-for="(prod, index) in products" :key="index">
        <h2>{{ prod.titre }}</h2>
        <img :src="prod.image" :alt="prod.titre" />
    </div> -->

    <ContactForm @addVisitor="handleAddVisitor" />
    
</template>    

<script>

import MyButton from "@/components/FrontOffice/MyButton.vue";
import ContactForm from "@/components/FrontOffice/ContactForm.vue";
import { mapState } from 'vuex';

export default {
    data(){
        return {
            message: 'Bienvenue chez Webwares !',
            
            visitorData: {
                fistName: "",
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
        handleAddVisitor(visitor){
            this.$store.commit ('uptdateVisitorData',{...visitor});
        },
        toRegisterPage(){
            this.$router.push('/add');
        }
    },

    computed:{
        ...mapState(['visitorData'])
    }
};
</script>

<style>
*, ::after, ::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img{
    position: relative;
    width: 100%;
    height: 700px;
    background-size: contain;
    opacity: 90%;
}
h1{
    position: absolute;
    text-align: center;
    top: 10vw;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 20px;
    font-size: 40px;
};



</style>