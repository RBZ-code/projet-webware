<template>
    <div class="main-footer">
        <div class=row>
            <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.link">
                <i :class="icon.iconClass" style="color: #fff"></i>
            </a>
        </div>
        <nav class="row">
            <ul>
                <li v-for="(link,index) in footerLinks" :key="index">
                <a :href="link.href">{{ link.text }}</a>
                </li>  
            </ul>
        </nav>
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
                {text: 'Catalogue', href: '/catalogue'},
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

.main-footer{
    background: var(--clr-dark);
    padding: 50px;
    text-align: center;
    padding: 40px;
}

.main-footer h3 {
    color: var(--clr-white);
}

.main-footer .row{
    font-size: 1.2em;
    margin: 50px 0;
}

.main-footer .row:first-of-type {
    margin-top: 0;
}

.main-footer .row:last-of-type {
    margin-bottom: 0;
}

.main-footer .row a{
    text-decoration:none;
    color: var(--clr-white);
    transition: 200ms ease-in-out;
    margin: 0 15px;
}

.main-footer .row a:hover{
    color: var(--clr-blue);
}

.main-footer .row ul li{
    display: inline-block;
}

.main-footer .row a i{
    font-size: 2rem;
}
.input-container{
    position: relative;
    margin: 1rem auto;

    width: 250px;
}
input{
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
}
.input-container input{
    padding: 5px;
}
.submit-btn {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    width: 80px;
    border-radius: 5px;
    background-color: var(--clr-blue);
    color: #fff;
    text-align: center;
    font-size: .8rem;
    border: none;
}
.submit-btn:hover{
    opacity: 70%;
    cursor: pointer;
    transition:0.3s;
}

@media screen and (max-width: 500px) {
    .main-footer .row ul li{
    display: block;
}
}

</style>