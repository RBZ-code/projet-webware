<template>
    <div class="banniere">
        <h1 v-text="message"></h1>
        <MyButton
            @click="toRegisterPage"
            label="En savoir plus"
            backgroundColor="black"
        />
    </div>

    <ContactForm @addVisitor="handleAddVisitor" />
</template>

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";
import ContactForm from "@/components/FrontOffice/ContactForm.vue";
import { mapState } from "vuex";

export default {
    data() {
        return {
            message: "Bienvenue chez Webwares !",

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
        handleAddVisitor(visitor) {
            this.$store.commit("uptdateVisitorData", { ...visitor });
        },
        toRegisterPage() {
            this.$router.push("/add");
        },
    },

    computed: {
        ...mapState(["visitorData"]),
    },
};
</script>

<style>


.banniere{
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/banniere.jpg");
    background-size: cover;
    width: 100%;
    height: 700px;
    opacity: 90%;
}

h1 {
  
    color: #fff;
    padding: 20px;
    font-size: 40px;
}
</style>
