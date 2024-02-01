<template>
    <div>
        <input type="text" placeholder="raisonSociale" v-model="localUser.raisonSociale">
        <p v-if="!isValidRaisonSociale">Veuillez entrer une raison sociale valide</p>
        <input type="text" placeholder="Num siret" v-model="localUser.siret">
        <input type="text" placeholder="adresse" v-model="localUser.adresse">
        <input type="text" placeholder="codePostal" v-model="localUser.codePostal">
        <input type="text" placeholder="ville" v-model="localUser.ville">
        <input type="email" placeholder="email" v-model="localUser.email">
        <input type="password" placeholder="Mot de passe" >
        <input type="password" placeholder="confirmation mot de passe" v-model="localUser.password">
    </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  data() {
    return {
      localUser: this.user,
      // Ajoutez des propriétés pour chaque champ
      isValidRaisonSociale: true,
      // ... autres propriétés ...
    };
  },
  watch: {
    // Utilisez watch pour réinitialiser la validation lorsqu'un champ change
    localUser: {
      handler() {
        this.resetValidation();
      },
      deep: true,
    },
  },
  computed: {
    // Ajoutez des propriétés calculées pour chaque champ
    // Ces propriétés seront utilisées pour afficher les messages d'erreur
    // Vous pouvez personnaliser les règles de validation selon vos besoins
    isValidSiret() {
      return this.localUser.siret && /^\d{14}$/.test(this.localUser.siret);
    },
    isValidAdresse() {
      return !!this.localUser.adresse;
    },
    isValidCodePostal() {
      return /^\d{6}$/.test(this.localUser.codePostal);
    },
    isValidVille() {
      return !!this.localUser.ville;
    },
    isValidEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.localUser.email);
    },
    isValidPassword() {
      return !!this.localUser.password;
    },
    isValidPasswordConfirmation() {
      return this.localUser.password === this.localUser.passwordConfirmation;
    },
  },
  methods: {
    // Ajoutez des méthodes pour réinitialiser la validation
    resetValidation() {
      this.isValidRaisonSociale = true;
      // ... réinitialisez d'autres propriétés de validation ...
    },
  },
};
</script>

<style></style>