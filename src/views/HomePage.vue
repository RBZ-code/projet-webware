<template>
    <div class="banniere">
        <div class="overlay">
            <h1>{{ message }}</h1>
            <h2>
                Inscrivez-vous maintenant pour profiter de nos offres exclusives
                !
            </h2>
            <MyButton
                @click="toRegisterPage"
                label="Insciption "
                backgroundColor="hp"
                class="MyButton"
            />
        </div>
    </div>
    <div class="bordero"></div>
    <div class="form-container">
        <h4>Contactez nous, nous repondront au mieux à vos attentes</h4>
        <ContactForm @addVisitor="handleAddVisitor" />
    </div>
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
    },

    computed: {
        ...mapState(["visitorData"]),
    },
};
</script>

<style scoped>


h4{
    color:#252525;
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
    background-color: rgba(37, 37, 37, 0.8);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 40px;
    margin-bottom: 50px;
}

h2 {
    font-style: italic;
    margin-bottom: 20px;
}

.form-container {
    width: 80%;
    max-width: 600px;
    margin: 200px auto;
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.MyButton{
    margin-top: 50px;
}
</style>
