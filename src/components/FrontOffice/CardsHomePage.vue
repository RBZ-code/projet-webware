<template>
      <h2>Nos engagements</h2>
      
      <div class="container-card">
        <div class="card" v-for="(card, index) in cards"
          :key="index" 
          :class="{'aos-init':true, 'aos-animate': index !== 0}"
          data-aos="fade-right"
          :data-aos-delay="index * 600">
          <h3>{{ card.title }}</h3>
          <img :src="card.img" alt="Card image">
          <ul>
            <li v-for="(point, i) in card.points" :key="i">{{ point }}</li>
          </ul>
        </div>
      </div>
      <div class="parallax">
        <h1 class="text-parallax" v-text="text"></h1>
      </div>
      <br>
  </template>
  
  <script>
    import AOS from 'aos';
    import 'aos/dist/aos.css';

  export default {
    
    mounted(){
        AOS.init();
    },
    data() {
      return {
        cards: [
          {
            img: require('@/assets/card-homepage.svg'),
            title: "Respect environnemental",
           points:[
            "Durabilité des produits","Emballage écologique","Certifications environnementales",
            "Énergie renouvelable",

           ],
          },
          {
            img: require('@/assets/card-homepage2.svg'),
            title: "Satisfaction clients",
            points:[
                "Expérience client exceptionnelle","Satisfaction garantie","Écoute attentive des clients",
                "Politique de retour facile"
            ]
              
          },
          {
            img: require('@/assets/card-homepage3.jpg'),
            title: "Livraison rapide",
            points:[
                "Commandez aujourd'hui, recevez demain","Expédition express"
            ]
              
          },
        ],
        text: 'Inscrivez-vous dès maintenant !',
      };
    },
  };
  </script>
  
  <style scoped>
*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h2 {
  margin-top: 10vh;
}

.container-card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 95vw;
  height: auto;
  min-height: 80vh;
  margin: 0 auto;
 

}

.card {
  width: 20%;
  height: 100%;
  border: 2px solid black;
  border-radius: 50px;
  color: #3f3f3f;
  padding: 20px;
  border: 0.5vmin solid #05060f;
  box-shadow: 0.6rem 0.6rem #05060f;
}

img{
   width: 12vw; 
   height: 12vw;
}
ul{
    padding: 1vw;
    
}
li {
    text-align: start;
    line-height: 2;
}
.parallax{
    margin-top: 20vh;
    background-image: url('@/assets/parallax.jpg');
    width: 100%;
    height: 35vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.text-parallax{
    position: absolute;
    top: 40%;
    left: 50%;
}

@media only screen and (min-width: 375px) and (max-width: 767px) {
  .container-card{
   flex-wrap: wrap;
   gap: 50px;
   margin-top: 2vh;
  }
  .card{
    width: 60%;
  }
  img{
    width: 60%;
    height: 30%;
  }
}


@media (min-width: 768px) and (max-width: 1199px) {
  .card {
    width: 30%; 
  }
}
@media(min-width: 1200px){
  
  .container-card{
    display: flex;
   
  }.card{
    width: 20%;
    height: 50vh;
  }
}
</style>