<template>

  <h2>Nos engagements</h2>
  <div class="container-card">
    <div class="card" v-for="(card, index) in cards" :key="index" data-aos="fade-right" :data-aos-delay="index * 600">
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
</template>
  
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {

  mounted() {
    AOS.init();
  },
  data() {
    return {
      cards: [
        {
          img: require('@/assets/environment_icon.svg'),
          title: "Respect environnemental",
          points: [
            "Durabilité des produits", "Emballage écologique", "Certifications environnementales",
            "Énergie renouvelable",
          ],
        },
        {
          img: require('@/assets/customer_loyalty_icon.svg'),
          title: "Satisfaction clients",
          points: [
            "Expérience client exceptionnelle", "Satisfaction garantie", "Écoute attentive des clients",
            "Politique de retour facile"
          ]
        },
        {
          img: require('@/assets/shipping_icon.svg'),
          title: "Livraison rapide",
          points: [
            "Paiement sécurisé", "Expédition express", "Livraison en 3 jours ouvrés",
          ]
        },
      ],
      text: '',
    };
  },
};
</script>
  
<style scoped>

h2 {
  margin-top: 50px;
  text-align: center;
  font-size: 1.8rem;
}

.container-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 90%;
  margin: 50px auto;
}

.card {
  min-height: 400px;
  min-width: 350px;
  border-radius: 25px;
  color: #3f3f3f;
  padding: 30px;
  background-color: var(--clr-light-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card h3 {
  font-size: 1.5rem;
}

.card img {
  margin: 1rem 0;
  width: 100px;
  height: 100px;
}

ul {
  padding: 1rem;
}

li {
  line-height: 2;
  list-style: url('@/assets/check_icon.svg');
  list-style-position: inside;
  text-align: left;
}

.parallax {
  background-image: url('@/assets/parallax.jpg');
  width: 100%;
  height: 300px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>