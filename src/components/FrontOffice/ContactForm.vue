<template>
  <h2>Nous joindre</h2>
    <div>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Prénom" v-model="localVisitor.firstName" required>
        <input type="text" placeholder="Nom" v-model="localVisitor.lastName" required>
        <input type="email" placeholder="Email" v-model="localVisitor.email" required>
        <textarea placeholder="Veuillez écrire votre message ici" v-model="localVisitor.message" required></textarea>
        <br>
        
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </template>
  
  <script>

export default {
    props: {
      visitor: Object,
    },
    data(){
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
        this.$emit('addVisitor', this.localVisitor);
        this.addToLocalStorage(this.localVisitor);
        this.resetForm();
      },

      resetForm() {
        this.localVisitor.firstName = '';
        this.localVisitor.lastName = '';
        this.localVisitor.email = '';
        this.localVisitor.message = '';
      },
      addToLocalStorage(visitor) {
        let currentData = JSON.parse(localStorage.getItem('visitor')) || []
        currentData.push(visitor);
        localStorage.setItem('visitor', JSON.stringify(currentData));
      }
    },
  };
  </script>
  
  <style scoped>
    form{
        margin-top: 20px;
        display: grid;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    input{
        width: 50vw;
        height: 5vh;
        text-align: start;
        padding: 10px;
        
    }
    textarea{
        height: 200px;
        padding: 10px;
    }
    h2{
      margin: 10vh;
    }
    button{
      height: 5vh;
      margin-bottom: 10vh;
    }
  </style>
  