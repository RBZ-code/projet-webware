<template>
    <div>
        <h2>Pas encore convaincu ? On répond à vos questions !</h2>
        <form @submit.prevent="submitForm">
            <input
                type="text"
                placeholder="Prénom"
                v-model="localVisitor.firstName"
                required
            />
            <input
                type="text"
                placeholder="Nom"
                v-model="localVisitor.lastName"
                required
            />
            <input
                type="email"
                placeholder="Email"
                v-model="localVisitor.email"
                required
            />
            <textarea
                placeholder="Veuillez écrire votre message ici"
                v-model="localVisitor.message"
                required
            ></textarea>
            <MyButton
                @click="submit"
                label="Envoyer"
                modifier="action" 
            />
        </form>
    </div>
</template>

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";


export default {
    components:{
        MyButton
    },
    props: {
        visitor: Object,
    },
    data() {
        return {
            localVisitor: {
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            },
        };
    },

    methods: {
        submitForm() {
            this.$emit("addVisitor", this.localVisitor);
            this.addToLocalStorage(this.localVisitor);
            this.resetForm();
        },

        resetForm() {
            this.localVisitor.firstName = "";
            this.localVisitor.lastName = "";
            this.localVisitor.email = "";
            this.localVisitor.message = "";
        },
        addToLocalStorage(visitor) {
            let currentData = JSON.parse(localStorage.getItem("prospects")) || [];
            currentData.push(visitor);
            localStorage.setItem("prospects", JSON.stringify(currentData));
        },
    },

};
</script>

<style scoped>

h2 {
  margin-top: 50px;
  text-align: center;
  font-size: 1.8rem;
}

form {
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
}

input {
    max-width: 350px;
    width: 100%;
    height: 40px;
    text-align: start;
    padding: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
}

textarea {
    max-width: 350px;
    width: 100%;
    height: 150px;
    padding: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    font-family: var(--font-text);
}

</style>
