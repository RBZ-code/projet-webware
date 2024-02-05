<template>
    <div class="footer">
        <div class=row>
            <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.link">
                <i :class="icon.iconClass"></i>
            </a>
        </div>
        <div class="row">
            <ul>
                <li v-for="(link,index) in footerLinks" :key="index">
                <a :href="link.href">{{ link.text }}</a>
                </li>  
            </ul>
        </div>
        <br>
        <div class="row">
            <h3>Abonnez-vous à notre newsletter </h3>
            <div class="input-container">
                <input type="email" v-model='userEmail' placeholder="Adresse Email">
                <button class="submit-btn" @click="validateAndSubscribe">Valider</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            socialIcons:[
                {iconClass: 'fa fa-facebook fa-5x', link: '#'},
                {iconClass: 'fa fa-linkedin fa-5x', link: '#'},
                {iconClass: 'fa fa-twitter fa-5x', link: '#'},
                {iconClass: 'fa fa-instagram fa-5x', link: '#'},
            ], 
            footerLinks: [
                {text: 'Nous contacter', href: '#'},
                {text: 'Catalogue', href: '#'},
                {text: 'CGU', href: '#'},
                {text: 'Mentions Légales', href: '#'},
                {text: 'Politique de confidentialité', href: '#'},
            ], 
            userEmail:'',
            subscribedEmails: [],
        }
    },
    methods: {
  validateAndSubscribe() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /* Vérifie le format de l'email */
    if (!emailRegex.test(this.userEmail)) {
      alert('Adresse e-mail invalide');
      return;
    }

    /* Ajoute l'email au tableau subscribedEmails si le mail n'est pas présent */
    if (!this.subscribedEmails.includes(this.userEmail)) {
      this.subscribedEmails.push(this.userEmail);
      alert('Inscription réussie');
    } else {
      alert('Vous êtes déjà inscrit avec cette adresse e-mail');
    }

    // Réinitialisation de l'email
    this.userEmail = '';

    // Met à jour le localStorage
    localStorage.setItem('subscribedEmails', JSON.stringify(this.subscribedEmails));
  }
}



}
</script>

<style scoped>
*, ::after, ::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.footer{
    padding-top: 5vh;
    background:#313131;
    text-align:center;
    min-height: 40vh;
    padding: 40px;
}

.footer .row{
    width:100%;
    padding:0.6% 0%;
    color:white;
    font-size: 1.2em;
}

.footer .row a{
    text-decoration:none;
    color:gray;
    transition:0.3s;
    margin: 0 15px;
}

.footer .row a:hover{
    color:rgb(28, 171, 226);
}

.footer .row ul{
    width:100%;
}

.footer .row ul li{
    display:inline-block;
    margin:0px 30px;
}

.footer .row a i{
    font-size:2em;
    margin:0% 1%;
}
h3 {
    margin-right: 0; 
}
.input-container{
    border-radius: 8px;
    position: relative;
    margin: 2vw;
}
input{
    width: 25vw;
    height: 5vh;
    border-radius: 4px;
    border: none;
}
.input-container input{
    padding: 0.625rem 70px 0.625rem 0.75rem;
}
.submit-btn {
    position: absolute;
    width: 5vw;
    left: 52vw;
    top: 0.2vw;
    bottom: 0.2vw;
    border-radius: 4px;
    background-color: rgb(28, 171, 226);
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
}
.submit-btn:hover{
    opacity: 70%;
    cursor: pointer;
    transition:0.3s;
}
@media (max-width:720px){
.footer{
    text-align:left;
    padding:5%;
}
.footer .row ul li{
    display:block;
    margin:10px 0px;
    text-align:left;
}
input{
    border: 1px solid black;
    width: 70%;
}
.submit-btn{
    width: 15%;
    height: 80%;
    left: 45vw;
    top: 0.5vw ;
    bottom: 0.5vw;
}
.footer .row h3{
    color: white;
    font-size: 1rem; 
    margin-right: 10px;
}
}
@media only screen and (min-width: 375px) and (max-width: 767px){
    .submit-btn{
        width: 16vw ;
        left: 42vw;
        top: 1vw ;
    }
}
@media (min-width: 768px) and (max-width: 1199px){
    .submit-btn{
        width: 8vw ;
        left: 51vw;
        top: 0.5vw ;
        bottom: 0.5vw;
    }
    input{
        border: 1px solid black;
        width: 30vw;
    }
}
</style>