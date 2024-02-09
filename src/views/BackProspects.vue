<template>
    <BackNav />
    <header class="action-bar">
        <h1>Prises de contact via formulaire</h1>
    </header>
    <div class="listing-template listing-prospects">
        <div class="listing-box" v-for="(contact, index) in prospects" :key="index">
            <div>
                <h2>Contact {{ index+1 }}</h2>
                <p>{{ contact.firstName }} {{ contact.lastName }}</p>
                <p>{{ contact.email }}</p>
            </div>
            <div>
                <p>Contenu du message : </p>
                <p>{{ contact.message }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import BackNav from "@/components/FrontOffice/BackNav.vue";

export default {
    components: {
        BackNav,
    },
    data() {
        return {
            prospects: [],
        }
    },
   watch: {
    "$store.state.prospects": {
        handler(newProspects) {
            this.prospects = newProspects;
        },
        deep: true 
    }
},
    created() {
        this.prospects = this.$store.state.prospects;
    },
}

</script>

<style>
.listing-prospects .listing-box {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.listing-prospects .listing-box h2 {
    margin: 0;
}

.listing-prospects .listing-box p {
    margin: 0;
}
</style>