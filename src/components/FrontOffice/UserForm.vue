<template>
    <div>
        <input type="text" placeholder="raisonSociale" v-model="localUser.raisonSociale">
        <input type="text" placeholder="Num siret" v-model="localUser.siret">
        <input type="text" placeholder="adresse" v-model="localUser.adresse">
        <input type="text" placeholder="codePostal" v-model="localUser.codePostal">
        <input type="text" placeholder="ville" v-model="localUser.ville">
        <input type="email" placeholder="email" v-model="localUser.email">
        <input type="password" placeholder="Mot de passe" v-model="localUser.password">
    </div>
</template>

<script>
export default {
    props: {
        user: Object,
    },
    computed: {
        localUser: {
            get() {
                return this.user
            }
        }
    }
};
</script>

<style></style>
